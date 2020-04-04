import React from "react";
import { createProvider } from "./context/index";
import { Router } from "@reach/router";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Tunes from "./pages/Tunes";
import Gigs from "./pages/Gigs";
import CubePage from "./pages/CubePage";
import "./App.css";

const Provider = createProvider({});

function App() {
  // const basepath = process.env.REACT_APP_BASE_PATH_URL;
  return (
    <Provider>
      <Navbar />
      <Router primary={false}>
        <Landing path="/" />
        <Home path="/home" />
        <Tunes path="/tunes" />
        <Gigs path="/gigs" />
        <CubePage path="/cube" />
      </Router>
    </Provider>
  );
}

export default App;
