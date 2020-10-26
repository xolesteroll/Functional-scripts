function sliderInit(slides, prev, next, slidesWindow, slidesField, marginLeft, slidesWindowWidth, offset, slidesToShow, slidesToScroll = 1) {
        offset = 0;
        slidesField.style.width = ((slidesWindowWidth - (marginLeft * (slidesToShow - 1))) * (slides.length / slidesToShow)) + (marginLeft * (slides.length - 1)) + 'px';
    
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
                console.log(offset);
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
                    offset = (slidesWindowWidth * ((Math.round(slides.length) / slidesToShow) - 1));
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

