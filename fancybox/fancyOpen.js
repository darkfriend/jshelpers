$('.fancyOpen').click(function(){
    var modal = $(this).data('modal');
    var modalFunc = $(this).data('func');
    if($(modal).length){
        $.fancybox.open($(modal),{
            afterShow : function(){
                if(modalFunc && typeof window[modalFunc] == 'function'){
                    window[modalFunc]();
                }
            }
        });
    }
    return false;
});