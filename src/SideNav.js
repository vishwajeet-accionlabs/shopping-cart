import React from "react";
import "./SideNav.css";
import { Route, Link } from "react-router-dom";
import About from "./About";
import Service from "./Service";
import Clients from "./Clients";
import Contact from "./Contact";

const SideNav = () => {
  const openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
  };

  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
  };
  return (
    <div>
      <div id="mySidenav" className="sidenav">
        <Link to="/" className="closebtn" onClick={closeNav}>
          &times;
        </Link>
        <Link to="/About" onClick={closeNav}>
          About
        </Link>
        <Link to="/Service" onClick={closeNav}>
          Services
        </Link>
        <Link to="/Clients" onClick={closeNav}>
          Clients
        </Link>
        <Link to="/Contact" onClick={closeNav}>
          Contact
        </Link>
      </div>

      <span className="handCursor" onClick={openNav}>
        &#9776; open
      </span>
      <Route path="/About" component={About} />
      <Route path="/Service" component={Service} />
      <Route path="/Clients" component={Clients} />
      <Route path="/Contact" component={Contact} />
    </div>
  );
};

export default SideNav;
