import React from "react";
import Countdown from "react-countdown-now";
import "./Countdown.css";

export default function CountdownClock({ date, content }) {
  const Completionist = () => <span>It's Live!</span>;
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <Completionist />;
    } else {
      return (
        <span>
          {parseInt(days)} Days, {parseInt(hours)} Hours, {parseInt(minutes)}{" "}
          minutes, {parseInt(seconds)} seconds
        </span>
      );
    }
  };
  return (
    <div className="countdown">
      <p>
        {content}
        <span className="countdownTimer">
          <Countdown date={new Date(date)} renderer={renderer} />
        </span>
      </p>
    </div>
  );
}
