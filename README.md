# Functional-scripts

This is a repository for my functional scripts, that you can use in your work.

// Slider 

This is a function for slider initiation. 



// HTML scheme:
```html
<div class="slider" data-slider>
    <img src="" alt="" class="slider__arrow-prev" data-slider-prev>
    <div class="slider__wrapper" data-slider-wrapper>
        <div class="slider__inner" data-slider-inner>
            <div class="slider__item" data-slider-slide></div>
            <div class="slider__item" data-slider-slide></div>
            <div class="slider__item" data-slider-slide></div>
        </div>
    </div>
    <img src="" alt="" class="slider__arrow-next" data-slider-next>
</div>

NOTE: you can add classes as you want, but data- attributes should be exatly the same as in example.
```

1 To initiate a slider all you need to do is to declare a variable with your parent slider block.
Example:
const slider = document.querySelector('.slider);

2 Call a function sliderInit(slider, slidesToShow, slidesToScroll);
P.S. slidesToShow and slidesToScroll are equal 1 by default;
