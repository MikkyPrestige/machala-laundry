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
    // background:
    //   "radial-gradient(circle at center center, #00E0F7 0%, #64F38C 100%)",
    // backgroundClip: "text",
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
    <div className="layoutSmall"
    sx={{
      backgroundColor: "background",
      color: "text",
    }}
    >
      <button className="layoutSmall--toggle" onClick={handleNavToggleOpen}>
        {isNavOpen ? (
          <MdClose className="layoutSmall--toggle--icon" />
        ) : (
          <FiMenu className="layoutSmall--toggle--icon" />
        )}
      </button>
      <nav
        className={`layoutSmall--nav ${
          isNavOpen ? "layoutSmall--nav--open" : ""
        }`}
      >
        <ul className="layoutSmall--nav__lists">
          <li>
            <CustomNavLink
              to="/"
              onClick={handleNavToggleClose}
              className="layoutSmall--nav__lists__item"
            >
              <RiHomeHeartFill className="layoutSmall--nav__lists__item--icon" />
              <span>Home</span>
            </CustomNavLink>
          </li>
          <li>
            <CustomNavLink
              to="/about"
              onClick={handleNavToggleClose}
              className="layoutSmall--nav__lists__item"
            >
              <FcAbout className="layoutSmall--nav__lists__item--icon" />
              <span>About Us</span>
            </CustomNavLink>
          </li>
          <li>
            <CustomNavLink
              to="/stores"
              onClick={handleNavToggleClose}
              className="layoutSmall--nav__lists__item"
            >
              <MdOutlineLocalLaundryService className="layoutSmall--nav__lists__item--icon" />
              <span>Locations</span>
            </CustomNavLink>
          </li>
          <li>
            <CustomNavLink
              to="/booking"
              onClick={handleNavToggleClose}
              className="layoutSmall--nav__lists__item"
            >
              <MdContactPhone className="layoutSmall--nav__lists__item--icon" />
              <span>Book Us</span>
            </CustomNavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const LayoutLarge = () => {
  return (
    <nav className="layoutLarge"
    sx={{
      backgroundColor: "background",
      color: "text",
    }}
    >
      <ul className="layoutLarge--lists">
        <li>
          <CustomNavLink to="/" className="layoutLarge--lists__item">
            <RiHomeHeartFill className="layoutLarge--lists__item--icon" />
            <span>Home</span>
          </CustomNavLink>
        </li>
        <li>
          <CustomNavLink to="/about" className="layoutLarge--lists__item">
            <FcAbout className="layoutLarge--lists__item--icon" />
            <span>About Us</span>
          </CustomNavLink>
        </li>
        <li>
          <CustomNavLink to="/stores" className="layoutLarge--lists__item">
            <MdOutlineLocalLaundryService className="layoutLarge--lists__item--icon" />
            <span>Locations</span>
          </CustomNavLink>
        </li>
        <li>
          <CustomNavLink to="/booking" className="layoutLarge--lists__item">
            <MdContactPhone className="layoutLarge--lists__item--icon" />
            <span>Book Us</span>
          </CustomNavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Layout;
