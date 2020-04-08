import React from "react";
import CountdownClock from "../components/Countdown";
import HomeButton from "../components/buttons/HomeButton";
import "./Tunes.css";

export default function Tunes() {
  const songTitles = [
    { title: "Easiness And I", source: "EasinessAndI" },
    { title: "I Don't Want To Know", source: "IDontWantToKnow" },
    { title: "Making Ends Meet", source: "MakingEndsMeet" },
    { title: "Up In The Air", source: "UpInTheAir" },
    { title: "Where The River Flows", source: "WhereTheRiverFlows" },
  ];

  const audio = songTitles.map((songTitle, index) => {
    return (
      <div key={index} className="audio-single">
        <p>{songTitle.title}</p>
        <audio controls>
          <source
            src={require(`../assets/${songTitle.source}.mp3`)}
            type="audio/mp3"
          />
        </audio>
      </div>
    );
  });
  return (
    <>
      <h1>Tunes</h1>
      <div className="audio-container">{audio}</div>
      <CountdownClock
        date={"2020-04-31T23:59:59.000Z"}
        content={"Next Song Drop:"}
      />
      <HomeButton />
    </>
  );
}
