import React from "react";
import { Link } from "react-router-dom";
import { IoIosCart, IoIosPin, IoIosPerson } from "react-icons/io";
import "./NavbarStyle.css";

const Navbar = () => {
  return (
    <div>
      <nav className="nav-wrapper">
        <div className="container">
          <ul>
            <li>
              <Link to="/">
                <IoIosPerson />
              </Link>
            </li>
            <li>
              <Link to="/cart">
                <IoIosPin />
              </Link>
            </li>
            <li>
              <Link to="/cart">
                <IoIosCart />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
