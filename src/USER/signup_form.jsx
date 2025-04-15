import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function SignUpForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState(""); // State for error messages
  const [success, setSuccess] = useState(""); // State for success messages

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); // Clear error on input change
    setSuccess(""); // Clear success message on input change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const payload = {
        username: formData.username,
        email: formData.email,
        phone: formData.mobile, 
        password: formData.password,
      };

      const res = await axios.post("http://localhost:5000/api/signup", payload);
      setSuccess(res.data.message); 
      setFormData({ username: "", email: "", mobile: "", password: "", confirmPassword: "" }); // Reset form
    } catch (err) {
      console.error(err.response?.data || err.message);
      setError("Error signing up: " + (err.response?.data?.message || "Please try again.")); // Set error message
    }
  };

  return (
    <div
      className="container-fluid min-vh-100 d-flex align-items-center justify-content-center"
      style={{ backgroundColor: "#8B646B" }}
    >
      <div
        className="row w-75 shadow-lg p-4 rounded-3"
        style={{ backgroundColor: "#D3A7B4" }}
      >
        
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <img
            src="/Images/sign_up_page.png"
            alt="Traditional Wear"
            className="img-fluid"
            style={{ maxHeight: "500px" }}
          />
        </div>

        <div className="col-md-6 text-light">
          <h2
            className="text-center mb-4"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: "bold" }}
          >
            SIGN UP
          </h2>

          {/* Success and Error Messages */}
          {success && <div className="alert alert-success">{success}</div>}
          {error && <div className="alert alert-danger">{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label text-light fw-bold">USERNAME</label>
              <input
                type="text"
                className="form-control"
                name="username"
                placeholder="Enter username"
                value={formData.username}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label text-light fw-bold">EMAIL ADDRESS</label>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label text-light fw-bold">MOBILE NUMBER</label>
              <input
                type="tel"
                className="form-control"
                name="mobile"
                placeholder="Enter mobile number"
                value={formData.mobile}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label text-light fw-bold">PASSWORD</label>
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label text-light fw-bold">CONFIRM PASSWORD</label>
              <input
                type="password"
                className="form-control"
                name="confirmPassword"
                placeholder="Confirm password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="btn btn-dark w-100"
                style={{ backgroundColor: "#6B2D3D", border: "none" }}
              >
                SIGN UP
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;