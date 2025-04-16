import { useState, useEffect } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import Sidebar from "./AdminSidebar";
import axios from "axios";

const CustomerBookingPage = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [bookings, setBookings] = useState([]);

  // Fetch bookings
  const fetchBookings = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/bookings");
      setBookings(res.data);
    } catch (error) {
      console.error("Failed to fetch bookings:", error);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".profile-dropdown")) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Accept booking and send email
  const handleAccept = async (bookingId) => {
    const booking = bookings.find((b) => b._id === bookingId);
    try {
      // Use the correct route for accepting the booking
      await axios.post(`http://localhost:5000/api/bookings/accept/${bookingId}`, {
        emailAddress: booking.emailAddress,
        yourName: booking.yourName,
      });
      alert("✅ Booking accepted and email sent!");
      fetchBookings(); // Refresh booking list
    } catch (error) {
      console.error("Accept error:", error);
      alert("❌ Failed to send acceptance mail.");
    }
  };

  // Decline booking and send email
  const handleDecline = async (bookingId) => {
    const booking = bookings.find((b) => b._id === bookingId);
    try {
      // Use the correct route for declining the booking
      await axios.post(`http://localhost:5000/api/bookings/decline/${bookingId}`, {
        emailAddress: booking.emailAddress,
        yourName: booking.yourName,
      });
      alert("❌ Booking declined and email sent!");
      fetchBookings(); // Refresh booking list
    } catch (error) {
      console.error("Decline error:", error);
      alert("❌ Failed to send decline mail.");
    }
  };

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="container-fluid p-4" style={{ fontFamily: "Playfair Display, serif", marginLeft: "250px" }}>
        {/* Top navbar */}
        <div className="d-flex justify-content-between align-items-center border-bottom pb-2 position-fixed bg-white px-4"
          style={{ top: 0, left: 250, width: "calc(100% - 250px)", zIndex: 1050 }}>
          <h2 className="fw-bold" style={{ color: "#541222" }}>BOOKING HISTORY</h2>
          <div className="position-relative profile-dropdown">
            <img
              src="/Images/admin_logo.png"
              alt="Admin"
              style={{ width: "40px", height: "40px", borderRadius: "50%", cursor: "pointer" }}
              onClick={(e) => {
                e.stopPropagation();
                setDropdownOpen(!dropdownOpen);
              }}
            />
            {dropdownOpen && (
              <div className="bg-white text-dark rounded shadow mt-2 p-2 position-absolute"
                style={{ right: "0px", top: "50px", width: "150px", zIndex: "1000" }}>
                <a href="/AdminProfile" className="d-block text-decoration-none text-dark p-2">View Profile</a>
                <hr className="my-2" />
                <a href="/Admin_login" className="d-block text-decoration-none text-danger p-2">Sign Out</a>
              </div>
            )}
          </div>
        </div>

        {/* Booking table */}
        <div className="table-responsive mt-5 pt-4">
          <table className="table table-bordered text-center" style={{ backgroundColor: "#f5efe1" }}>
            <thead style={{ backgroundColor: "#333", color: "#fff" }}>
              <tr>
                <th>CHOLI NAME</th>
                <th>DURATION</th>
                <th>STARTING HOUR</th>
                <th>CONTACT NUMBER</th>
                <th>YOUR NAME</th>
                <th>EMAIL ADDRESS</th>
                <th>YOUR ADDRESS</th>
                <th>STATUS</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {bookings.length > 0 ? (
                bookings.map((booking, index) => (
                  <tr key={index}>
                    <td className="fw-bold" style={{ backgroundColor: "#333", color: "#fff" }}>{booking.choliName}</td>
                    <td>{booking.duration}</td>
                    <td>{booking.startingHour}</td>
                    <td>{booking.contactNumber}</td>
                    <td>{booking.yourName}</td>
                    <td>{booking.emailAddress}</td>
                    <td>{booking.yourAddress}</td>
                    <td>
                      {booking.status ? (
                        <span className={`badge ${booking.status === 'Accepted' ? 'bg-success' : 'bg-danger'}`}>
                          {booking.status}
                        </span>
                      ) : (
                        <span className="text-muted">Pending</span>
                      )}
                    </td>
                    <td className="d-flex justify-content-center gap-2">
                      <button className="btn btn-primary btn-sm" onClick={() => handleAccept(booking._id)} disabled={booking.status}>
                        <FaCheck /> ACCEPT
                      </button>
                      <button className="btn btn-danger btn-sm" onClick={() => handleDecline(booking._id)} disabled={booking.status}>
                        <FaTimes /> DECLINE
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="9">No bookings available.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CustomerBookingPage;
