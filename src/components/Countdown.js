import React from "react";
import Countdown from "react-countdown-now";
import "./Countdown.css";

export default function CountdownClock() {
  const Completionist = () => <span>Time's Up!</span>;
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <Completionist />;
    } else {
      return (
        <span>
          {days} Days, {hours} Hours, {minutes} minutes, {seconds} seconds
        </span>
      );
    }
  };
  return (
    <div className="countdown">
      <p>
        New Song incoming:
        <span className="countdownTimer">
          <Countdown
            date={new Date("2020-04-31T23:59:59.000Z")}
            renderer={renderer}
          />
        </span>
      </p>
    </div>
  );
}
