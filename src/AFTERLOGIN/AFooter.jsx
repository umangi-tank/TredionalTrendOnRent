const AFooter = () => {
    return (
      <footer className="mt-5" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="container text-center py-5">
          <div className="row">
            {/* Contact Me Section */}
            <div className="col-md-4 mb-4">
              <h5 className="fw-bold" style={{ color: "#541222" }}>
                CONTACT ME
              </h5>
              <div className="d-flex justify-content-center gap-3 mt-3">
                <i className="bi bi-instagram fs-4" style={{ color: "#541222" }}></i>
                <i className="bi bi-pinterest fs-4" style={{ color: "#541222" }}></i>
                <i className="bi bi-telegram fs-4" style={{ color: "#541222" }}></i>
                <i className="bi bi-facebook fs-4" style={{ color: "#541222" }}></i>
                <i className="bi bi-google fs-4" style={{ color: "#541222" }}></i>
              </div>
            </div>
  
            {/* Customer Care Section */}
            <div className="col-md-4 mb-4">
              <h5 className="fw-bold" style={{ color: "#541222" }}>
                CUSTOMER CARE
              </h5>
              <ul className="list-unstyled mt-3" style={{ color: "#541222" }}>
                <li>After-Sales Service</li>
                <li>Product Information</li>
                <li>Support Services</li>
                <li>Feedback Mechanism</li>
              </ul>
            </div>
  
            {/* More Explore Section */}
            <div className="col-md-4 mb-4">
              <h5 className="fw-bold" style={{ color: "#541222" }}>
                MORE EXPLORE
              </h5>
              <ul className="list-unstyled mt-3" style={{ color: "#541222" }}>
                <li>Cultural Sensitivity and Personalization</li>
                <li>Building Relationships</li>
                <li>Product Guidance</li>
                <li>Problem Resolution</li>
              </ul>
            </div>
          </div>
  
          {/* Footer Links */}
          <div className="mt-4">
            <p className="mb-0" style={{ color: "#541222" }}>
              HOME | WE DELL IN | MY BOOKING | PROFILE SETTING
            </p>
          </div>
  
          {/* Copyright Section */}
          <div className="mt-3">
            <p className="mb-0 fw-bold" style={{ color: "#541222", backgroundColor: "#f1f1f1", padding: "10px", borderRadius: "5px" }}>
              REACT PROJECT, DEVELOPED BY JAY, ISHA, UMANGI
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default AFooter;
  