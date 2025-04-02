
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const OfferList = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="container my-5">
      {/* Offer List Title */}
      <div className="text-center">
      <h2 className="text-center mb-4">OFFER LIST</h2>
      </div>

      {/* Offer Card */}
      <div className="bg-light p-5 rounded mt-3 d-flex flex-column flex-md-row align-items-center justify-content-between">
        
        {/* Left Section - Text */}
        <div className="text-center text-md-start">
          <h4 className="fw-bold" style={{ color: "#541222" }}>
            WEDDING SEASON OFFER
          </h4>
          <p className="text-muted small">ONLY THIS OFFER 24 HOURS IN</p>

          {/* Booking Button (Navigates to We Deal In page) */}
          <button
            className="btn fw-bold px-4 mt-2"
            style={{ backgroundColor: "#541222", color: "white" }}
            onClick={() => navigate("/AWeDellInPage")}
          >
            BOOKING FAST
          </button>
        </div>

        {/* Right Section - Sale Badge */}
        <div className="mt-5 mt-md-0" style={{ maxWidth: "200px" }}>
          <img
            src="public\Images\sale-badge.png"
            alt="Sale 25% Off"
            className="img-fluid"
            
          />
        </div>
      </div>
    </div>
  );
};

export default OfferList;
