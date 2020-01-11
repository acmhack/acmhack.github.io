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

    $('#fullpage').fullpage({
		//options here
        autoScrolling: true,
        scrollOverflow: true,
        afterLoad: function(section, origin, destination, direction) {
            $('#fullpage > *').each((index, element) => {
                $(element).css('opacity', 0);
            });

            $('.fp-section.active').css('opacity', 1);
        },
        onLeave: function( origin, destination, direction) {
            $(".navbar-nav li a").each((index, element) => {
                $(element).removeClass('active');
            });

            $("a[href='#" + destination.item.id + "']").addClass('active');
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