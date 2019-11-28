import React, { Component } from "react";
import Slide from "./Slide";
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";
import NazivSlajda from "./NazivSlajda";
import "./Slider.scss";
import "../BottomMenu/Bottom_menu.scss";
import pivoclear1 from "../../img/pivoclear1.jpg";
import pivoclear2 from "../../img/pivoclear2.jpg";
import pivoclear3 from "../../img/pivoclear3.jpg";
import pivoclear4 from "../../img/pivoclear4.jpg";
import banner4 from "../../img/banner4.jpg";

export default class Slider extends Component {
  state = {
    images: [pivoclear1, pivoclear2, pivoclear3, pivoclear4, banner4],
    currentIndex: 0,
    translateValue: 0
  };

  componentDidMount = () => {
    let intervalId = setInterval(this.timer, 15000);
    this.setState({ intervalId: intervalId });
  };

  componentWillUnmount = () => {
    clearInterval(this.state.intervalId);
  };

  timer = () => {
    if (this.state.currentIndex === this.state.images.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      });
    }
    this.setState({
      currentIndex: this.state.currentIndex + 1,
      translateValue: this.state.translateValue + -this.slideWidth()
    });
  };

  goToPrevSlide = () => {
    if (this.state.currentIndex === 0) {
      return this.setState({
        currentIndex: this.state.images.length - 1,
        translateValue: -this.slideWidth() * (this.state.images.length - 1)
      });
    }
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + this.slideWidth()
    }));
  };

  goToNextSlide = () => {
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
    return document.querySelector(".slide").clientWidth + 1.8;
  };

  render = () => {
    return (
      <div className="slider">
        <div
          className="slider-wrapper"
          style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: "transform ease-out 1s"
          }}
        >
          {this.state.images.map((image, i) => (
            <Slide key={i} image={image} />
          ))}
        </div>
        <LeftArrow goToPrevSlide={this.goToPrevSlide} />
        <RightArrow goToNextSlide={this.goToNextSlide} />
        <NazivSlajda />
      </div>
    );
  };
}
