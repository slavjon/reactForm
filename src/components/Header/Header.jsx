import React from "react";
// import './Header.css';
import logo from "../../img/logo192.png";

const Header = () => {
  return (
    <header className="App-header">
      <div className="container">
        <img src={logo} className="App-logo" width='100' height='100' alt="logo" />
      </div>
    </header>
  );
};

export default Header;
