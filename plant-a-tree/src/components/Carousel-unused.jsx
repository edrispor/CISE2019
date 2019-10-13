import React, { Component } from "react";
import Kauri1 from "../TreeImages/Kauri-1";
import Kauri2 from "../TreeImages/kauri2";
import Kauri3 from "../TreeImages/kauri3";

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [Kauri1, Kauri2, Kauri3],
      currentImageIndex: 0
    };
    this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
  }

  prevSlide() {
    const lastIndex = images.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

    this.setState({
      currentImageIndex: index
    });
  }

  nextSlide() {
    const lastIndex = images.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentImageIndex + 1;

    this.setState({
      currentImageIndex: index
    });
  }

  render() {
    return (
      <div className="carousel">
        <Arrow
          direction="left"
          clickFunction={this.prevSlide}
          glyph="&#9664;"
        />
        <ImageSlide url={images[this.state.currentImageIndex]} />
        <Arrow
          direction="right"
          clickFunction={this.nextSlide}
          glyph="&#9654;"
        />
      </div>
    );
  }
}
