import {React, useState} from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import {MdClose} from "react-icons/md";
import {FiMenu} from "react-icons/fi"
import Logo from "../assets/images/logo.jpeg";
import Avatar from './avatar';

const Layout = () => {
  return (
    <div className="container">

    </div>
  );
}

const CustomNavLink = ({to, ...props}) => {
  let activeStyle = {
    color: "#00ff7f",
    fontWeight: "bold",
  }

  return (
    <NavLink
      to={to}
      style={({isActive }) =>
         isActive ? activeStyle : {}
      }
      {...props}
    />
  )
}

export default Layout;