import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const We_Dell_in_description = () => {
  const navigate = useNavigate(); // React Router navigation hook

  // Image paths
  const images = [
    "/Images/we-1.jpg",
    "/Images/we-2.jpg",
    "/Images/we-3.jpg",
    "/Images/we-4.jpg",
    "/Images/we-5.jpg",
    "/Images/we-6.jpg",
  ];

  return (
    <div className="container my-4">
      {/* Categories Header */}
      <h2
        className="text-center mb-4"
        style={{
          backgroundColor: "#8B5D66",
          color: "white",
          padding: "10px",
          fontFamily: "'Playfair Display', serif",
        }}
      >
          WE DELL IN
      </h2>

      {/* Category Buttons */}
      
      <div className="d-flex justify-content-center gap-3 my-3 flex-wrap">
  {["OTHER EVENTS", "WEDDING SPECIAL", "NAVARATRI SPECIAL"].map((category, index) => (
    <button
      key={index}
      className="btn px-4 py-2"
      style={{ backgroundColor: "#541222", color: "white", border: "none" }}
      onClick={() => navigate("/Signup")}
    >
      {category}
    </button>
  ))}
</div>


      {/* Image Grid with Bootstrap */}
      <div className="row g-3">
        {images.map((img, index) => (
          <div className="col-md-4 col-sm-6 col-12 d-flex align-items-stretch" key={index}>
            <div className="card w-100">
              <div className="ratio ratio-1x1"> {/* Ensures all images are square */}
                <img src={img} className="card-img-top img-fluid" alt={`Image ${index + 1}`} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default We_Dell_in_description;
