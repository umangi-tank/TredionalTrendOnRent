/* eslint-disable no-undef */
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" }); // Using email as identifier
  const [errors, setErrors] = useState({});
  const [generalError, setGeneralError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    setGeneralError(""); // Clear general error on input change
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.email.trim()) newErrors.email = "Email is required";
    // Basic email validation (you might want a more robust one)
    else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.password.trim()) newErrors.password = "Password is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      const backendPort = process.env.PORT || 5000;
      const backendBaseUrl = process.env.MONGODB_URI || 'http://localhost';
      const apiUrl = `${backendBaseUrl}:${backendPort}/api/auth/login`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: formData.email, password: formData.password }),
      });

      console.log("Full Login Response:", response); // Log the entire response object
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        const text = await response.text();
        console.error("Backend responded with non-JSON:", text);
        setGeneralError("Backend responded with an unexpected format. Check the server logs.");
      } else {
        const data = await response.json();
        console.log("Login Data:", data); // Log the parsed JSON data
        setLoading(false);

        if (response.ok) {
          localStorage.setItem('authToken', data.token);
          navigate("/AfterDashboardPage");
        } else {
          setGeneralError(data.message || "Invalid login credentials");
        }
      }
    } catch (error) {
      console.error("Login failed (fetch error):", error);
      setLoading(false);
      if (error.message === 'Failed to fetch') {
        setGeneralError("Could not connect to the server. Please ensure the backend is running and accessible.");
      } else {
        setGeneralError("An unexpected error occurred during login.");
      }
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100" style={{ backgroundColor: "#7e5c64" }}>
      <div className="container text-center">
        <div className="row align-items-center">
          {/* Logo Section */}
          <div className="col-lg-6 mb-5 mb-lg-0">
            <img
              src="/Images/logo.png"
              alt="Traditional Trend of Rent Logo"
              className="img-fluid mb-4"
              style={{ maxWidth: "300px" }}
            />
          </div>

          {/* Form Section */}
          <div className="col-lg-6">
            <h2 className="mb-4" style={{ color: "#541222", fontFamily: "'Playfair Display', serif", fontSize: "3rem" }}>
              SIGN IN
            </h2>
            {generalError && <p className="text-danger">{generalError}</p>}
            <form onSubmit={handleLogin}>
              {/* Email Input */}
              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="EMAIL"
                  style={{ backgroundColor: "white", borderRadius: "10px", fontFamily: "'Playfair Display', serif", fontWeight: "bold", color: "#7e5c64" }}
                />
                {errors.email && <p className="text-danger">{errors.email}</p>}
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
                  style={{ backgroundColor: "white", borderRadius: "10px", fontFamily: "'Playfair Display', serif", fontWeight: "bold", color: "#7e5c64" }}
                />
                {errors.password && <p className="text-danger">{errors.password}</p>}
              </div>

              {/* Sign-In Button */}
              <button
                type="submit"
                className="btn btn-danger w-100"
                style={{ backgroundColor: "#541222", borderRadius: "10px", fontFamily: "'Playfair Display', serif", fontWeight: "bold", padding: "10px" }}
                disabled={loading}
              >
                {loading ? "Signing In..." : "SIGN IN"}
              </button>
            </form>

            {/* Links */}
            <div className="mt-4 text-light">
              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "1rem" }}>
                DO YOU HAVE ANY ACCOUNT? <Link to="/signup" className="text-warning" style={{ textDecoration: "none" }}>SIGN UP</Link>
              </p>
              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "1rem" }}>
                OR <br />
                <Link to="/ForgetPasswordPage" className="text-warning" style={{ textDecoration: "none" }}>FORGET PASSWORD?</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;