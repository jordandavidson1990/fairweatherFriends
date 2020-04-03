import React from "react";
import "./cube.css";

export default function Cube() {
  const images = [
    "HandsomeJig.jpg",
    "Jack3.jpeg",
    "Jack4.jpeg",
    "JiggyFro.jpeg",
    "RossElder1.jpeg",
    "Wowsers.jpeg",
  ];

  const classNamesArray = ["front", "back", "right", "left", "top", "bottom"];

  const cubeFaces = images.map((image, index) => {
    return (
      <figure className={classNamesArray[index]} key={index}>
        <img src={`assets/gigs/${image}`} alt={image} />
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
