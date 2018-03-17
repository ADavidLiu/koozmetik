class SliderManager {
    constructor() {
        this.slider = $(".slider__list");
        this.initSlider();
    }

    initSlider = () => {
        if (this.slider.is(".slider__list--full")) {
            this.slider.slick({
                    mobileFirst: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    dots: true,
                    appendDots: $(".slider__dots"),
                    customPaging: (e, i) => {
                        return `<p class="slider__dots-item">0${i + 1}</p>`;
                    },
                    arrows: true,
                    appendArrows: $(".slider__arrows"),
                    prevArrow: "<img src='images/back-arrow.svg' alt='Previous' class='slider__arrow slider__arrow--prev' />",
                    nextArrow: "<img src='images/back-arrow.svg' alt='Previous' class='slider__arrow slider__arrow--next' />",
                    centerPadding: "50px",
                    autoplay: true,
                    autoplaySpeed: 3000,
                    responsive: [
                        {
                            breakpoint: 768,
                            settings: {
                                variableWidth: true,
                                centerPadding: "10.25rem"
                            }
                        }
                    ]
                });
        } else {
            this.slider.slick({
                mobileFirst: true,
                slidesToScroll: 1,
                slidesToShow: 1,
                fade: true,
                autoplay: true,
                autoplaySpeed: 3000,
                arrows: false,
                dots: true,
                appendDots: $(".hero__slider-dots"),
                adaptiveHeight: true,
                customPaging: (e, i) => {
                    return `<p class="slider__dots-item">0${i + 1}</p>`;
                }
            });
        }
    }
}