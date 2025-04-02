import "bootstrap/dist/css/bootstrap.min.css";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";

const WhishListComponent = () => {
  const dresses = [
    { 
      image: "Images/we-6.jpg", 
      title: "OTHER EVENT",
      details: "price: Rs. 1200 | name: OCCASION LEHENGA CHOLI | fabric: TUSSAR SILK | setType: CHOLI AND DUPATTA | size: FREE SIZE"
    },
    { 
      image: "Images/we-6.jpg", 
      title: "NAVARATRI SPECIAL",
      details: "price: Rs. 3300 | name: FABRICLEHENGA CHOLI | fabric: TUSSAR SILK | setType: CHOLI AND DUPATTA | size: FREE SIZE"
    },
    { 
      image: "Images/we-6.jpg", 
      title: "WEDDING SPECIAL",
      details: "price: Rs. 2800 | name: TRADIONAL LEHENGA CHOLI | fabric: TUSSAR SILK | setType: CHOLI AND DUPATTA | size: FREE SIZE"
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="container mt-5">
        <h4 className="text-center py-2" style={{ backgroundColor: "#9B767C", color: "white" }}>
        WISHLIST
      </h4>
      <div className="row">
        {dresses.map((dress, index) => (
          <div key={index} className="col-md-4">
            <div 
              className="card border-2 shadow-sm p-3 position-relative overflow-hidden"
              style={{ borderColor: "#541222", cursor: "pointer" }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img src={dress.image} className="card-img-top" alt="Dress" />
              <div className="card-body text-center">
                <h5 className="fw-bold" style={{ color: "#541222" }}>{dress.title}</h5>
                <FaHeart size={20} style={{ color: "#541222", cursor: "pointer" }} />
              </div>

              {/* Hover effect covering the entire division */}
              <div 
                className="position-absolute top-0 start-0 end-0 bottom-0 bg-dark text-white d-flex align-items-center justify-content-center p-3"
                style={{
                  opacity: hoveredIndex === index ? 0.9 : 0,
                  visibility: hoveredIndex === index ? "visible" : "hidden",
                  transition: "opacity 0.3s ease-in-out, visibility 0.3s ease-in-out"
                }}
              >
                <p className="text-center m-0">{dress.details}</p>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhishListComponent;
