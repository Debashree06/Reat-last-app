import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "0px",
          padding: "10px 20px",
          backgroundColor: "",
        }}
      >
        <Link to="/">
          <img src="/blogWeb.png" height={50} alt="" />
        </Link>
        <div className="nav-links">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/about">
            About
          </Link>
          <Link className="nav-link" to="/blog">
            Blog
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
