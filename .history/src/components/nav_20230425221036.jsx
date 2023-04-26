import { React, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import Logo from "../assets/images/logo.jpeg";
import Avatar from "./avatar";

const Layout = () => {
  return <div className="container"></div>;
};

const CustomNavLink = ({ to, ...props }) => {
  let activeStyle = {
    color: "#00ff7f",
    fontWeight: "bold",
  };

  return (
    <NavLink
      to={to}
      style={({ isActive }) => (isActive ? activeStyle : {})}
      {...props}
    />
  );
};

const LayoutSmall = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggleOpen = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleNavToggleClose = () => {
    setIsNavOpen(false);
  }

  return (
    <div className="container">
      <header className="header">
        <div className="header--logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="header--nav">
          <button className="header--nav--toggle" onClick={handleNavToggleOpen}>
            {isNavOpen ? <MdClose /> : <FiMenu />}
          </button>
          <nav
            className={`header--nav--links ${
              isNavOpen ? "header--nav--links--open" : ""
            }`}
          >
            <ul>
              <li>
                <CustomNavLink to="/"
                  onClick={handleNavToggleClose}
                >
                  Home
                </CustomNavLink>
              </li>
              <li>
                <CustomNavLink to="/about"
                  onClick={handleNavToggleClose}>About Us</CustomNavLink>
              </li>
              <li>
                <CustomNavLink to="/services" onClick={handleNavToggleClose}>Services</CustomNavLink>
              </li>
              <li>
                <CustomNavLink to="/contact" onClick={handleNavToggleClose}>Contact</CustomNavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}







export default Layout;
