/**
 * Align blocks
 * @param {array} params width||height
 * @param {object} modify - modify max width||height
 * @example $(selector).alignSize(['height'])<br>
 * $(selector).alignSize(['height'],{height:20})
 */
$.fn.alignSize = function(params, modify) {
    this.width = 0,
        this.height = 0;
    var o = this;
    if(!params) params = ['width','height'];
    this.each(function(){
        var el = $(this);
        params.forEach(function(item){
            var iCss = parseInt(el.css(item));
            if(iCss && o[item]<iCss){
                o[item] = iCss;
            }
        });
    });

    params.forEach(function(item){
        if(modify && modify[item]){
            o[item] += modify[item];
        }
        o.css(item, o[item]);
    });
}