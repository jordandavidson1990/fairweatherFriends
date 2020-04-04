import React from "react";
import Countdown from "react-countdown-now";
import "./Countdown.css";

export default function CountdownClock({ date, content }) {
<<<<<<< HEAD
  const Completionist = () => <span>Time's Up!</span>;
=======
  const Completionist = () => <span>It's Live!</span>;
>>>>>>> master
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
        {content}
        <span className="countdownTimer">
          <Countdown date={new Date(date)} renderer={renderer} />
        </span>
      </p>
    </div>
  );
}
