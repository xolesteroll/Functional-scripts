# Functional-scripts

This is a repository for my functional scripts, that you can use in your work.

// Slider 

This is a function for slider initiation. 
You need to declare as variables slider elements below:
1. All slides, as a htmlcollecition.
2. Next, and Prev arrow for navigation.
3. If you need a margin beetween items, you would have to add margin-left to all slides besides first, and then declare this margin as a variable and parseInt() it.
4. You need to have a wrapper with overflow hidden.
5. You need to have an inner that would be a slider field with all the items of the slider.
6. YOu need to getcomputed style of width of the wrapper and parseInt() it.
7. You need to declare an offset variable usind let, and with undefined value.
8. YOu need to declare all those variable and use them as arguments of sliderInit function.
9. Profit.

// HTML scheme:
```html
<div class="slider">
    <img src="" alt="" class="slider__arrow-prev">
    <div class="slider__wrapper">
        <div class="slider__inner">
            <div class="slider__item"></div>
            <div class="slider__item"></div>
            <div class="slider__item"></div>
        </div>
    </div>
    <img src="" alt="" class="slider__arrow-next">
</div>
```

// CSS:

.slider__inner{
  display: flex;
}
.slider__wrapper{
  overflow: hidden;
}
