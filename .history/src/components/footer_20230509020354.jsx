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
          <figcaption className="footer--logo__caption">Machala Laundry service</figcaption>
        </figure>
        <section className="footer--social">
          <h3 className="footer--social__title">Get in touch</h3>
          <div className="footer--social__content">
            <div className="footer--social__content--item">
              <a href="https://www.facebook.com/machalaundry" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="footer--social__content--item--icon" />
              </a>
            </div>