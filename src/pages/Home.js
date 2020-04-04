import React, { useState } from "react";
import Header from "../components/Header";
import FrontImage from "../components/FrontImage";

export default function Home() {
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
      <FrontImage img={`../assets/${image}`} />
      <button onClick={showJazzyImage} type="button">
        Press for Surprise
      </button>
      <button>
        <a href="/cube">Take me to the Cube</a>
      </button>
    </>
  );
}
