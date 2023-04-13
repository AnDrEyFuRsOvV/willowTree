// This is a link to the documentation title
// https://kenwheeler.github.io/slick/




    // Function of sliders
    export default function slickSlider(){
        // Here is a slider for banners on the main page
        $('.top-slider__wrapper').slick({
            arrows: false,
            // dots: true,
            infinite: true,
            speed: 700,
            autoplay: true,
            autoplaySpeed: 4000
        });
        // the end slider
        // Here is a slider for stock buttons on the main page that turns on when the screen is equal to 800 pixels
        $('.stock__items').slick({
            responsive: [
                {
                    breakpoint: 100000,
                    settings: "unslick"
                },
                {
                    breakpoint: 800,
                    settings: {
                        arrows: false,
                        infinite: true,
                        slidesToShow: 4,
                        slidesToScroll: 3,
                        centerMode: true,
                        variableWidth: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        arrows: false,
                        infinite: true,
                        slidesToShow: 4,
                        slidesToScroll: 3,
                        centerMode: true,
                        variableWidth: true
                    }
                },
                {
                    breakpoint: 450,
                    settings: {
                        arrows: false,
                        infinite: true,
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        centerMode: false,
                        variableWidth: true
                    }
                },
            ]
        });
        $('.catalog-menu__links-slider').slick({
            responsive: [
                {
                breakpoint: 880,
                settings: {
                    arrows: false,
                    // infinite: true,
                    
                    slidesToScroll: 2,
                    // centerMode: true,
                    variableWidth: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    arrows: false,
                    // infinite: true,
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    // centerMode: true,
                    variableWidth: true
                }
            },
            {
                breakpoint: 450,
                settings: {
                    arrows: false,
                    // infinite: true,
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    // centerMode: true,
                    variableWidth: true
                }
            }
        ]
    });
    $('.photos__img-slider').slick({
        responsive: [
            {
                breakpoint: 100000,
                settings: "unslick"
            },
            {
                breakpoint: 1150,
                settings: {
                    prevArrow: '<button type="button" class="left__arrow-slider"><img src="../images/card-detale/left-arrow.svg" alt=""></button>',
                    nextArrow: '<button type="button" class="right__arrow-slider"><img src="../images/card-detale/rigt-arrow.svg" alt=""></button>',
                    infinite: true,
                    speed: 700,
                    autoplay: true,
                    autoplaySpeed: 4000
                }
            }
        ]
    });
    $('.description__mod-slider').slick({
        responsive: [
            {
                breakpoint: 100000,
                settings: "unslick"
            },
            {
                breakpoint: 380,
                settings: {
                    arrows: false,
                    infinite: true,
                    speed: 700,
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    variableWidth: true
                }
            }
        ]
    });
}



    