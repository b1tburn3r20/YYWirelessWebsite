import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Navbar.css";
import { FaUserAlt, FaSearch } from "react-icons/fa";
import Link from "next/link";

export default function Navbar() {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <nav
      id="navbar"
      className={isHovered ? "navbar-expanded" : ""}
      // onMouseEnter={() => setIsHovered(true)}
      // onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        data-aos="fade-down"
        href="/"
        className="navbar-left navbar-section"
      >
        <img src="/home/YYWI.png" className="logo" alt="" />
      </Link>
      <div
        data-aos="fade-down"
        className={
          isHovered ? "navbar-middle-expanded" : "navbar-middle navbar-section"
        }
      >
        <div className={isHovered ? "navbar-item-expanded" : "navbar-item"}>
          Products
        </div>
        <div className={isHovered ? "navbar-item-expanded" : "navbar-item"}>
          Wholesale
        </div>
        <div className={isHovered ? "navbar-item-expanded" : "navbar-item"}>
          Contact us
        </div>
        <div className={isHovered ? "navbar-item-expanded" : "navbar-item"}>
          FAQ
        </div>
      </div>
      <div
        data-aos="fade-down"
        className={isHovered ? "navbar-right-expanded" : "navbar-section"}
      >
        <FaUserAlt className="navbar-item navbar-icon" />
        <FaSearch className="navbar-item navbar-icon" />
      </div>
    </nav>
  );
}
