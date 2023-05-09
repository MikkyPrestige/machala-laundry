import React from 'react';
import Avatar from './avatar';
import Logo from '../assets/images/logo.jpeg';
import { GoLocation } from 'react-icons/go'
import { GiRotaryPhone } from 'react-icons/gi'
import { GoLocation } from 'react-icons/go'
import { GoLocation } from 'react-icons/go'
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
              <a href="https://www.google.com/maps/dir/4.8174104,7.0047966/Machala+Laundry+Service,+Providence+Plaza+Akpu+Junction,+Okpanam+Road,+Local,+Government+Area+320242,+Asaba,+Delta/@5.5209529,6.2899722,9z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x1043f38f43a5554d:0x44afc26f586548e1!2m2!1d6.6778642!2d6.2250205" target="_blank" rel="noopener noreferrer">
                <GoLocation className="footer--social__content--item--icon" />
              </a>
            </div>
            <div className="footer--social__content--item">
              <a href="https://www.instagram.com/machalaundry/" target="_blank" rel="noopener noreferrer">
                <GiRotaryPhone className="footer--social__content--item--icon" />
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
      </footer>
  )
}

export default Footer
