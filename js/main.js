const albumLengthLarge = 516.25;
const albumLengthMedium = 442.5;
const albumLengthSmall = 295;
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
        if ($(window).width() > 550) {
            $('.schedule-slider').css('margin-left', 'calc(50% + 83.125px + ' + ((2 - currentSlide) * (albumLengthLarge + 96.25)) + 'px)');
        } else if ($(window).width() > 466) {
            $('.schedule-slider').css('margin-left', 'calc(50% + 71.25px + ' + ((2 - currentSlide) * (albumLengthMedium + 119)) + 'px)');
        } else {
            $('.schedule-slider').css('margin-left', 'calc(50% + 47.5px + ' + ((2 - currentSlide) * (albumLengthSmall + 170)) + 'px)');
        }
        currentLeft = parseInt($('.schedule-slider').css('margin-left'));
    });

    schedulePrev();

    // $(".page-switch").click(function(e) {
    //     e.preventDefault();

    //     $("body > div").css("opacity", 0).css("z-index", -1);
    //     $($(this).attr('href')).css("opacity", 1).css("z-index", 1);
        
    //     $(".page-switch").removeClass("active");
    //     $(this).addClass("active");
    // });

    $(".route-button").click(function(e) {
        e.preventDefault();

        $(".route-tickets.active").removeClass("active");
        $($(this).attr("href")).addClass("active");

        $(".route-button").removeClass("active");
        $(this).addClass("active");
    });

    $(".route-ticket").each(function(index) {
        $(this).children(".left-cutout").css("width", $(this).height() / 2).css("height", $(this).height() / 2).css("top", "calc(50% - " + ($(this).height() / 4) + "px").css("left", $(this).height() / -4);

        $(this).children(".right-cutout").css("width", $(this).height() / 2).css("height", $(this).height() / 2).css("top", "calc(50% - " + ($(this).height() / 4) + "px").css("right", $(this).height() / -4);
    });

    $(".corona .nav-link").click(function(e) {
        e.preventDefault();
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
        if($(window).width() > 550) {
            currentLeft += albumLengthLarge + 96.25;
        } else if ($(window).width() > 466) {
            currentLeft += albumLengthMedium + 119;
        } else {
            currentLeft += albumLengthSmall + 170;
        }
        $('.schedule-slider').css('margin-left', currentLeft + 'px');
        currentSlide--;
    } else if( currentSlide === 1) {
        if($(window).width() > 550) {
            currentLeft += 2 * (-albumLengthLarge - 96.25);
        } else if($(window).width() > 466) {
            currentLeft += 2 * (-albumLengthMedium - 119);
        } else {
            currentLeft += 2 * (-albumLengthSmall - 170);
        }
        $('.schedule-slider').css('margin-left', currentLeft + 'px');
        currentSlide = $('.album').length;
    }
}

function scheduleNext() {
    if( currentSlide < $('.album').length ) {
        if($(window).width() > 550) {
            currentLeft += (-albumLengthLarge - 96.25);
        } else if($(window).width() > 466) {
            currentLeft += (-albumLengthMedium - 119);
        } else {
            currentLeft += (-albumLengthSmall - 170);
        }
        $('.schedule-slider').css('margin-left', currentLeft + 'px');
        currentSlide++;
    } else if(currentSlide === $('.album').length) {
        if($(window).width() > 550) {
            currentLeft += 2 * (albumLengthLarge + 96.25);
        } else if($(window).width() > 466) {
            currentLeft += 2 * (albumLengthMedium + 119);
        } else {
            currentLeft += 2 * (albumLengthSmall + 170);
        }
        $('.schedule-slider').css('margin-left', currentLeft + 'px');
        currentSlide = 1;
    }
}