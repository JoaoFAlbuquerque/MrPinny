import pumpDotFun from "./../../assets/socials/pumpFun.png";
import { motion, useInView } from "framer-motion";
import "./Tokenomics.scss";
import { forwardRef, useRef } from "react";

export const Tokenomics = forwardRef((props, ref) => {
  const motionRef = useRef(null);
  const isInView = useInView(motionRef, { once: true });

  return (
    <div ref={ref} className="wrapper">
      <h1 className="title__text">Tokenomics</h1>
      <motion.div
        className="tokenomics__container"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <p ref={motionRef} className="tokenomics__text">
          <span>It's a pump.fun launch</span>
          <img
            loading="lazy"
            className="tokenomics__pump"
            src={pumpDotFun}
            alt=""
          />
          .
          <span>
            So let's keep it classy and have some fun. Don't overthink it!
          </span>
        </p>
      </motion.div>
    </div>
  );
});
