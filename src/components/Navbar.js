import React from "react";
import { Link } from "@reach/router";
import "./Navbar.css";
import { useDispatch } from "../context";

export default function Navbar() {
  const dispatch = useDispatch();
  // TODO dispatch call to set page to be different depending on what link is clicked
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/tunes">Tunes</Link>
    </nav>
  );
}
