import "./Footer.css";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faTwitter,
  faLinkedIn,
} from "@fortawesome/free-solid-svg-icons";

function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled upwards
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {isVisible && (
        <div className="back-to-top" onClick={scrollToTop}>
          <p id="back-to-top-button">
            Back to top &nbsp; <FontAwesomeIcon icon={faArrowUp} />
          </p>
        </div>
      )}
      <footer>
        <ul className="footer-products">
          <p className="footer-header">Shop Products</p>
          <li>
            <p>iPhone</p>{" "}
          </li>
          <li>
            <p>Samsung</p>{" "}
          </li>
          <li>
            <p>Google</p>{" "}
          </li>
          <li>
            <p>LG</p>{" "}
          </li>
          <li>
            <p>Motorola</p>{" "}
          </li>
          <li>
            <p>Huawei</p>{" "}
          </li>
          <li>
            <p>Xiaomi</p>{" "}
          </li>
          <li>
            <p>OnePlus</p>{" "}
          </li>
        </ul>
        <ul className="footer-products">
          <p className="footer-header">Shop Products</p>
          <li>
            <p>iPhone</p>{" "}
          </li>
          <li>
            <p>Samsung</p>{" "}
          </li>
          <li>
            <p>Google</p>{" "}
          </li>
          <li>
            <p>LG</p>{" "}
          </li>
          <li>
            <p>Motorola</p>{" "}
          </li>
          <li>
            <p>Huawei</p>{" "}
          </li>
          <li>
            <p>Xiaomi</p>{" "}
          </li>
          <li>
            <p>OnePlus</p>{" "}
          </li>
        </ul>
        <ul className="footer-products">
          <p className="footer-header">Shop Products</p>
          <li>
            <p>iPhone</p>{" "}
          </li>
          <li>
            <p>Samsung</p>{" "}
          </li>
          <li>
            <p>Google</p>{" "}
          </li>
          <li>
            <p>LG</p>{" "}
          </li>
          <li>
            <p>Motorola</p>{" "}
          </li>
          <li>
            <p>Huawei</p>{" "}
          </li>
          <li>
            <p>Xiaomi</p>{" "}
          </li>
          <li>
            <p>OnePlus</p>{" "}
          </li>
        </ul>
        <ul className="footer-products">
          <p className="footer-header">Shop Products</p>
          <li>
            <p>iPhone</p>{" "}
          </li>
          <li>
            <p>Samsung</p>{" "}
          </li>
          <li>
            <p>Google</p>{" "}
          </li>
          <li>
            <p>LG</p>{" "}
          </li>
          <li>
            <p>Motorola</p>{" "}
          </li>
          <li>
            <p>Huawei</p>{" "}
          </li>
          <li>
            <p>Xiaomi</p>{" "}
          </li>
          <li>
            <p>OnePlus</p>{" "}
          </li>
        </ul>
        <ul className="footer-products">
          <p className="footer-header">Shop Products</p>
          <li>
            <p>iPhone</p>{" "}
          </li>
          <li>
            <p>Samsung</p>{" "}
          </li>
          <li>
            <p>Google</p>{" "}
          </li>
          <li>
            <p>LG</p>{" "}
          </li>
          <li>
            <p>Motorola</p>{" "}
          </li>
          <li>
            <p>Huawei</p>{" "}
          </li>
          <li>
            <p>Xiaomi</p>{" "}
          </li>
          <li>
            <p>OnePlus</p>{" "}
          </li>
        </ul>
        <ul className="footer-products">
          <p className="footer-header">Shop Products</p>
          <li>
            <p>iPhone</p>{" "}
          </li>
          <li>
            <p>Samsung</p>{" "}
          </li>
          <li>
            <p>Google</p>{" "}
          </li>
          <li>
            <p>LG</p>{" "}
          </li>
          <li>
            <p>Motorola</p>{" "}
          </li>
          <li>
            <p>Huawei</p>{" "}
          </li>
          <li>
            <p>Xiaomi</p>{" "}
          </li>
          <li>
            <p>OnePlus</p>{" "}
          </li>
        </ul>
      </footer>
      <div className="copyright">
        Copyright © 2009-2023 YYWireless | All Rights Reserverd
      </div>
    </div>
  );
}

export default Footer;
