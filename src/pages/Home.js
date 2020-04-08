import React, { useState } from "react";
import Header from "../components/Header";
import FrontImage from "../components/FrontImage";

export default function Home() {
  const [title, setTitle] = useState("Fairweather Friends");
  const [image, setImage] = useState("Jiggy_surreal.jpg");
  const [showBlindsidersButton, setShowBlindersidersButton] = useState(false);
  const [blindsidersBoolean, setBlindsidersBoolean] = useState(false);
  const [keyCodeArray, setKeyCodeArray] = useState([]);
  // const keyListen = (event) => {
  //   // up, up, down, down, left, left, right, right
  //   const cheatCodes = [38, 38, 40, 40, 37, 37, 39, 39];
  //   const keycode = event.keyCode;
  //   if (keycodeArray.length === 8) {
  //     setKeycodeArray((prev)=> {...prev}).shift();
  //   }
  //   keycodeArray.push(keycode);
  //   console.log("cheatCodes:", cheatCodes);
  //   console.log("keyCodeArray:", keycodeArray);
  //   for (let i = 0; i < cheatCodes.length; i++) {
  //     if (cheatCodes[i] !== keycodeArray[i]) {
  //       return false;
  //     }
  //   }
  //   setShowBlindersidersButton(true);

  //   // }
  // };
  // document.addEventListener("keyup", keyListen);

  const showJazzyImage = () => {
    const boolean = !blindsidersBoolean;

    if (boolean) {
      setBlindsidersBoolean(true);
      setTitle("Blindsiders");
      setImage("blindsiders.png");
    } else {
      setBlindsidersBoolean(false);
      setTitle("Fairweather Friends");
      setImage("Jiggy_surreal.jpg");
    }
  };

  return (
    <>
      <Header title={title} />
      <FrontImage img={image} />
      {showBlindsidersButton ? (
        <button onClick={showJazzyImage} type="button">
          Press for Surprise
        </button>
      ) : null}
    </>
  );
}
