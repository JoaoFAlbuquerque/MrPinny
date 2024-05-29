/* eslint-disable react/prop-types */
import React from "react";
import "./Navbar.scss";
import twitter from "./../../assets/socials/twitter.png";
import telegram from "./../../assets/socials/telegram.png";
import dex from "./../../assets/socials/dex.webp";

export const Navbar = (props) => {
  const navBarItems = [
    { name: "About", ref: props.aboutRef },
    { name: "Tokenomics", ref: props.tokenomicsRef },
    { name: "How to buy", ref: props.howToBuyRef },
    { name: "Meme generator (coming soon)" },
  ];

  const goTo = (item) => {
    if (item.ref && item.ref.current) item.ref.current.scrollIntoView();
  };

  return (
    <header className="primary-header">
      <div className="wrapper">
        <div className="primary-header__inner">
          <nav className="primary-nav hide__sm">
            <ul role="list">
              {navBarItems.map((item) => (
                <li key={`${item.name}-1`}>
                  {item.href ? (
                    <a href={item.href}>{item.name}</a>
                  ) : (
                    <a onClick={() => goTo(item)}>{item.name}</a>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex-group" aria-label="social links">
            <a
              href="https://twitter.com/Mr__Pinny"
              target="_blank"
              className="icon"
            >
              <img src={twitter} alt="twitter" className="icon" />
            </a>
            <a href="https://t.me/MrPinnyOnSol" target="_blank">
              <img src={telegram} alt="telegram" className="icon__2" />
            </a>
            <a>
              <img src={dex} alt="dex" className="icon__3" />
            </a>
            <div className="navbar2 hide__md">
              <div className="container nav-container">
                <input className="checkbox" type="checkbox" name="" id="" />
                <div className="hamburger-lines">
                  <span className="line line1"></span>
                  <span className="line line2"></span>
                  <span className="line line3"></span>
                </div>
                <div className="menu-items">
                  {navBarItems.map((item) => (
                    <li key={`${item.name}-2`}>
                      {item.href ? (
                        <a href={item.href}>{item.name}</a>
                      ) : (
                        <a onClick={() => goTo(item)}>{item.name}</a>
                      )}
                    </li>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
