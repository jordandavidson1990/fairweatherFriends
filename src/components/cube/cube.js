import React from "react";
import "./cube.css";

export default function Cube({ displayImage }) {
  const images = [
    "HandsomeJig.jpg",
    "Jack3.jpeg",
    "Jack4.jpeg",
    "JiggyFro.jpeg",
    "RossElder1.jpeg",
    "Wowsers.jpeg",
  ];

  const classNamesArray = ["front", "back", "right", "left", "top", "bottom"];
  const showImageNumber = (imageTitle) => {
    displayImage(imageTitle.target.value);
  };

  const cubeFaces = images.map((image, index) => {
    return (
      <figure className={classNamesArray[index]} key={index}>
        <button
          value={image}
          onClick={(image) => {
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
