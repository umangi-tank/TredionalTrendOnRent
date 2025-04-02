import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login_Form = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear error when user types
  };

  // Form validation function
  const validateForm = () => {
    let newErrors = {};
    if (!formData.username.trim()) newErrors.username = "Username is required";
    if (!formData.password.trim()) newErrors.password = "Password is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Returns true if no errors
  };

  // Handle login
  const handleLogin = (event) => {
    event.preventDefault();
    if (!validateForm()) return; // Stop submission if validation fails

    // Fake authentication check (replace with real logic)
    if (formData.username === "umangi" && formData.password === "123456") {
      navigate("/AfterDashboardPage");
    } else {
      setErrors({ general: "Invalid username or password" });
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center vh-100"
      style={{ backgroundColor: "#7e5c64" }}
    >
      <div className="container text-center">
        <div className="row align-items-center">
          {/* Logo Section */}
          <div className="col-lg-6 mb-5 mb-lg-0">
            <img
              src="public/Images/logo.png"
              alt="Traditional Trend of Rent Logo"
              className="img-fluid mb-4"
              style={{ maxWidth: "300px" }}
            />
          </div>

          {/* Form Section */}
          <div className="col-lg-6">
            <h2
              className="mb-4"
              style={{
                color: "#541222",
                fontFamily: "'Playfair Display', serif",
                fontSize: "3rem",
              }}
            >
              SIGN IN
            </h2>
            {errors.general && <p className="text-danger">{errors.general}</p>}
            <form onSubmit={handleLogin}>
              {/* Username Input */}
              <div className="mb-3">
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="USERNAME"
                  style={{
                    backgroundColor: "white",
                    border: "none",
                    borderRadius: "10px",
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: "bold",
                    color: "#7e5c64",
                  }}
                />
                {errors.username && <p className="text-danger">{errors.username}</p>}
              </div>

              {/* Password Input */}
              <div className="mb-3">
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="PASSWORD"
                  style={{
                    backgroundColor: "white",
                    border: "none",
                    borderRadius: "10px",
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: "bold",
                    color: "#7e5c64",
                  }}
                />
                {errors.password && <p className="text-danger">{errors.password}</p>}
              </div>

              {/* Sign-In Button */}
              <button
                type="submit"
                className="btn btn-danger w-100"
                style={{
                  backgroundColor: "#541222",
                  border: "none",
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: "bold",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                SIGN IN
              </button>
            </form>

            {/* Links */}
            <div className="mt-4 text-light">
              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "1rem" }}>
                DO YOU HAVE ANY ACCOUNT?{" "}
                <Link to="/signup" className="text-warning" style={{ textDecoration: "none" }}>
                  SIGN UP
                </Link>
              </p>
              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "1rem" }}>
                OR <br />
                <Link to="/ForgetPasswordPage" className="text-warning" style={{ textDecoration: "none" }}>
                  FORGET PASSWORD?
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login_Form;
