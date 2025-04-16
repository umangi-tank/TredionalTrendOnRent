import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const EditCollectionPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const booking = location.state;

  const [formData, setFormData] = useState({
    yourName: "",
    emailAddress: "",
    contactNumber: "",
    choliName: "",
    date: "",
    duration: "",
    startingHour: "",
  });

  // Pre-fill the form with booking data
  useEffect(() => {
    if (booking) {
      setFormData({
        yourName: booking.yourName || "",
        emailAddress: booking.emailAddress || "",
        contactNumber: booking.contactNumber || "",
        choliName: booking.choliName || "",
        date: booking.date || "",
        duration: booking.duration || "",
        startingHour: booking.startingHour || "",
      });
    }
  }, [booking]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    console.log("Booking ID:", booking._id);
  
    try {
      const response = await axios.put(
        `http://localhost:5000/api/bookings/${booking._id}`, 
        formData
      );
  
      if (response.status === 200) {
        alert("Booking updated successfully!");
        navigate("/MyBookingPage");
      }
    } catch (err) {
      console.error("Error updating booking:", err);
      alert("Failed to update booking.");
    }
  };
  return (
    <div className="container mt-4">
      <h4 className="text-center py-2" style={{ backgroundColor: "#9B767C", color: "white" }}>
        EDIT BOOKING
      </h4>
      <form onSubmit={handleSubmit} className="p-4 border rounded bg-light">
        {["yourName", "emailAddress", "contactNumber", "choliName", "date", "duration", "startingHour"].map((field) => (
          <div className="mb-3" key={field}>
            <label className="form-label">{field.replace(/([A-Z])/g, " $1")}</label>
            <input
              type={field === "date" ? "date" : "text"}
              className="form-control"
              name={field}
              value={formData[field]}
              onChange={handleChange}
              required
            />
          </div>
        ))}
        <button type="submit" className="btn btn-primary w-100">
          Update Booking
        </button>
      </form>
    </div>
  );
};

export default EditCollectionPage;
