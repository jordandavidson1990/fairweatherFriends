import React, { useState } from "react";
import Cube from "../components/cube/cube";

export default function CubePage() {
  const [showCube, setShowCube] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [image, setImage] = useState("");

  const handleShowCube = () => {
    setShowCube(true);
  };

  const handleHideCube = () => {
    setShowCube(false);
  };

  const handleShowImage = (imageTitle) => {
    setShowImage(true);
    setImage(imageTitle);
  };

  return (
    <div>
      {showCube ? (
        <>
          <Cube displayImage={handleShowImage} />
          <button onClick={handleHideCube}>Hide the Cube</button>
        </>
      ) : (
        <button value="Show the Cube" onClick={handleShowCube}>
          Show The Cube
        </button>
      )}
      {showImage ? <img src={`/assets/gigs/${image}`} alt={image} /> : null}
    </div>
  );
}
