import React from "react";
import CountdownClock from "../components/Countdown";

export default function Gigs() {
  const nextStream = new Date("2020-04-03T17:40:00.000Z");
  return (
    <div>
      <h1>Gigs</h1>
      <p>Check facebook for live streams from Sam</p>
      <p></p>
      <li>
        <a href="https://www.facebook.com/FWFMusic">Live Stream</a>
        <CountdownClock date={nextStream} />
        <img src="assets/Ross4.jpeg" alt="Sam and Jiggy" />
      </li>
    </div>
  );
}
