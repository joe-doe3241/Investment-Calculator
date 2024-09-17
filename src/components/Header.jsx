import React from "react";
import Logo from "../assets/investment-calculator-logo.png";
function Header() {
  return (
    <header id="header">
      <img src={Logo} alt="Logo showing money bag" />
      <h1>Investment Calculator</h1>
    </header>
  );
}

export default Header;
