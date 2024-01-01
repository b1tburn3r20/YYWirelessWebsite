import React, { useState } from "react";
import "./EmailSignup.css"; // Assuming your CSS file is named EmailSignup.css
import AOS from "aos";
import "aos/dist/aos.css";

export default function EmailSignUp() {
  const [isWholesale, setIsWholesale] = useState(false);
  const [isRetail, setIsRetail] = useState(false);
  const [isBoth, setIsBoth] = useState(true);

  const handleWholesaleChange = () => {
    setIsWholesale(!isWholesale);
    setIsRetail(false);
    if (isBoth) setIsBoth(false);
  };

  const handleRetailChange = () => {
    setIsRetail(!isRetail);
    setIsWholesale(false);
    if (isBoth) setIsBoth(false);
  };

  const handleBothChange = () => {
    setIsBoth(!isBoth);
    if (!isBoth) {
      setIsWholesale(false);
      setIsRetail(false);
    }
  };

  return (
    <div data-aos="fade-down" className="email-signup-form">
      <div className="email-signup-form-text-container">
        <section class="block container block-domain">
          <header class="block__header">
            <h2 className="block__header_header">Savings Start Here.</h2>
            <p className="block__header_p">
              No better way to hear about deals than by signing up to our
              newsletter. Deals every week for retail and wholesale.
            </p>
          </header>
          <div class="input-group">
            <input
              type="text"
              class="input"
              placeholder="Enter email here..."
            />
            <button class="btn btn--accent">SIGNUP</button>
          </div>
          <div className="checkboxes">
            <div
              className={`custom-checkbox ${isWholesale ? "checked" : ""}`}
              onClick={handleWholesaleChange}
            >
              Wholesale
            </div>
            <div
              className={`custom-checkbox ${isRetail ? "checked" : ""}`}
              onClick={handleRetailChange}
            >
              Retail
            </div>
            <div
              className={`custom-checkbox ${isBoth ? "checked" : ""}`}
              onClick={handleBothChange}
            >
              Both
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
