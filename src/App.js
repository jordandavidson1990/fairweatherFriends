import React from "react";
import { createProvider } from "./context/index";
import { Router } from "@reach/router";
import MainContainer from "./containers/MainContainer";
import Tunes from "./pages/Tunes";
import "./App.css";

const Provider = createProvider({});

function App() {
  return (
    <Provider>
      <Router>
        <MainContainer path="/" />
        <Tunes path="/tunes" />
      </Router>
    </Provider>
  );
}

export default App;
