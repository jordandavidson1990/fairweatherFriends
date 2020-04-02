import React from "react";
import { navigate } from "@reach/router";

export default function HomeButton() {
  const navigateHome = () => navigate("/");
  return <button onClick={navigateHome}>Travel Home</button>;
}
