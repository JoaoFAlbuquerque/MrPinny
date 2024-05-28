import React, { useEffect, useRef, useState } from "react";
import "./MemeCreator.scss";
import { MemeCarousel } from "../../components/MemeCarousel/MemeCarousel";
import reset from "./../../assets/icons/reset.png";
import save from "./../../assets/icons/save.png";
import share from "./../../assets/icons/share.png";
import random from "./../../assets/icons/random.png";

export const MemeCreator = () => {
  const [body, setBody] = useState("/assets/carousel/pinny.png");
  const [mask, setMask] = useState("/assets/carousel/masks/mask1.png");
  const [face, setFace] = useState("/assets/carousel/faces/mouth.png");
  const [hat, setHat] = useState("/assets/carousel/hats/hat.png");
  const [frontAccessory, setFrontAccessory] = useState(
    "/assets/carousel/frontAccessories/glasses.png"
  );
  const [backAccessory, setBackAccessory] = useState("");
  const [background, setBackground] = useState(
    "/assets/carousel/backgrounds/bg.png"
  );

  const onReset = () => {
    setBody("/assets/carousel/pinny.png");
    setMask("");
    setFace("");
    setHat("");
    setFrontAccessory("");
    setBackAccessory("");
    setBackground("/assets/carousel/backgrounds/bg.png");
  };

  const hatCarouselJson = [
    { src: "/assets/carousel/pinny.png" },
    { src: "/assets/carousel/backgrounds/bg.png" },
    { src: "/assets/carousel/frontAccessories/glasses.png" },
    { src: "/assets/carousel/hats/hat.png" },
  ];
  return (
    <div className="main-content">
      <h1 className="title__text meme__title">Meme Generator</h1>
      <div className="wrapper meme__content">
        <div className="meme__previewer">
          <img src={background} className="meme__bg" />
          <img src={backAccessory} className="meme__part" />
          <img src={body} className="meme__part" />
          <img src={face} className="meme__part" />
          <img src={mask} className="meme__part" />
          <img src={hat} className="meme__part" />
          <img src={frontAccessory} className="meme__part" />
        </div>
        <div className="buttons__container">
          <button className="glass__button">
            <img src={random} />
          </button>
          <button className="glass__button">
            <img src={reset} />
          </button>
          <button className="glass__button">
            <img src={save} />
          </button>
          <button className="glass__button">
            <img src={share} />
          </button>
        </div>
        <h2 className="meme__text"></h2>
        <div className="meme__container">
          <h2 className="meme__text">Body</h2>
          <MemeCarousel carouselJson={hatCarouselJson} />
          <h2 className="meme__text">Mask</h2>
          <MemeCarousel carouselJson={hatCarouselJson} />
          <h2 className="meme__text">Face</h2>
          <MemeCarousel carouselJson={hatCarouselJson} />
          <h2 className="meme__text">Hat</h2>
          <MemeCarousel carouselJson={hatCarouselJson} />
          <h2 className="meme__text">Front accessory</h2>
          <MemeCarousel carouselJson={hatCarouselJson} />
          <h2 className="meme__text">Back accessory</h2>
          <MemeCarousel carouselJson={hatCarouselJson} />
          <h2 className="meme__text">Background</h2>
          <MemeCarousel carouselJson={hatCarouselJson} />
        </div>
      </div>
    </div>
  );
};
