import React from "react";
import Countdown from "react-countdown-now";
import "./Countdown.css";

export default function CountdownClock({ date }) {
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
          <Countdown date={new Date(date)} renderer={renderer} />
        </span>
      </p>
    </div>
  );
}
