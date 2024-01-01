import React, { useEffect, useState, useRef } from "react";
import ProgressBar from "react-progressbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import heroAssets from "@/app/constants/home/heroAssets";
import "./Hero.css";
import heroData from "@/app/constants/home/hero-text";
import AutoProgressBar from "../AutoProgressBar/AutoProgressBar";

export default function Hero() {
  const [showWholesale, setShowWholesale] = useState(false);
  const [progress, setProgress] = useState(0);
  const switchTimer = useRef(null);
  const progressTimer = useRef(null);

  const toggleShow = () => {
    setShowWholesale((prev) => !prev);
    resetAndStartTimer();
  };

  const resetAndStartTimer = () => {
    clearInterval(switchTimer.current);
    clearInterval(progressTimer.current);
    setProgress(0);

    switchTimer.current = setInterval(() => {
      setShowWholesale((show) => !show);
      setProgress(0);
    }, 10000);

    progressTimer.current = setInterval(() => {
      setProgress((oldProgress) => {
        const newProgress = oldProgress + 0.5;
        if (newProgress > 100) {
          return 0;
        }
        return newProgress;
      });
    }, 50);
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
    resetAndStartTimer();
    return () => {
      clearInterval(switchTimer.current);
      clearInterval(progressTimer.current);
    };
  }, []);

  useEffect(() => {
    AOS.refreshHard();
  }, [showWholesale]);
  const { title, subtitle } = showWholesale
    ? heroData.wholesale
    : heroData.retail;
  const imagesToShow = showWholesale ? heroAssets.wholesale : heroAssets.retail;

  return (
    <div data-aos="fade-in" className="hero">
      <div className="hero-container">
        <button onClick={toggleShow} className="hero-switch-button left">
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <div
          className={`hero-content ${showWholesale ? "wholesale" : "retail"} ${
            showWholesale ? "slide-in" : "slide-out"
          }`}
        >
          <div className="hero-images">
            {imagesToShow.map((img, index) => (
              <img
                key={`${img.src}-${index}`}
                className={img.className}
                src={img.src}
                alt={img.alt}
                data-aos={img.aos}
              />
            ))}
          </div>
          <div
            data-aos="fade-down"
            className="hero-text"
            key={title + subtitle}
          >
            <h1>{title}</h1>
            <h3>{subtitle}</h3>
          </div>
        </div>
        <button onClick={toggleShow} className="hero-switch-button right">
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
        <div data-aos="fade-up" className="shape-cut"></div>
      </div>
      <div data-aos="fade-up" className="hero-progress-bar-container">
        <div
          className="hero-progress-bar"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}
