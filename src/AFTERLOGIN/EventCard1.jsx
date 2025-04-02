import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import { FaHeart, FaLock} from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const EventCard1 = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const eventData = [
    {
      image: "Images/we-4.jpg",
      price: "Rs. 3300/-",
      name: "OCCASION LEHENGA CHOLI",
      fabric: "TUSSAR SILK",
      setType: "CHOLI AND DUPATTA",
      size: "FREE SIZE",
    },
    {
      image: "Images/we-3.jpg",
      price: "Rs. 3300/-",
      name: "OCCASION LEHENGA CHOLI",
      fabric: "TUSSAR SILK",
      setType: "CHOLI AND DUPATTA",
      size: "FREE SIZE",
    },
  ];

  return (
    <div className="container mt-4">
      <h4 className="text-center py-2" style={{ backgroundColor: "#541222", color: "white" }}>
        OTHER EVENTS CATEGORIES
      </h4>
      {eventData.map((event, index) => (
        <Card className="mb-3" key={index}>
          <div className="row g-0 align-items-center">
            <div className="col-md-4">
              <img src={event.image} className="img-fluid rounded-start" alt="Event" />
            </div>
            <div className="col-md-8">
              <Card.Body>
                <Card.Title className="fw-bold text-danger">RENTAL PRIZE: {event.price}</Card.Title>
                <Card.Text>
                  <strong>NAME :</strong> {event.name} <br />
                  <strong>TOPWEAR FABRIC :</strong> {event.fabric} <br />
                  <strong>BOTTOMWEAR FABRIC :</strong> {event.fabric} <br />
                  <strong>DUPATTA FABRIC :</strong> {event.fabric} <br />
                  <strong>SET TYPE :</strong> {event.setType} <br />
                  <strong>SIZES :</strong> {event.size}
                </Card.Text>
                <div className="d-flex gap-2">
                  <button className="btn btn-outline-danger">
                    <FaHeart />
                  </button>
                  <button className="btn btn-outline-secondary"  onClick={() => navigate("/CategoriesBookingPage")}>
                    <FaLock />
                  </button>
                  
                </div>
              </Card.Body>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default EventCard1;
