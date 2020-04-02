import React from "react";
import "./FrontImage.css";

export default function FrontImage({ img }) {
  return <img src={`assets/${img}`} alt="surrel-pic" />;
}
