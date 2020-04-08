import React, { Suspense } from "react";
import { createProvider } from "./context/index";
import { Router } from "@reach/router";
import Landing from "./pages/Landing";
import Footer from "./components/footer";
import LoadingPage from "./pages/LoadingPage";
import Navbar from "./components/Navbar";
import { lazyLoad } from "./helpers/helpers";
import "./App.css";
import { AppBaseUrl } from "./config/env";

const Home = lazyLoad("Home");
const Tunes = lazyLoad("Tunes");
const Gigs = lazyLoad("Gigs");
const CubePage = lazyLoad("CubePage");
const Photos = lazyLoad("Photos");

const Loading = () => <nav>Loading nav...</nav>;

const Provider = createProvider({});

function App() {
  return (
    <Provider>
      <Suspense fallback={<Loading />}>
        <Navbar />
      </Suspense>
      <Suspense fallback={<LoadingPage />}>
        <Router primary={false} basepath={`${AppBaseUrl}`}>
          <Landing path="/" />
          <Home path="/home" />
          <Tunes path="/tunes" />
          <Gigs path="/gigs" />
          <CubePage path="/cube" />
          <Photos path="/photos" />
          <LoadingPage path="/loading" />
        </Router>
      </Suspense>
      <Footer />
    </Provider>
  );
}

export default App;
