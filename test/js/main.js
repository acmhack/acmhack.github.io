const albumLength = 516.25;
const linkedInMap = {
    "Chris G.": "https://www.linkedin.com/in/christopherlgu/",
    "Luis O.": "https://www.linkedin.com/in/luismocampo/",
    "Connor P.": "https://www.linkedin.com/in/connor-pautz/",
    "Himnish S.": "https://www.linkedin.com/in/himnish-sapkota-5b3446179/",
    "Annie S.": "https://www.linkedin.com/in/anne-simpson-b2426a140/",
    "Caleb F.": "https://www.linkedin.com/in/caleb-furnas/",
    "Lauren S.": "https://www.linkedin.com/in/laurenschmidt26/",
    "Allison C.": "https://www.linkedin.com/in/allison-n-chan/",
    "Alec M.": "https://www.linkedin.com/in/alec-mcdaniel/",
    "Bharat S.": "https://www.linkedin.com/in/bharat-sreekrishnavilas-646283193/",
    "Jose A.": "https://www.linkedin.com/in/jmalega/",
    "Alan T.": "https://www.linkedin.com/in/alan-truong-b5411814b/",
    "Colton J.": "https://www.linkedin.com/in/colton-jacobson-ab7b47163/",
    "Dylan B.": "https://www.linkedin.com/in/dylan-burr-0842a414b/",
    "John A.": "https://www.linkedin.com/in/johnadamse/",
    "LanChau L.": "https://www.linkedin.com/in/lanchauletran/",
    "Jess L.": "https://www.linkedin.com/in/jessicatlam/",
    "Josie G.": "https://www.linkedin.com/in/josie-glassman-a36516183/"
};
var currentSlide = 2;
var currentLeft = parseInt($('.schedule-slider').css('margin-left'));

var coll = $(".faq-question");
var i;

$(document).ready(function() { 
    window.addEventListener("resize", function() {
        $('.schedule-slider').css('margin-left', 'calc(50% + 83.125px + ' + ((2 - currentSlide) * (albumLength + 96.25)) + 'px)');
        currentLeft = parseInt($('.schedule-slider').css('margin-left'));
    });

    schedulePrev();

    $('#fullpage').fullpage({
		//options here
        autoScrolling: true,
        scrollOverflow: true,
        normalScrollElements: '.faq-questions',
        anchors: ['top','about-anchor','schedule-anchor','faq-anchor','sponsors-anchor'],
        menu: '.navbar-nav',
        verticalCentered: false,
        scrollingSpeed: 400,
        recordHistory: false,
        afterLoad: function(origin, destination, direction) {
            $('#fullpage > *').each((index, element) => {
                $(element).css('opacity', 0);
            });

            $('.fp-section.active').css('opacity', 1);
        }
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
    if( currentSlide !== 1 ) {
        currentLeft += albumLength + 96.25;
        $('.schedule-slider').css('margin-left', currentLeft + 'px');
        currentSlide--;
    } else if( currentSlide === 1) {
        currentLeft += 2 * (-albumLength - 96.25);
        $('.schedule-slider').css('margin-left', currentLeft + 'px');
        currentSlide = $('.album').length;
    }
}

function scheduleNext() {
    if( currentSlide < $('.album').length ) {
        currentLeft += (-albumLength - 96.25);
        $('.schedule-slider').css('margin-left', currentLeft + 'px');
        currentSlide++;
    } else if(currentSlide === $('.album').length) {
        currentLeft += 2 * (albumLength + 96.25);
        $('.schedule-slider').css('margin-left', currentLeft + 'px');
        currentSlide = 1;
    }
}