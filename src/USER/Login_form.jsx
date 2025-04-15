import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });

      if (res.data.success) {
        navigate("/AfterDashboardPage");
      } else {
        setError(res.data.message || "Login failed");
      }
    } catch (err) {
      console.error(err);
      setError("Server error or network issue");
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
              src="/Images/logo.png"
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
            <form onSubmit={handleLogin}>
              {/* Email Input */}
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="EMAIL"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{
                    backgroundColor: "white",
                    borderRadius: "10px",
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: "bold",
                    color: "#7e5c64",
                  }}
                />
              </div>

              {/* Password Input */}
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="PASSWORD"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  style={{
                    backgroundColor: "white",
                    borderRadius: "10px",
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: "bold",
                    color: "#7e5c64",
                  }}
                />
              </div>

              {/* Sign-In Button */}
              <button
                type="submit"
                className="btn btn-danger w-100"
                style={{
                  backgroundColor: "#541222",
                  borderRadius: "10px",
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: "bold",
                  padding: "10px",
                }}
              >
                SIGN IN
              </button>

              {/* Error Message */}
              {error && <div className="text-danger mt-2">{error}</div>}
            </form>

            {/* Links */}
            <div className="mt-4 text-light">
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1rem",
                }}
              >
                DO YOU HAVE ANY ACCOUNT?{" "}
                <Link
                  to="/signup"
                  className="text-warning"
                  style={{ textDecoration: "none" }}
                >
                  SIGN UP
                </Link>
              </p>
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1rem",
                }}
              >
                OR <br />
                <Link
                  to="/ForgetPasswordPage"
                  className="text-warning"
                  style={{ textDecoration: "none" }}
                >
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

export default LoginForm;
