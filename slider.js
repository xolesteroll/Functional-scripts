function sliderInit(slides, prev, next, slidesWindow, slidesField, marginLeft, slidesWindowWidth, offset, slidesToShow) {
    offset = 0;
    slidesField.style.width = 100 * slides.length + '%';

    slides.forEach(slide => {
        if (marginLeft != 0) {
            slide.style.width = (+slidesWindowWidth.slice(0, slidesWindowWidth.length - 2) - (marginLeft * (slidesToShow - 1))) / slidesToShow  + 'px';
        } else {
            slide.style.width = +slidesWindowWidth.slice(0, slidesWindowWidth.length - 2) / slidesToShow + 'px';
        }
    });

    next.addEventListener('click', () => {
        if (marginLeft != 0) {
            if (offset >= (+slidesWindowWidth.slice(0, slidesWindowWidth.length - 2) * ((Math.round(slides.length) / slidesToShow) - 1))) {
                offset = 0;
            } else {
                offset += +slidesWindowWidth.slice(0, slidesWindowWidth.length - 2) + marginLeft;
            }
        } else {
            if (offset >= (+slidesWindowWidth.slice(0, slidesWindowWidth.length - 2) * ((Math.round(slides.length) / slidesToShow) - 1))) {
                offset = 0;
            } else {
                offset += +slidesWindowWidth.slice(0, slidesWindowWidth.length - 2);
            }
        }
        slidesField.style.transform = `translateX(-${offset}px)`;

    });

    prev.addEventListener('click', () => {
        if (marginLeft != 0) {
            if (offset == 0) {
                offset = (+slidesWindowWidth.slice(0, slidesWindowWidth.length - 2) + marginLeft) * ((Math.round(slides.length) / slidesToShow) - 1);
            } else {
                offset -= +slidesWindowWidth.slice(0, slidesWindowWidth.length - 2) + marginLeft;
            }
        } else {
            if (offset == 0) {
                offset = +slidesWindowWidth.slice(0, slidesWindowWidth.length - 2) * ((Math.round(slides.length) / slidesToShow) - 1);
            } else {
                offset -= +slidesWindowWidth.slice(0, slidesWindowWidth.length - 2);
            }
        }
        slidesField.style.transform = `translateX(-${offset}px)`;

    });
}