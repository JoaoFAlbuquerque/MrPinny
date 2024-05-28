import { motion, useInView } from "framer-motion";
import { forwardRef, useRef } from "react";
import smartHog from "./../../assets/smart_hog.png";

export const About = forwardRef((props, ref) => {
  const motionRef = useRef(null);
  const isInView = useInView(motionRef, { once: true });

  return (
    <div ref={ref} className="wrapper">
      <h1 className="title__text">About</h1>
      <div className="about__container">
        <motion.img
          ref={motionRef}
          loading="lazy"
          className="smart_hog"
          src={smartHog}
          alt=""
          initial={{ opacity: 0, x: -50 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        />
        <motion.p
          className="intro__text"
          initial={{ opacity: 0, x: 50 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Introducing Mr Pinny, the most distinguished and charming hedgehog on
          the internet, adored by all for his impeccable style and unmatched
          memeability!
        </motion.p>
      </div>
    </div>
  );
});
