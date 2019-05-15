/**
 * EN - start function from name. 
 * It's false if there is no function. Output error in console if debug = true.
 * I use it in order to start dynamic functions from DOM-object (example: data-func) in different other plugins and js-libraries.
 * RU - запускает фукцию по имени name. 
 * Если функции нет, то false. Если глобальная переманная debug = true, то пишет в консоль.
 * Я её использую для динамичного вызова разных функций, название которых берется из DOM-объекта (например: data-func) в разных сторонних плагинах и библиотеках. 
 * @param {string} name - name function
 * @param {boolean} debug
 * @example startFunc('test');
 * @returns {boolean}
 */
export function startFunc(name,debug=false){
	if(name && typeof window[name] == 'function'){
		window[name]();
	} else if(debug){
		console.log('Function '+name+' not found');
	} else {
		return false;
	}
}