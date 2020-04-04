import React from "react";
import { icons } from "../../helpers/data";
import "./styles.css";

export default function Footer() {
  const socialMedias = icons.map((icon, index) => {
    return (
      <a href={icon.link} key={index}>
        <img src={`assets/${icon.image}.png`} alt={icon.image} />
      </a>
    );
  });
  return <div className="footer">{socialMedias}</div>;
}
