import React, { useState } from "react";
import Header from "../components/Header";
import FrontImage from "../components/FrontImage";
import TuneButton from "../components/buttons/TuneButton";

export default function MainContainer() {
  const [title, setTitle] = useState("Fairweather Friends");
  const [image, setImage] = useState("Jiggy_surreal.jpg");
  const [blindsidersBoolean, setBlindsidersBoolean] = useState(false);

  const showJazzyImage = () => {
    const boolean = !blindsidersBoolean;

    if (boolean) {
      setBlindsidersBoolean(true);
      setTitle("Blindsiders");
      setImage("Blindsiders.png");
    } else {
      setBlindsidersBoolean(false);
      setTitle("Fairweather Friends");
      setImage("Jiggy_surreal.jpg");
    }
  };

  return (
    <>
      <Header title={title} />
      <TuneButton />
      <FrontImage img={image} />
      <button onClick={showJazzyImage} type="button">
        Press for Surprise
      </button>
    </>
  );
}
