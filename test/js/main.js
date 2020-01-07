const albumLength = 516.25;
var currentSlide = 2;
var currentLeft = parseInt($('.schedule-slider').css('margin-left'));

var coll = $(".faq-question");
var i;

$(document).ready(function() { 
    window.addEventListener("resize", function() {
        $('.schedule-slider').css('margin-left', 'calc(50% + 83.125px + ' + ((2 - currentSlide) * (albumLength + 96.25)) + 'px)');
        currentLeft = parseInt($('.schedule-slider').css('margin-left'));
    });

    $(document).scrollsnap({
        snaps: '.snap',
        proximity: 400,
        easing: 'easeOutBack',
        onSnap: function( snappedElement ) {
            $('body > .active').removeClass("active");
            $(snappedElement).addClass("active");
            $(snappedElement).css("opacity","1");
            const snaps = $('body > div:not(.active)');

            snaps.each( function() {
                $(this).css('opacity','0');
            });
        }
    });

    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault();
    
        $('body,html').animate({
            scrollTop: $($(this).attr('href')).position().top
          },
          500,
        );
    });

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            content.classList.toggle("active");
            if (content.style.maxHeight){
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + 12 + "px";
            } 
        });
    }
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