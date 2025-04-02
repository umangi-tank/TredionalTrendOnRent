import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const MyBookingComponent = () => {
  const navigate = useNavigate(); // React Router hook for navigation

  const eventData = [
    {
      image: "Images/we-4.jpg",
      price: "Rs. 3300/-",
      name: "OCCASION LEHENGA CHOLI",
      date: "12-April-2025",
      duration: "24 HOURS",
      startHour: "4:00 PM",
      contact: "91739014174",
    },
  ];

  return (
    <div className="container mt-4">
      <h4 className="text-center py-2" style={{ backgroundColor: "#9B767C", color: "white" }}>
        MY BOOKING HISTORY
      </h4>
      {eventData.map((event, index) => (
        <Card className="mb-3 p-3" key={index} style={{ backgroundColor: "#6b4f4f", color: "white" }}>
          <div className="row g-0 align-items-center">
            <div className="col-md-4">
              <img src={event.image} className="img-fluid rounded-start" alt="Event" />
            </div>
            <div className="col-md-8 d-flex justify-content-between align-items-center">
              <Card.Body>
                <Card.Title className="fw-bold" style={{ fontSize: "24px" }}>
                  RENTAL PRICE: {event.price}
                </Card.Title>
                <Card.Text style={{ fontSize: "18px" }}>
                  <strong>NAME :</strong> {event.name} <br />
                  <strong>DATE :</strong> {event.date} <br />
                  <strong>HOW MUCH TIME :</strong> {event.duration} <br />
                  <strong>STARTING HOUR :</strong> {event.startHour} <br />
                  <strong>CONTACT NUMBER :</strong> {event.contact}
                </Card.Text>
              </Card.Body>
              <div className="d-flex flex-column gap-3">
                {/* Edit Button - Navigates to EditCollectionPage */}
                <button className="btn btn-light" onClick={() => navigate("/EditCollectionPage")}>
                  <FaEdit size={20} style={{ color: "#541222" }} />
                </button>
                <button className="btn btn-light">
                  <FaTrash size={20} style={{ color: "#541222" }} />
                </button>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default MyBookingComponent;
