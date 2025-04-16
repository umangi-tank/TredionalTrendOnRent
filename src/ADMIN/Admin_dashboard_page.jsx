import { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./AdminSidebar"; // Import Sidebar component

const AdminDashboard_Page = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [reviews, setReviews] = useState([]); // State to store reviews

  // Fetch reviews from the backend when the component mounts
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/reviews/reviews"); // Backend API endpoint
        setReviews(response.data); // Set fetched reviews in the state
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, []); // Empty dependency array means this runs only once when the component mounts

  return (
    <div className="d-flex">
      {/* Sidebar Component */}
      <Sidebar />

      {/* Main Content */}
      <div className="container-fluid p-4" style={{ marginLeft: "250px", width: "calc(100% - 250px)" }}>
        {/* Header Section */}
        <div className="d-flex justify-content-between align-items-center pb-3 border-bottom">
          <h2 className="fw-bold" style={{ color: "#541222" }}>DASHBOARD</h2>

          {/* Admin Profile Dropdown */}
          <div className="position-relative">
            <img
              src="public/Images/admin_logo.png"
              alt="Admin"
              style={{ width: "40px", height: "40px", borderRadius: "50%", cursor: "pointer" }}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            />
            {dropdownOpen && (
              <div
                className="bg-white text-dark rounded shadow mt-2 p-2 position-absolute"
                style={{
                  right: "0px",
                  top: "50px",
                  fontFamily: "Playfair Display, serif",
                  width: "150px",
                }}
              >
                <a href="/AdminProfile" className="d-block text-decoration-none text-dark p-2">View Profile</a>
                <hr className="my-2" />
                <a href="/Admin_login" className="d-block text-decoration-none text-danger p-2">Sign Out</a>
              </div>
            )}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="pt-4">
          {/* Dashboard Cards */}
          <div className="row text-center">
            <div className="col-md-4 p-3">
              <div className="p-4 rounded shadow" style={{ backgroundColor: "#f8d7da" }}>
                <h1 className="text-danger">4</h1>
                <p className="fw-bold">Total Booking</p>
              </div>
            </div>
            <div className="col-md-4 p-3">
              <div className="p-4 rounded shadow" style={{ backgroundColor: "#cce5ff" }}>
                <h1 className="text-primary">6</h1>
                <p className="fw-bold">Total Collection</p>
              </div>
            </div>
            <div className="col-md-4 p-3">
              <div className="p-4 rounded shadow" style={{ backgroundColor: "#d4edda" }}>
                <h1 className="text-success">2</h1>
                <p className="fw-bold">Recently Registered</p>
              </div>
            </div>
          </div>

          {/* Customer Reviews */}
          <div className="bg-light p-3 rounded shadow mt-4">
            <h4 className="fw-bold">Customer Reviews</h4>
            <table className="table table-bordered mt-3">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Message</th>
                </tr>
              </thead>
              <tbody>
                {reviews.length > 0 ? (
                  reviews.map((review) => (
                    <tr key={review._id}>
                      <td>{review.name}</td>
                      <td>{review.email}</td>
                      <td>{review.message}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3" className="text-center">No reviews available</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard_Page;
