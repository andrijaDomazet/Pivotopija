import React, { Component } from 'react';
import "./Imageslide.scss";
import $ from "jquery";

$(document).ready(function () {
    //seInterval animate margin-left and the last slide go to the first position (0px) 

    var width = 720;
    var animationSpeed = 1000;
    var pause = 3000;
    var currentSlide = 1;
    // try and configure all the variables so that you can change it at any point( things of the same type at the same place)

    var $slider = $("#slider");
    var $slideContainer = $slider.find('.slides');
    var $slides = $slideContainer.find('.slide');

    //the jQuery selector is used only once and the code is very efficient as you are CACHING THE DOM
    var interval;
    //have to define the variable outside startSlider() to have it in the scope of a function call

    function startSlider() {
        interval = setInterval(function () {
            $($slideContainer).animate({
                "margin-left": "-=" + width
            }, animationSpeed, firstSlide);
        }, pause);

        function firstSlide() {
            currentSlide++;
            if (currentSlide === $slides.length) {
                currentSlide = 1;
                $slideContainer.css("margin-left", 0);
            }
        }
    }

    function stopSlider() {
        clearInterval(interval);
    }
    $slider.on("mouseenter", stopSlider).on("mouseleave", startSlider);

    startSlider();
});

export default class Imageslide extends Component {
    render() {
        return (
            <div>
                <div id="slider">
                    <ul class="slides">
                        <li class="slide slide1"><p>slide1</p></li>
                        <li class="slide slide2"><p>slide2</p></li>
                        <li class="slide slide3"><p>slide3</p></li>
                        <li class="slide slide4"><p>slide4</p></li>
                        <li class="slide slide5"><p>slide5</p></li>
                        <li class="slide slide1"><p>slide1</p></li>
                    </ul>
                </div>
            </div>
        )
    }
}
