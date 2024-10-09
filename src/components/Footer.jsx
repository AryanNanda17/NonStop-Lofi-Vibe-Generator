import React from "react";
import './footer.css';

const Footer = () => {
  const GIT_URL = "https://github.com/AryanNanda17/NonStop-Lofi-Vibe-Generator";
  return (
    <div className="bg-black">
      <footer className="footer">
        <div className="button-container">
          <a title="About Us" href="/about">About Us</a>
          <span className="delimeter">|</span>
          <a title="Feedback" href="/contact">Feedback</a>
          <span className="delimeter">|</span>
          <a title="Terms of Use" target="_blank" href={GIT_URL}>Terms of Use</a>
          <span className="delimeter">|</span>
          <a title="Privacy Policy" target="_blank" href={GIT_URL}>Privacy Policy</a>
        </div>
        <div className="social-links">
          <a href={GIT_URL} target="_blank" rel="noopener noreferrer" className="link">
            <img src="./icons/icons8-facebook.svg" alt="Facebook" />
          </a>
          <a href={GIT_URL} target="_blank" rel="noopener noreferrer" className="link">
            <img src="./icons/icons8-twitter.svg" alt="Twitter" />
          </a>
          <a href={GIT_URL} target="_blank" rel="noopener noreferrer" className="link">
            <img src="./icons/icons8-instagram.svg" alt="Instagram" />
          </a>
          <a href={GIT_URL} target="_blank" rel="noopener noreferrer" className="link">
            <img src="./icons/icons8-youtube.svg" alt="Youtube" />
          </a>
        </div>
      </footer>
      <div className="copyrights">
        Experience the harmony of tomorrow, today, with AI-composed tunes.
      </div>
    </div>
  );
};

export default Footer;
