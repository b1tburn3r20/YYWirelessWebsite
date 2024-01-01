import "./WhyTrustUsComponent.css";
import data from "../../constants/home/whytrustus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";

export default function WhyTrustUsComponent() {
  return (
    <div className="why-trust-us">
      <div className="why-trust-us-container">
        <div className="why-trust-us-header">
          <div className="why-trust-us-header-top">
            <div data-aos="fade-up" className="why-trust-us-header-section">
              <div className="why-trust-us-header-section-title">
                <p>Fast</p>
                <FontAwesomeIcon icon={faShieldHalved} />
              </div>
              <div className="why-trust-us-header-section-body">
                <p className="why-trust-us-header-section-text">{data.fast}</p>
              </div>
            </div>
            <div data-aos="fade-right" className="why-trust-us-header-section">
              <div className="why-trust-us-header-section-title">
                <p>Reliable</p>
                <FontAwesomeIcon icon={faShieldHalved} />
              </div>{" "}
              <p className="why-trust-us-header-section-text">
                {data.reliable}
              </p>
            </div>
            <div data-aos="fade-left" className="wshy-trust-us-header-section">
              <div className="why-trust-us-header-section-title">
                <p>Smart</p>
                <FontAwesomeIcon icon={faShieldHalved} />
              </div>{" "}
              <p className="why-trust-us-header-section-text">
                {data.trustworthy}
              </p>
            </div>
          </div>
        </div>
        {/* <div className="why-trust-us-header-bottom">
          <p>Or Your Money Back.</p>
        </div> */}
      </div>
    </div>
  );
}
