import React from "react";

function Footer({ length }) {
  return (
    <footer>
      <p>
        {length == 0 ? "Empty" : length} List {length == 1 ? "item" : "items"}
      </p>
    </footer>
  );
}

export default Footer;
