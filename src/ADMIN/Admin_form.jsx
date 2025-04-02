import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function AdminLoginForm() {
  const navigate = useNavigate();
  const [adminId, setAdminId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [errors, setErrors] = useState({ adminId: "", password: "" });

  const handleLogin = (e) => {
    e.preventDefault();

    // Trim spaces from input values
    const trimmedAdminId = adminId.trim();
    const trimmedPassword = password.trim();

    let newErrors = { adminId: "", password: "" };
    let hasError = false;

    // Validation logic
    if (!trimmedAdminId) {
      newErrors.adminId = "Field is required";
      hasError = true;
    }

    if (!trimmedPassword) {
      newErrors.password = "Field is required";
      hasError = true;
    }

    if (hasError) {
      setErrors(newErrors);
      return;
    }

    if (trimmedAdminId === "admin" && trimmedPassword === "umangi") {
      setError(""); // Clear error if login is successful
      navigate("/Admin_dashboard_page"); // Redirect to Admin Dashboard
    } else {
      setError("Wrong credentials! Please try again.");
    }
  };

  return (
    <div
      className="container-fluid min-vh-100 d-flex align-items-center justify-content-center"
      style={{ backgroundColor: "#9B7B7F" }}
    >
      <div className="w-50 p-4 rounded-3 text-center">
        
        {/* Admin Icon */}
        <div className="mb-3">
          <img
            src="/Images/admin_logo.png" // Ensure correct path
            alt="Admin Icon"
            className="img-fluid"
            style={{ maxWidth: "150px" }}
          />
        </div>

        {/* Title */}
        <h2 className="mb-4 text-dark fw-bold" style={{ fontFamily: "'Playfair Display', serif", color: "#5B1F29" }}>
          ADMIN LOGIN
        </h2>

        {/* Error Message */}
        {error && <div className="alert alert-danger">{error}</div>}

        {/* Login Form */}
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <input
              type="text"
              className={`form-control ${errors.adminId ? "border border-danger" : ""}`}
              placeholder="Enter Admin ID"
              value={adminId}
              onChange={(e) => {
                setAdminId(e.target.value);
                setErrors((prev) => ({ ...prev, adminId: "" })); // Clear error when typing
              }}
              required
            />
            {errors.adminId && <div className="text-danger">{errors.adminId}</div>}
          </div>

          <div className="mb-3">
            <input
              type="password"
              className={`form-control ${errors.password ? "border border-danger" : ""}`}
              placeholder="Enter Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setErrors((prev) => ({ ...prev, password: "" })); // Clear error when typing
              }}
              required
            />
            {errors.password && <div className="text-danger">{errors.password}</div>}
          </div>

          {/* Login Button */}
          <button type="submit" className="btn w-100 text-light fw-bold" style={{ backgroundColor: "#5B1F29" }}>
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminLoginForm;
