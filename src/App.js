import React from "react";
import { createProvider } from "./context/index";
import { Router } from "@reach/router";
import Navbar from "./components/Navbar";
import MainContainer from "./containers/MainContainer";
import Tunes from "./pages/Tunes";
import "./App.css";

const Provider = createProvider({});

function App() {
  return (
    <Provider>
      <Navbar />
      <Router primary={false}>
        <MainContainer path="/" />
        <Tunes path="/tunes" />
      </Router>
    </Provider>
  );
}

export default App;
