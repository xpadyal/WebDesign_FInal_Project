import React from "react";
import "./Footer.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer class="footer">
      <div class="footer__container">
        <div class="row">
          <div class="footer__col">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Our Services</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div class="footer__col">
            <h4>Get Help</h4>
            <ul>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Payment Options</a>
              </li>
            </ul>
          </div>
          <div class="footer__col">
            <h4>Popular Nfts</h4>
            <ul>
              <li>
                <a href="#">The Merge</a>
              </li>
              <li>
                <a href="#">Beeple Collection</a>
              </li>
              <li>
                <a href="#">Clock</a>
              </li>
              <li>
                <a href="#">Human One</a>
              </li>
            </ul>
          </div>
          <div class="footer__col">
            <h4>Follow Us</h4>
            <div class="social-links">
              <a href="#">
                <FaFacebook />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
