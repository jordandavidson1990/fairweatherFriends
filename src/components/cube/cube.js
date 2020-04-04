import React from "react";
import { images } from "../../helpers/data";
import "./cube.css";

export default function Cube({ displayImage }) {
  const classNamesArray = ["front", "back", "right", "left", "top", "bottom"];
  const showImageNumber = imageTitle => {
    displayImage(imageTitle.target.value);
  };

  const cubeFaces = images.map((image, index) => {
    return (
      <figure className={classNamesArray[index]} key={index}>
        <button
          value={image}
          onClick={image => {
            showImageNumber(image);
          }}
        >
          {index}
        </button>
      </figure>
    );
  });

  return (
    <div className="main-container">
      <section className="container">
        <div id="cube">{cubeFaces}</div>
      </section>
    </div>
  );
}
