export function unserialize ( inp ) {	// Creates a PHP value from a stored representation
	let error = 0;
	let errormsg;
	if (inp == "" || inp.length < 2) {
		errormsg = "input is too short";
		return;
	}
	let val, kret, vret, cval;
	let type = inp.charAt(0);
	let cont = inp.substring(2);
	let size = 0, divpos = 0, endcont = 0, rest = "", next = "";

	switch (type) {
	case "N": // null
		if (inp.charAt(1) != ";") {
			errormsg = "missing ; for null";
		}
		// leave val undefined
		rest = cont;
		break;
	case "b": // boolean
		if (!/[01];/.test(cont.substring(0,2))) {
			errormsg = "value not 0 or 1, or missing ; for boolean";
		}
		val = (cont.charAt(0) == "1");
		rest = cont.substring(1);
		break;
	case "s": // string
		val = "";
		divpos = cont.indexOf(":");
		if (divpos == -1) {
			errormsg = "missing : for string";
			break;
		}
		size = parseInt(cont.substring(0, divpos));
		if (size == 0) {
			if (cont.length - divpos < 4) {
				errormsg = "string is too short";
				break;
			}
			rest = cont.substring(divpos + 4);
			break;
		}
		if ((cont.length - divpos - size) < 4) {
			errormsg = "string is too short";
			break;
		}
		if (cont.substring(divpos + 2 + size, divpos + 4 + size) != "\";") {
			errormsg = "string is too long, or missing \";";
		}
		val = cont.substring(divpos + 2, divpos + 2 + size);
		rest = cont.substring(divpos + 4 + size);
		break;
	case "i": // integer
	case "d": // float
		let dotfound = 0;
		for (let i = 0; i < cont.length; i++) {
			cval = cont.charAt(i);
			if (isNaN(parseInt(cval)) && !(type == "d" && cval == "." && !dotfound++)) {
				endcont = i;
				break;
			}
		}
		if (!endcont || cont.charAt(endcont) != ";") {
			errormsg = "missing or invalid value, or missing ; for int/float";
		}
		val = cont.substring(0, endcont);
		val = (type == "i" ? parseInt(val) : parseFloat(val));
		rest = cont.substring(endcont + 1);
		break;
	case "a": // array
		if (cont.length < 4) {
			errormsg = "array is too short";
			return;
		}
		divpos = cont.indexOf(":", 1);
		if (divpos == -1) {
			errormsg = "missing : for array";
			return;
		}
		size = parseInt(cont.substring(1, divpos - 1));
		cont = cont.substring(divpos + 2);
		val = new Array();
		if (cont.length < 1) {
			errormsg = "array is too short";
			return;
		}
		for (let i = 0; i + 1 < size * 2; i += 2) {
			kret = unserialize(cont, 1);
			if (error || kret[0] == undefined || kret[1] == "") {
				errormsg = "missing or invalid key, or missing value for array";
				return;
			}
			vret = unserialize(kret[1], 1);
			if (error) {
				errormsg = "invalid value for array";
				return;
			}
			val[kret[0]] = vret[0];
			cont = vret[1];
		}
		if (cont.charAt(0) != "}") {
			errormsg = "missing ending }, or too many values for array";
			return;
		}
		rest = cont.substring(1);
		break;
	case "O": // object
		divpos = cont.indexOf(":");
		if (divpos == -1) {
			errormsg = "missing : for object";
			return;
		}
		size = parseInt(cont.substring(0, divpos));
		let objname = cont.substring(divpos + 2, divpos + 2 + size);
		if (cont.substring(divpos + 2 + size, divpos + 4 + size) != "\":") {
			errormsg = "object name is too long, or missing \":";
			return;
		}
		let objprops = unserialize("a:" + cont.substring(divpos + 4 + size), 1);
		if (error) {
			errormsg = "invalid object properties";
			return;
		}
		rest = objprops[1];
		let objout = "function " + objname + "(){";
		for (let key in objprops[0]) {
			objout += "" + key + "=objprops[0]['" + key + "'];";
		}
		objout += "}val=new " + objname + "();";
		eval(objout);
		break;
	default:
		errormsg = "invalid input type";
	}
	return (arguments.length == 1 ? val : [val, rest]);
}