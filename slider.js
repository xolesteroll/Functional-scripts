
    // Slider Init Function
    function sliderInit(slider, slidesToShow = 1, slidesToScroll = 1) {
        const slides = slider.querySelectorAll('[data-slider-slide]'),
        prev = slider.querySelector('[data-slider-prev]'),
        next = slider.querySelector('[data-slider-next]'),
        slidesWindow = slider.querySelector('[data-slider-wrapper]'),
        slidesField = slider.querySelector('[data-slider-inner]'),
        marginLeft = parseInt(window.getComputedStyle(slides[1]).marginLeft),
        slidesWindowWidth = parseInt(window.getComputedStyle(slidesWindow).width);
        
        let offset = 0;

        slidesField.style.width = ((slidesWindowWidth - (marginLeft * (slidesToShow - 1))) * (slides.length / slidesToShow)) + (marginLeft * (slides.length - 1)) + 'px';
        slidesField.style.display = 'flex';
        slidesWindow.style.overflow = 'hidden';

        
        let slidesFieldWidth = parseInt(window.getComputedStyle(slidesField).width);
    
        slides.forEach(slide => {
            if (marginLeft != 0) {
                slide.style.width = (slidesWindowWidth - (marginLeft * (slidesToShow - 1))) / slidesToShow  + 'px';
            } else {
                slide.style.width = slidesWindowWidth / slidesToShow + 'px';
            }
        });
    
        next.addEventListener('click', () => {
            if (marginLeft != 0) {
                if (offset >= (slidesWindowWidth * ((Math.round(slides.length) / slidesToShow) - 1))) {
                    offset = 0;
                } else {
                    offset += ((slidesWindowWidth - (marginLeft * (slidesToShow - 1))) / slidesToShow) * slidesToScroll + (marginLeft * slidesToScroll);
                }
            } else {
                if (offset >= (slidesWindowWidth * ((Math.round(slides.length) / slidesToShow) - 1))) {
                    offset = 0;
                } else {
                    offset += slidesWindowWidth / slidesToShow * slidesToScroll;
                }
            }
            slidesField.style.transform = `translateX(-${offset}px)`;
    
        });
    
        prev.addEventListener('click', () => {
            if (marginLeft != 0) {
                if (offset == 0) {
                    offset = slidesFieldWidth - slidesWindowWidth;
                } else {
                    offset -= ((slidesWindowWidth - (marginLeft * (slidesToShow - 1))) / (slidesToShow)) * slidesToScroll + (marginLeft * slidesToScroll);
                }
            } else {
                if (offset == 0) {
                    offset = slidesWindowWidth * ((Math.round(slides.length) / slidesToShow) - 1);
                } else {
                    offset -= slidesWindowWidth / slidesToShow * slidesToScroll;
                }
            }
            slidesField.style.transform = `translateX(-${offset}px)`;
    
        });
    }
