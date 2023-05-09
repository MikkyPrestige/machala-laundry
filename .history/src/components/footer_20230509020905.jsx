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
            <div className="footer--social__content--item">
              <a href="https://www.instagram.com/machalaundry/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="footer--social__content--item--icon" />
              </a>
            </div>
            <div className="footer--social__content--item">
              <a href="https://twitter.com/machalaundry" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="footer--social__content--item--icon" />
              </a>
            </div>
            <div className="footer--social__content--item">
              <a href="https://www.linkedin.com/company/machalaundry" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="footer--social__content--item--icon" />
              </a>
            </div>
            <div className="footer--social__content--item">
              <a href="https://www.linkedin.com/company/machalaundry" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="footer--social__content--item--icon" />
              </a>
            </div>
          </div>
        </section>
        <section className="footer--copyright">
          <p className="footer--copyright">
            &copy; {new Date().getFullYear()} Machalaundry. All rights reserved.
          </p>
        </section>
