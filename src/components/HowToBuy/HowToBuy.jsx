/* eslint-disable react-hooks/exhaustive-deps */
import { motion, useInView } from "framer-motion";
import { forwardRef, useEffect, useRef, useState } from "react";
import solana from "./../../assets/socials/solana.png";
import raydium from "./../../assets/socials/raydium.png";
import jupiter from "./../../assets/socials/jupiter-ag-jup-logo.png";
import "./HowToBuy.scss";

export const HowToBuy = forwardRef((props, ref) => {
  const step1 = useRef(null);
  const step2 = useRef(null);
  const step3 = useRef(null);
  const step4 = useRef(null);
  const isInView = useInView(step1, { once: true });
  const isInView2 = useInView(step2, { once: true });
  const isInView3 = useInView(step3, { once: true });
  const isInView4 = useInView(step4, { once: true });
  const [width, setWidth] = useState(window.innerWidth);
  const [countdown, setCountdown] = useState("");

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 1024;

  const countDownDate = new Date("May 29, 2024 22:00:00").getTime();
  const x = setInterval(() => {
    let now = new Date().getTime();
    let distance = countDownDate - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    setCountdown(`${days}days ${hours}h ${minutes}m ${seconds}s`);

    if (distance < 0) {
      clearInterval(x);
      setCountdown("Pump.fun");
    }
  }, 1000);

  return (
    <div ref={ref}>
      <h1 className="title__text">HOW TO BUY</h1>
      <h1 className="countdown__container">
        {"Launch in:"}
        <span className="countdown">{countdown}</span>
      </h1>
      <div className="stepper__container">
        <ul
          className={`stepper ${
            isMobile ? "stepper__vertical" : "stepper__horizontal"
          }`}
        >
          <motion.li
            ref={step1}
            className="step"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          >
            <div className="step__container">
              <h3 className="step__title">{"GET A WALLET"}</h3>
              <span className="step__description">
                Download your wallet of choice (
                <a href="https://phantom.app/" target="_blank">
                  Phantom
                </a>
                ,{" "}
                <a href="https://solflare.com/" target="_blank">
                  Solflare
                </a>
                ...)
              </span>
            </div>
          </motion.li>
          <motion.li
            ref={step2}
            className="step"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          >
            <div className="step__container">
              <h3 className="step__title">
                GET SOME SOLANA
                <img
                  loading="lazy"
                  className="title__icon"
                  src={solana}
                  alt=""
                />
              </h3>
              <span className="step__description">
                Buy some SOL from an exchange (
                <a href="https://www.binance.com/en" target="_blank">
                  Binance
                </a>
                ,{" "}
                <a href="https://www.bybit.com/en/" target="_blank">
                  Bybit
                </a>
                ...)
              </span>
            </div>
          </motion.li>
          <motion.li
            ref={step3}
            className="step"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          >
            <div className="step__container">
              <h3 className="step__title">
                {"GO TO "}
                <span style={{ display: "flex", marginLeft: 5 }}>
                  JUPITER
                  <img
                    loading="lazy"
                    className="title__icon"
                    src={jupiter}
                    alt=""
                  />
                </span>{" "}
                OR RAYDIUM
                <img
                  loading="lazy"
                  className="title__icon"
                  src={raydium}
                  alt=""
                />
              </h3>
              <span className="step__description">
                {"Click BUY NOW, link your wallet to start swapping"}
              </span>
            </div>
          </motion.li>
          <motion.li
            ref={step4}
            className="step"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          >
            <div className="step__container">
              <h3 className="step__title">{"GET THE PINNYS!"}</h3>
              <span className="step__description">
                {"Select the amount of $Pinny you want to buy and swap!"}
              </span>
            </div>
          </motion.li>
        </ul>
      </div>
    </div>
  );
});
