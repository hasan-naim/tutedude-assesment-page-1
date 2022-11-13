import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo/tutelogo.png";
import profile from "../../assets/icons/profile.png";
// import arrow from "../../assets/icons/arrow.svg";
import { MdExpandMore } from "react-icons/md";
import { MdChevronRight } from "react-icons/md";
function Navbar() {
  return (
    <header>
      <div className="nav-container">
        <nav>
          <div className="nav-logo">
            <img src={logo} alt="tutedude Logo" />
          </div>
          <div className="nav-end">
            <ul className="ul-list">
              <li>
                <a href="#">My assignment</a>
              </li>
              <li>
                <a href="#">Chat With Mentor</a>
              </li>
              <li>
                <a href="#" className="active flex">
                  <img src={profile} alt="" /> ProfileName
                  <MdExpandMore />
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container nav-text">
          <span>
            Ui/Ux <MdChevronRight /> Refer & Earn
          </span>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
