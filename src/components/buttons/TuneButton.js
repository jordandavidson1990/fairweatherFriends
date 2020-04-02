import React from "react";
import { navigate } from "@reach/router";

export default function TuneButton() {
  return <button onClick={() => navigate("/tunes")}>Tunes</button>;
}
