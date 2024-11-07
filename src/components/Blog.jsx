import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";

function Blog() {
  const [showContent, setShowContent] = useState(false);

  const handleLinkClick = () => {
    setShowContent(true);
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div
        style={{
          width: "250px",
          padding: "20px",
          backgroundColor: "#333",
          color: "white",
          height: "100%",
        }}
      >
        <h2>Blog Links</h2>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li>
            <Link to="/blog/insta" style={linkStyle} onClick={handleLinkClick}>
              Instagram
            </Link>
          </li>
          <li>
            <Link
              to="/blog/youtube"
              style={linkStyle}
              onClick={handleLinkClick}
            >
              Youtube
            </Link>
          </li>
          <li>
            <Link
              to="/blog/facebook"
              style={linkStyle}
              onClick={handleLinkClick}
            >
              Facebook
            </Link>
          </li>
        </ul>
      </div>

      <div
        style={{
          flex: 1,
          padding: "20px",
          backgroundColor: "aqua",
        }}
      >
        <h1>This is the BLOG page</h1>

        {showContent && (
          <div
            style={{
              margin: "10px",
              padding: "10px 20px",
              backgroundColor: "white",
              borderRadius: "8px",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Outlet />
          </div>
        )}
      </div>
    </div>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  padding: "10px 0",
  display: "block",
  marginBottom: "10px",
};

export default Blog;
