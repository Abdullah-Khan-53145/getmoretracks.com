import React, { useEffect, useState } from "react";
import "../styles/home_header.css";
function HeaderHome() {
  const [isOpen, setIsOpen] = useState(window.innerWidth >= 756 ? true : false);
  const toggleNavMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleResponsiveness = () => {
    if (window.innerWidth >= 756) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleResponsiveness);
    return () => {
      window.removeEventListener("resize", handleResponsiveness);
    };
  }, []);
  return (
    <div className="home__header__main">
      <div className="home__header__child">
        <h3>getmoretracks.com</h3>
        <svg
          onClick={toggleNavMenu}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="open"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 9h16.5m-16.5 6.75h16.5"
          />
        </svg>

        <ul
          className="home__header__navigation"
          style={{
            transform: `translateX(${isOpen ? "0%" : "100%"})`,
          }}
        >
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a>Feature</a>
          </li>

          <li>
            <a>Integration</a>
          </li>
          <li>
            <a>Log in/Sign up</a>
          </li>
          <li>
            <a>Contacts</a>
          </li>
          <svg
            onClick={toggleNavMenu}
            className="close"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </ul>
      </div>
    </div>
  );
}

export default HeaderHome;
