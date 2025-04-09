import "bootstrap/dist/css/bootstrap.min.css";

function SignUpForm() {
  // Dummy data for demonstration purposes
  const errors = {
    // username: "Username is required",
    // email: "Invalid email address",
    // password: "Password must be at least 6 characters",
    // confirmPassword: "Passwords do not match",
  };
  const isSubmitting = false;
  const apiError = null;

  return (
    <div
      className="container-fluid min-vh-100 d-flex align-items-center justify-content-center"
      style={{ backgroundColor: "#8B646B" }}
    >
      <div
        className="row w-75 shadow-lg p-4 rounded-3"
        style={{ backgroundColor: "#D3A7B4" }} // Changed background for better contrast
      >
        {/* Left Side - Image */}
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <img
            src="/Images/sign_up_page.png" // Assuming the image is in the public/Images folder
            alt="Traditional Wear"
            className="img-fluid"
            style={{ maxHeight: "500px" }}
          />
        </div>

        {/* Right Side - Form */}
        <div className="col-md-6 text-light">
          <h2
            className="text-center mb-4"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: "bold",
            }}
          >
            SIGN UP
          </h2>

          {apiError && (
            <div className="alert alert-danger" role="alert">
              {apiError}
            </div>
          )}

          <form onSubmit={(e) => e.preventDefault()}> {/* Prevent actual submission */}
            <div className="mb-3">
              <label className="form-label text-light fw-bold">USERNAME</label>
              <input
                type="text"
                className={`form-control ${errors.username ? "is-invalid" : ""}`}
                placeholder="Enter username"
                name="username"
                // value={formData.username} // Remove state dependency for pure design
                // onChange={handleChange}
              />
              {errors.username && (
                <div className="invalid-feedback">{errors.username}</div>
              )}
            </div>

            <div className="mb-3">
              <label className="form-label text-light fw-bold">EMAIL ADDRESS</label>
              <input
                type="email"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                placeholder="Enter email"
                name="email"
                // value={formData.email}
                // onChange={handleChange}
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email}</div>
              )}
            </div>

            <div className="mb-3">
              <label className="form-label text-light fw-bold">MOBILE NUMBER</label>
              <input
                type="tel"
                className={`form-control ${errors.mobileNumber ? "is-invalid" : ""}`}
                placeholder="Enter mobile number"
                name="mobileNumber"
                // value={formData.mobileNumber}
                // onChange={handleChange}
              />
              {errors.mobileNumber && (
                <div className="invalid-feedback">{errors.mobileNumber}</div>
              )}
            </div>

            <div className="mb-3">
              <label className="form-label text-light fw-bold">PASSWORD</label>
              <input
                type="password"
                className={`form-control ${errors.password ? "is-invalid" : ""}`}
                placeholder="Enter password"
                name="password"
                // value={formData.password}
                // onChange={handleChange}
              />
              {errors.password && (
                <div className="invalid-feedback">{errors.password}</div>
              )}
            </div>

            <div className="mb-3">
              <label className="form-label text-light fw-bold">
                CONFIRM PASSWORD
              </label>
              <input
                type="password"
                className={`form-control ${errors.confirmPassword ? "is-invalid" : ""}`}
                placeholder="Confirm password"
                name="confirmPassword"
                // value={formData.confirmPassword}
                // onChange={handleChange}
              />
              {errors.confirmPassword && (
                <div className="invalid-feedback">{errors.confirmPassword}</div>
              )}
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="btn btn-dark w-100"
                style={{
                  backgroundColor: "#6B2D3D",
                  border: "none",
                }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span
                      className="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>{" "}
                    Signing Up...
                  </>
                ) : (
                  "SIGN UP"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;