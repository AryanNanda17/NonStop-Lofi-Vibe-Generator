import React from "react";
import { Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMDAwIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiMyMjIiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')] opacity-10 animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-start">
          {/* Logo and tagline */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start">
            <img src="./images/logo.png" alt="LofiVibe Logo" className="h-40 w-40 object-contain mb-6 transform hover:scale-105 transition-transform duration-300" />
            <p className="text-purple-300 text-lg font-light leading-relaxed text-center lg:text-left">
              Experience the harmony of tomorrow, today, with AI-composed tunes.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h3 className="text-purple-400 text-xl font-bold mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-1/2 after:h-1 after:bg-purple-500 after:rounded-full">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {["About", "Contact", "Log In", "Sign Up"].map((item) => (
                <li key={item}>
                  <a href={`/${item.toLowerCase().replace(' ', '')}`} className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group">
                    <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="lg:col-span-2">
            <h3 className="text-purple-400 text-xl font-bold mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-1/2 after:h-1 after:bg-purple-500 after:rounded-full">
              Connect
            </h3>
            <a
              href="https://github.com/AryanNanda17/NonStop-Lofi-Vibe-Generator"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border border-purple-500 rounded-full text-purple-400 hover:bg-purple-500 hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50"
            >
              <Github size={24} className="mr-2" />
              GitHub
            </a>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3">
            <h3 className="text-purple-400 text-xl font-bold mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-1/2 after:h-1 after:bg-purple-500 after:rounded-full">
              Newsletter
            </h3>
            <form className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-purple-900/30 border border-purple-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-purple-300 pr-12"
                  aria-label="Email for newsletter"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-purple-400 hover:text-white transition-colors duration-300"
                  aria-label="Subscribe to newsletter"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-purple-800 text-center text-purple-400">
          <p>© 2024 LofiVibe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;