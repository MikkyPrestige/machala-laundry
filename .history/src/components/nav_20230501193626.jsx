import { React, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  MdClose,
  MdOutlineLocalLaundryService,
  MdContactPhone,
} from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { RiHomeHeartFill } from "react-icons/ri";
import { FcAbout } from "react-icons/fc";
import { TbBrandBooking } from "react-icons/tb";
import Logo from "../assets/images/logo.jpeg";
import Avatar from "./avatar";

const Layout = () => {
  return (
    <div className="layout">
      <LayoutSmall />
    </div>
  );
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
  };

  return (
    <section className="layoutSmall">
      <header className="layoutSmall--header">
        <div className="layoutSmall--header__logo">
          {/* <Avatar
            image={Logo}
            alt="logo"
            style={{ width: "100%", height: "100%", borderRadius: "1rem" }}
          /> */}
        </div>
        <div className="layoutSmall--header__nav">
          <button
            className="layoutSmall--header__nav__toggle"
            onClick={handleNavToggleOpen}
          >
            {isNavOpen ? (
              <MdClose className="layoutSmall--header__nav__toggle--icon" />
            ) : (
              <FiMenu className="layoutSmall--header__nav__toggle--icon" />
            )}
          </button>
          <nav
            className={`layoutSmall--header__nav--links ${
              isNavOpen ? "layoutSmall--header__nav--links--open" : ""
            }`}
          >
            <ul className="layoutSmall--header__nav--lists">
              <li>
                <CustomNavLink
                  to="/"
                  onClick={handleNavToggleClose}
                  className="layoutSmall--header__nav--lists__item"
                >
                  <RiHomeHeartFill className="layoutSmall--header__nav--lists__item--icon" />
                  Home
                </CustomNavLink>
              </li>
              <li>
                <CustomNavLink
                  to="/about"
                  onClick={handleNavToggleClose}
                  className="layoutSmall--header__nav--lists__item"
                >
                  <FcAbout className="layoutSmall--header__nav--lists__item--icon" />
                  About
                </CustomNavLink>
              </li>
              <li>
                <CustomNavLink
                  to="/services"
                  onClick={handleNavToggleClose}
                  className="layoutSmall--header__nav--lists__item"
                >
                  <MdOutlineLocalLaundryService className="layoutSmall--header__nav--lists__item--icon" />
                  Our Services
                </CustomNavLink>
              </li>
              <li>
                <CustomNavLink
                  to="/contact"
                  onClick={handleNavToggleClose}
                  className="layoutSmall--header__nav--lists__item"
                >
                  <MdContactPhone className="layoutSmall--header__nav--lists__item--icon" />
                  Store
                </CustomNavLink>
              </li>
              {/* <li>
                <CustomNavLink
                  to="/login"
                  onClick={handleNavToggleClose}
                  className="layoutSmall--header__nav--lists__item"
                >
                  <TbBrandBooking className="layoutSmall--header__nav--lists__item--icon" />
                  Book Us
                </CustomNavLink>
              </li> */}
            </ul>
          </nav>
        </div>
      </header>
    </section>
  );
};

export default Layout;
