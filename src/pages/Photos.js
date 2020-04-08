import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { images } from "../helpers/data";
import "./Photos.css";

export default function Carousel() {
  const slides = images.map((image, index) => {
    return (
      <Slide index={index} key={index}>
        <img
          src={require(`../assets/photos/${image}`)}
          alt={image}
          className="photo-image"
        />
      </Slide>
    );
  });
  return (
    <>
      <h1>Photos</h1>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={images.length}
      >
        <div className="carousel-buttons">
          <ButtonBack className="carousel-button">Back</ButtonBack>
          <ButtonNext className="carousel-button">Next</ButtonNext>
        </div>
        <Slider>{slides}</Slider>
      </CarouselProvider>
    </>
  );
}
