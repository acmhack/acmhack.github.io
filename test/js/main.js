const albumLength = 516.25;
var currentSlide = 2;
var currentLeft = parseInt($('.schedule-slider').css('margin-left'));

$(document).ready(function() { 
    window.addEventListener("resize", function() {
        $('.schedule-slider').css('margin-left', 'calc(50% + 83.125px + ' + ((2 - currentSlide) * (albumLength + 96.25)) + 'px)');
        currentLeft = parseInt($('.schedule-slider').css('margin-left'));
    });
});

function schedulePrev() {
    if( currentSlide != 1 ) {
        currentLeft += albumLength + 96.25;
        $('.schedule-slider').css('margin-left', currentLeft + 'px');
        currentSlide--;
    }
}

function scheduleNext() {
    if( currentSlide != $('.album').length ) {
        currentLeft += (-albumLength - 96.25);
        $('.schedule-slider').css('margin-left', currentLeft + 'px');
        currentSlide++;
    }
}