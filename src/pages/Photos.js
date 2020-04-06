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

export default function Carousel() {
  const slides = images.map((image, index) => {
    return (
      <Slide index={index} key={index}>
        <img src={require(`../assets/photos/${image}`)} alt={image} />
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
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
        <Slider>{slides}</Slider>
      </CarouselProvider>
    </>
  );
}
