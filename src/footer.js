import React from "react";

function Footer() {
  const footerStyle = {
    backgroundColor: "#f2f2f2",
    padding: "20px",
    textAlign: "center",
    fontSize: "14px",
    color: "#888",
  };

  return (
    <div style={footerStyle}>
      <p>This is the footer.</p>
      <p>© 2023 Your Website. All rights reserved.</p>
    </div>
  );
}

export default Footer;
