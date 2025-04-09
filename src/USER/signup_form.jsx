import "bootstrap/dist/css/bootstrap.min.css";

function SignUpForm() {
  return (
    <div
      className="container-fluid min-vh-100 d-flex align-items-center justify-content-center"
      style={{ backgroundColor: "#8B646B" }}
    >
      <div
        className="row w-75 shadow-lg p-4 rounded-3"
        style={{ backgroundColor: "#D3A7B4" }}
      >
        {/* Left Side - Image */}
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <img
            src="/Images/sign_up_page.png"
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

          <form>
            <div className="mb-3">
              <label className="form-label text-light fw-bold">USERNAME</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter username"
                readOnly // For design purposes
              />
            </div>

            <div className="mb-3">
              <label className="form-label text-light fw-bold">EMAIL ADDRESS</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                readOnly // For design purposes
              />
            </div>

            <div className="mb-3">
              <label className="form-label text-light fw-bold">MOBILE NUMBER</label>
              <input
                type="tel"
                className="form-control"
                placeholder="Enter mobile number"
                readOnly // For design purposes
              />
            </div>

            <div className="mb-3">
              <label className="form-label text-light fw-bold">PASSWORD</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                readOnly // For design purposes
              />
            </div>

            <div className="mb-3">
              <label className="form-label text-light fw-bold">
                CONFIRM PASSWORD
              </label>
              <input
                type="password"
                className="form-control"
                placeholder="Confirm password"
                readOnly // For design purposes
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="btn btn-dark w-100"
                style={{
                  backgroundColor: "#6B2D3D",
                  border: "none",
                }}
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