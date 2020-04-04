import React from "react";
import CountdownClock from "../components/Countdown";
import HomeButton from "../components/buttons/HomeButton";

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
      <div key={index}>
        <p>{songTitle.title}</p>
        <audio controls>
          <source src={`assets/${songTitle.source}.mp3`} type="audio/mp3" />
        </audio>
      </div>
    );
  });
  return (
    <>
      <h1>Tunes</h1>
      {audio}
      <CountdownClock
        date={"2020-04-31T23:59:59.000Z"}
<<<<<<< HEAD
        content={"Next Song Drop:"}
=======
        content={"New Song incoming:"}
>>>>>>> master
      />
      <HomeButton />
    </>
  );
}
