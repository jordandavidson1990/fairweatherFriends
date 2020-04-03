import React from "react";
import { Link } from "@reach/router";
import "./Navbar.css";
import { useDispatch, useSelector } from "../context";

export default function Navbar() {
  const dispatch = useDispatch();

  const handleClick = e => {
    dispatch({ type: "SET_PAGE", data: e.target.value });
  };

  const { page } = useSelector(state => state);

  return (
    <nav>
      <Link to="/">
        <button
          type="button"
          onClick={e => handleClick(e)}
          value="Home"
          className={page === "Home" ? "selected" : "not-selected"}
        >
          Home
        </button>
      </Link>
      <Link to="/tunes">
        <button
          type="button"
          onClick={e => handleClick(e)}
          value="Tunes"
          className={page === "Tunes" ? "selected" : "not-selected"}
        >
          Tunes
        </button>
      </Link>
    </nav>
  );
}
