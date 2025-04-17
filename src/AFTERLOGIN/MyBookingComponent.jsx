import "bootstrap/dist/css/bootstrap.min.css";
import { FaEdit, FaTrash, FaMoneyBillAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const MyBookingComponent = () => {
  const navigate = useNavigate();
  const [bookingData, setBookingData] = useState([]);

  // Fetch all bookings
  const fetchBookings = () => {
    axios
      .get("http://localhost:5000/api/bookings")
      .then((res) => setBookingData(res.data))
      .catch((err) => console.error("Error fetching bookings:", err));
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  // DELETE single booking by ID
  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:5000/api/bookings/${id}`);
      if (response.status === 200) {
        alert("Booking deleted successfully!");
        fetchBookings();
      }
    } catch (error) {
      console.error("Delete error:", error);
      alert("Error deleting booking");
    }
  };

  const handlePayment = () => {
    navigate(`/paymentPage`);
  };

  const handleEdit = (booking) => {
    navigate("/EditCollectionPage", { state: booking });
  };

  return (
    <div className="container mt-4">
      <h4 className="text-center py-2" style={{ backgroundColor: "#9B767C", color: "white" }}>
        MY BOOKING HISTORY
      </h4>

      <div className="table-responsive">
        <table className="table table-bordered text-center table-striped table-hover align-middle">
          <thead className="table-dark">
            <tr>
              <th>Sr.</th>
              <th>Your Name</th>
              <th>Email</th>
              <th>Contact Number</th>
              <th>Choli Name</th>
              <th>Date</th>
              <th>How Much Time</th>
              <th>Starting Hour</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookingData.map((booking, index) => (
              <tr key={booking._id}>
                <td>{index + 1}</td>
                <td>{booking.yourName}</td>
                <td>{booking.emailAddress}</td>
                <td>{booking.contactNumber}</td>
                <td>{booking.choliName}</td>
                <td>{booking.date}</td>
                <td>{booking.duration}</td>
                <td>{booking.startingHour}</td>
                <td>
                  <button
                    className="btn btn-sm btn-warning me-2"
                    onClick={() => handleEdit(booking)}
                  >
                    <FaEdit />
                  </button>
                  <button
                    className="btn btn-sm btn-danger me-2"
                    onClick={() => handleDelete(booking._id)}
                  >
                    <FaTrash />
                  </button>
                  <button
                    className="btn btn-sm btn-success"
                    onClick={() => handlePayment(booking._id)}
                  >
                    <FaMoneyBillAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBookingComponent;
