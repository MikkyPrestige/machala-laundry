import React from 'react';
import Avatar from './avatar';
import Logo from '../assets/images/logo.jpeg';

const Footer = () => {
  return (
    <footer className="footer">
        <figure className="footer--logo">
          <Avatar
            image={Logo}
            alt="logo"
            style={{ width: "100%", height: "100%", borderRadius: "1rem" }}
          />

          <figcaption className="footer--logo__caption">
            <h1 className="footer--logo__caption--title">Machala Laundry</h1>
            <p className="footer--logo__caption--subtitle">

        </figure>