import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [alertMessage, setAlertMessage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setAlertMessage("Password reset link has been sent. Please check your email.");
    } else {
      setAlertMessage("Please enter a valid email address.");
    }
  };

  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: "#A0858D" }}>
      <div className="w-50 p-5 rounded-3" style={{ backgroundColor: "#A0858D" }}>
        
        {/* Title */}
        <h2 className="text-center mb-4 text-dark fw-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
          FORGET PASSWORD
        </h2>

        {/* Alert Message */}
        {alertMessage && (
          <div className="alert alert-success text-center" role="alert">
            {alertMessage}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label text-dark fw-bold">ENTER YOUR EMAIL ADDRESS</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="text-center">
            <button type="submit" className="btn w-100" style={{ backgroundColor: "#6B2D3D", color: "white", border: "none" }}>
              FORGET PASSWORD
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgetPassword;
