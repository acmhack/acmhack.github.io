$( window ).ready(function() {
    var wHeight = $(window).height();
    $('.slide')
    .scrollie({
        scrollOffset : 0,
        scrollingInView : function(elem) {
            var bgColor = elem.data('background');
            $('body').css('background', bgColor); 
        }
    });
});