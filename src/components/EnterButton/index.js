import React from "react";
import "./styles.css";
import { navigate } from "@reach/router";

export default function EnterButton() {
  return (
    <div className="enter-container">
      <button className="enter-button" onClick={() => navigate("/home")}>
        Enter
      </button>
    </div>
  );
}
