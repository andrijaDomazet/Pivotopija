import React, { Component } from "react";
import Slide from "./Slide";
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";
import "./Slider.scss";
import pivoclear1 from "../../img/pivoclear1.jpg";
import pivoclear2 from "../../img/pivoclear2.jpg";
import pivoclear3 from "../../img/pivoclear3.jpg";
import pivoclear4 from "../../img/pivoclear4.jpg";
import banner4 from "../../img/banner4.jpg";
import "./Bottom_menu.scss";
import NazivSlajda from "./NazivSlajda";

export default class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [pivoclear1, pivoclear2, pivoclear3, pivoclear4, banner4],
      currentIndex: 0,
      translateValue: 0
    };
  }

  goToPrevSlide = () => {};

  goToNextSlide = () => {
    console.log(this.state.currentIndex);
    if (this.state.currentIndex === this.state.images.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      });
    }

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -this.slideWidth()
    }));
  };

  slideWidth = () => {
    return document.querySelector(".slide").clientWidth;
  };

  render() {
    return (
      <div className="slider">
        <div
          className="slider-wrapper"
          style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: "transform ease-out 0.45s"
          }}
        >
          {this.state.images.map((image, i) => (
            <Slide key={i} image={image} />
          ))}
        </div>

        <LeftArrow goToPrevSlide={this.goToPrevSlide} />
        <NazivSlajda />
        <RightArrow goToNextSlide={this.goToNextSlide} />
      </div>
    );
  }
}
