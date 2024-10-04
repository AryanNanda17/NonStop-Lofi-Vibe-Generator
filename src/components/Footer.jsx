import React from "react";
import './footer.css';

const Footer = () => {
  return (
    <div className="bg-black">
      <footer className="footer">
        <div className="button-container">
          <a title="About Us" href="/about">About Us</a>
          <span class="px-2">|</span>
          <a title="Feedback" href="/contact">Feedback</a>
          <span class="px-2">|</span>
          <a title="Terms of Use" href="/about">Terms of Use</a>
          <span class="px-2">|</span>
          <a title="Privacy Policy" href="/about">Privacy Policy</a>
        </div>
        <div className="social-links">
          <a href="/" target="_blank" rel="noopener noreferrer" className="link">
            <img src="./icons/icons8-facebook.svg" alt="Facebook" />
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer" className="link">
            <img src="./icons/icons8-twitter.svg" alt="Twitter" />
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer" className="link">
            <img src="./icons/icons8-instagram.svg" alt="Instagram" />
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer" className="link">
            <img src="./icons/icons8-youtube.svg" alt="Youtube" />
          </a>
        </div>
      </footer>
      <copyrights className="copyrights">
        Experience the harmony of tomorrow, today, with AI-composed tunes.
      </copyrights>
    </div>
  );
};

export default Footer;
