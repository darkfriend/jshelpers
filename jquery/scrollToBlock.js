/**
 * @ru Скроллит по DOM-object
 * @en It makes scroll to needed DOM-object
 * @author darkfriend
 * @param {string} selector
 */
export function scrollToBlock(selector){
    if($(selector).length){
        var pos = $(selector).offset();
        $('body').animate({scrollTop:pos.top}, 300);
    } else {
        if(typeof window.debug != 'undefined' && window.debug!==false){
            console.log('Error! Selector: "'+selector+'" not found!');
        }
    }
}