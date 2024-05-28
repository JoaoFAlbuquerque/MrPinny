/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MemeCarousel.scss";

export const MemeCarousel = (props) => {
  const [width, setWidth] = useState(window.innerWidth);
  const { carouselJson } = props;

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

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: isMobile ? 2 : 4,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {carouselJson.map((item, index) => (
        <div key={index} className="slide">
          <img src={item.src} />
        </div>
      ))}
    </Slider>
  );
};
