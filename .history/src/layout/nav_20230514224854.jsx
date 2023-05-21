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

const Layout = () => {
  return (
    <div className="layout">
      <LayoutSmall />
      <LayoutLarge />
    </div>
  );
};

const CustomNavLink = ({ to, ...props }) => {
  let activeStyle = {
    background:
      "radial-gradient(circle at center center, #00E0F7 0%, #64F38C 100%)",
    backgroundClip: "text",
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
                  <span>Home</span>
                </CustomNavLink>
              </li>
              <li>
                <CustomNavLink
                  to="/about"
                  onClick={handleNavToggleClose}
                  className="layoutSmall--header__nav--lists__item"
                >
                  <FcAbout className="layoutSmall--header__nav--lists__item--icon" />
                  <span>About Us</span>
                </CustomNavLink>
              </li>
              <li>
                <CustomNavLink
                  to="/stores"
                  onClick={handleNavToggleClose}
                  className="layoutSmall--header__nav--lists__item"
                >
                  <MdOutlineLocalLaundryService className="layoutSmall--header__nav--lists__item--icon" />
                  <span>Locations</span>
                </CustomNavLink>
              </li>
              <li>
                <CustomNavLink
                  to="/booking"
                  onClick={handleNavToggleClose}
                  className="layoutSmall--header__nav--lists__item"
                >
                  <MdContactPhone className="layoutSmall--header__nav--lists__item--icon" />
                  <span>Book Us</span>
                </CustomNavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </section>
  );
};

const LayoutLarge = () => {
  return (
    <section className="layoutLarge">
      <header className="layoutLarge--header">
        <nav className="layoutLarge--header__nav">
          <ul className="layoutLarge--header__nav--lists">
            <li>
              <CustomNavLink
                to="/"
                className="layoutLarge--header__nav--lists__item"
              >
                <RiHomeHeartFill className="layoutLarge--header__nav--lists__item--icon" />
                <span>Home</span>
              </CustomNavLink>
            </li>
            <li>
              <CustomNavLink
                to="/about"
                className="layoutLarge--header__nav--lists__item"
              >
                <FcAbout className="layoutLarge--header__nav--lists__item--icon" />
                <span>About Us</span>
              </CustomNavLink>
            </li>
            <li>
              <CustomNavLink
                to="/stores"
                className="layoutLarge--header__nav--lists__item"
              >
                <MdOutlineLocalLaundryService className="layoutLarge--header__nav--lists__item--icon" />
                <span>Locations</span>
              </CustomNavLink>
            </li>
            <li>
              <CustomNavLink
                to="/booking"
                className="layoutLarge--header__nav--lists__item"
              >
                <MdContactPhone className="layoutLarge--header__nav--lists__item--icon" />
                <span>Book Us</span>
              </CustomNavLink>
            </li>
          </ul>
        </nav>
      </header>
    </section>
  );
}

export default Layout;
