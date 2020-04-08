import React from "react";
import CountdownClock from "../components/Countdown";
import "./Gigs.css";

export default function Gigs() {
  const nextStream = new Date("2020-04-06T17:30:00.000Z");
  return (
    <div className="gig-container">
      <h1>Gigs</h1>
      <p>Check facebook for live streams from Sam</p>
      <p></p>
      <a href="https://www.facebook.com/FWFMusic">
        <li>Live Stream</li>
      </a>

      <CountdownClock date={nextStream} content={"Next Set:"} />
      <img
        src={require("../assets/photos/Ross4.jpeg")}
        alt="Sam and Jiggy"
        className="photo-image"
      />
    </div>
  );
}
