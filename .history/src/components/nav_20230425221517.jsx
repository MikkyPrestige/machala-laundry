import { React, useState } from "react";
import { Link, NavLink } from "react-router-dom";
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
    <section className="layout">
      <header className="layout--header">
        <div className="layout--header__logo">
          <Avatar 
            image={Logo}
            alt="logo"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="layout--header__nav">
          <button className="header--nav__toggle" onClick={handleNavToggleOpen}>
            {isNavOpen ? <MdClose /> : <FiMenu />}
          </button>
          <nav
            className={`header--nav__links ${
              isNavOpen ? "header--nav__links--open" : ""
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
                <CustomNavLink to="/services" onClick={handleNavToggleClose}>Our Services</CustomNavLink>
              </li>
              <li>
                <CustomNavLink to="/contact" onClick={handleNavToggleClose}>Contact Us</CustomNavLink>
              </li>
              <li>
                <CustomNavLink to="/login" onClick={handleNavToggleClose}>Book with Us</CustomNavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </section>
  );
}







export default Layout;
