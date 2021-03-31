import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "reactstrap";
import "./style.css";

function Navbar() {
  return (
    <Nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link className="navbar-brand" href="/">
        Google Books
      </Link>
      <Link className="navbar link" href="/">
        Search
      </Link>
      <Link className="navbar navbar-expand-lg navbar-dark bg-primary link" href="/saved">
        Saved
      </Link>
    </Nav>
  );
}

export default Navbar;
