import React from "react";
import { createProvider } from "./context/index";
import { Router } from "@reach/router";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Tunes from "./pages/Tunes";
import Gigs from "./pages/Gigs";
import CubePage from "./pages/CubePage";
import Photos from "./pages/Photos";
import Footer from "./components/footer";
import "./App.css";

const Provider = createProvider({});

function App() {
  return (
    <Provider>
      <Navbar />
      <Router primary={false}>
        <Landing path="/" />
        <Home path="/home" />
        <Tunes path="/tunes" />
        <Gigs path="/gigs" />
        <CubePage path="/cube" />
        <Photos path="/photos" />
      </Router>
      <Footer />
    </Provider>
  );
}

export default App;
