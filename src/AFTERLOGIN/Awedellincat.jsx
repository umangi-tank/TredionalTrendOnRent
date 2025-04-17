import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import { FaHeart, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Awedellincat = () => {
  const navigate = useNavigate();
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/collections");
        setCollections(res.data);
      } catch (error) {
        console.error("Error fetching collections:", error);
      }
    };

    fetchCollections();
  }, []);

  const handleWishlistClick = () => {
    alert("Added to Wishlists");
    navigate("/WhishListPage");
  };

  return (
    <div className="container mt-4">
      <h4 className="text-center py-2" style={{ backgroundColor: "#9B767C", color: "white" }}>
        WE DELL IN
      </h4>

      {collections.map((event, index) => (
        <Card className="mb-3" key={index}>
          <div className="row g-0 align-items-center">
            <div className="col-md-4">
              <img
                src={`http://localhost:5000/uploads/${event.image}`}
                className="img-fluid rounded-start"
                alt="Event"
                style={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover", // ensures image fills box without distortion
                  borderRadius: "10px 0 0 10px",
                }}
              />
            </div>
            <div className="col-md-8">
              <Card.Body>
                <Card.Title className="fw-bold text-danger">
                  RENTAL PRICE: Rs. {event.rentalPrice}/-
                </Card.Title>
                <Card.Text>
                  <strong>NAME :</strong> {event.choliName} <br />
                  <strong>TOPWEAR FABRIC :</strong> {event.topwearFabric} <br />
                  <strong>BOTTOMWEAR FABRIC :</strong> {event.bottomwearFabric} <br />
                  <strong>DUPATTA FABRIC :</strong> {event.dupattaType} <br />
                  <strong>SET TYPE :</strong> {event.setType} <br />
                  <strong>SIZES :</strong> {event.setSize}
                </Card.Text>
                <div className="d-flex gap-2">
                  <button className="btn btn-outline-danger" onClick={handleWishlistClick}>
                    <FaHeart />
                  </button>
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => navigate("/CategoriesBookingPage")}
                  >
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

export default Awedellincat;
