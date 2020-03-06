import React from "react";
import "./Navbar.css";
import Book from "./book.png";
export default function Navbar() {
  return (
    <div className="navbar">
      <img src={Book} />
    </div>
  );
}
