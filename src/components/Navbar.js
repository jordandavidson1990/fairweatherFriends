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

  const pages = ["Home", "Tunes", "Gigs"];

  const links = pages.map((link, index) => {
    return (
      <Link to={`/${link.toLowerCase()}`} key={index}>
        <button
          onClick={e => handleClick(e)}
          value={link}
          className={page === link ? "selected" : "not-selected"}
        >
          {link}
        </button>
      </Link>
    );
  });

  return <nav>{links}</nav>;
}
