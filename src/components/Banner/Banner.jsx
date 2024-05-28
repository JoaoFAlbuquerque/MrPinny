/* eslint-disable react/prop-types */
import React, { useRef } from "react";
import "./Banner.scss";
import bg from "./../../assets/office/background.jpg";
import backBG from "./../../assets/foreground-back.webp";
import pinny from "./../../assets/office/pinny.png";
import frontBG from "./../../assets/foreground-front.webp";
import { Navbar } from "./../Navbar/Navbar";
import { useScroll, useTransform, motion } from "framer-motion";

export const Banner = (props) => {
  const { aboutRef, tokenomicsRef, howToBuyRef } = props;
  const container = useRef(null);
  const copyCoinAddress = () => {};
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const sm = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const md = useTransform(scrollYProgress, [0, 1], [0, 250]);
  const opacitySm = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const scaleUp = useTransform(scrollYProgress, [0, 1], [1.2, 1.5]);

  return (
    <div ref={container} className="parallax">
      <Navbar
        aboutRef={aboutRef}
        tokenomicsRef={tokenomicsRef}
        howToBuyRef={howToBuyRef}
      />
      <div className="hero">
        <div className="wrapper-text">
          <motion.h1 style={{ y: md }} className="hero__title">
            Mr Pinny
          </motion.h1>
          <motion.span
            style={{ y: md }}
            className="address button"
            onClick={copyCoinAddress}
          >
            <span>CA:</span>
            <span>TBA</span>
          </motion.span>
        </div>
      </div>
      <img className="parallax__bg" src={bg} alt="" />
      <motion.img
        style={{ scaleY: scaleUp }}
        className="parallax__foreground-back"
        src={backBG}
        alt=""
      />
      <motion.img className="parallax__foreground-front" src={frontBG} alt="" />
      <motion.img
        style={{ y: sm, opacity: opacitySm }}
        className="parallax__pinny"
        src={pinny}
        alt=""
      />
    </div>
  );
};
