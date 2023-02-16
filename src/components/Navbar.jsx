import React from "react";
import earth from "./../assets/img/earth.svg";

const Navbar = () => {
  return (
    <nav className="text-center text-light py-3">
      <img className="mx-2" src={earth} alt="earth" />
      my travel journal.
    </nav>
  );
};

export default Navbar;
