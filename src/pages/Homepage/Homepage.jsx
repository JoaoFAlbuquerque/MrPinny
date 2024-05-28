import React, { useEffect, useRef } from "react";
import "./Homepage.scss";
import { Banner } from "./../../components/Banner/Banner";
import { About } from "../../components/About/About";
import { Tokenomics } from "../../components/Tokenomics/Tokenomics";
import { HowToBuy } from "./../../components/HowToBuy/HowToBuy";
import construction from "./../../assets/construction.png";

export const Homepage = () => {
  const aboutRef = useRef(null);
  const tokenomicsRef = useRef(null);
  const howToBuyRef = useRef(null);

  return (
    <div>
      <Banner
        aboutRef={aboutRef}
        tokenomicsRef={tokenomicsRef}
        howToBuyRef={howToBuyRef}
      />
      <div className="main-content">
        <div className="wrapper">
          <About ref={aboutRef} />
          <Tokenomics ref={tokenomicsRef} />
          <HowToBuy ref={howToBuyRef} />
          <div className="wrapper">
            <h1 className="title__text">Gallery</h1>
            <div className="under__construction">
              <img src={construction} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
