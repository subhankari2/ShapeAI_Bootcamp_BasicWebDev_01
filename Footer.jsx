import React from "react";

function Footer() {
  let currYear = new Date().getFullYear();
  return (
    <footer>
      <p>Copyrighth @ {currYear}</p>
    </footer>
  );
}

export default Footer;
