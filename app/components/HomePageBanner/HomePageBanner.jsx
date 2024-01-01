import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeftLong,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import fakeFacts from "../../data/fakeFacts";
import "./HomePageBanner.css";

import AOS from "aos";
import "aos/dist/aos.css";

export default function HomePageBanner() {
  const [currentFactIndex, setCurrentFactIndex] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment the fact index or loop back to the first fact
      setCurrentFactIndex((prevIndex) => (prevIndex + 1) % fakeFacts.length);
    }, 5000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <div data-aos="fade-down" id="home-page-banner">
      <div id="home-page-banner-container">
        <motion.div
          className="banner-icon"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.75 }}
        >
          <FontAwesomeIcon className="banner-icon" icon={faArrowLeftLong} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 0,
            opacity: 1,
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <div>{fakeFacts[currentFactIndex].fact}</div>
        </motion.div>
        <motion.div
          className="banner-icon"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.75 }}
        >
          <FontAwesomeIcon className="banner-icon" icon={faArrowRightLong} />
        </motion.div>
      </div>
    </div>
  );
}
