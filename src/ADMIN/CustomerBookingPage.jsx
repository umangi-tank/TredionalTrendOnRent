import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import Sidebar from "./AdminSidebar";
import { useNavigate } from "react-router-dom";

const CustomerBookingPage = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".profile-dropdown")) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const collections = [
    {
      name: "Umangi Tank",
      email: "umangitank99@gmail.com",
      choliName: "Occasion Lehenga Choli",
      choliType: "Ossacian",
      topwear: "Tussar Silk",
      bottomwear: "Tussar Silk",
      dupatta: "Tussar Silk",
      setType: "Choli and Dupatta",
      size: "Free Size",
      time: "24 Hour",
      price: "Rs. 3300/-",
    },
    {
      name: "Devanshi Vekariya",
      email: "umangitank99@gmail.com",
      choliName: "Occasion Lehenga Choli",
      choliType: "Ossacian",
      topwear: "Tussar Silk",
      bottomwear: "Tussar Silk",
      dupatta: "Tussar Silk",
      setType: "Choli and Dupatta",
      size: "Free Size",
      time: "24 Hour",
      price: "Rs. 3300/-",
    },
  ];

  const handleEdit = (booking) => {
    navigate("/EditBookingPage", { state: { booking } });
  };

  const handleDecline = () => {
    alert("Not available");
  };

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="container-fluid p-4" style={{ fontFamily: "Playfair Display, serif", marginLeft: "250px" }}>
        <div className="d-flex justify-content-between align-items-center border-bottom pb-2 position-fixed bg-white px-4" 
          style={{ top: 0, left: 250, width: "calc(100% - 250px)", zIndex: 1050 }}>
          <h2 className="fw-bold" style={{ color: "#541222" }}>BOOKING HISTROY</h2>
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
        <div className="table-responsive mt-5 pt-4">
          <table className="table table-bordered text-center" style={{ backgroundColor: "#f5efe1" }}>
            <thead style={{ backgroundColor: "#333", color: "#fff" }}>
              <tr>
                <th>RENTAL PRIZE</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>CHOLI NAME</th>
                <th>CHOLI TYPE</th>
                <th>TOPWEAR FABRIC</th>
                <th>BOTTOMWEAR FABRIC</th>
                <th>DUPATTA FABRIC</th>
                <th>SET TYPE</th>
                <th>SIZE</th>
                <th>DURATION</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {collections.map((item, index) => (
                <tr key={index}>
                  <td className="fw-bold" style={{ backgroundColor: "#333", color: "#fff" }}>{item.price}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.choliName}</td>
                  <td>{item.choliType}</td>
                  <td>{item.topwear}</td>
                  <td>{item.bottomwear}</td>
                  <td>{item.dupatta}</td>
                  <td>{item.setType}</td>
                  <td>{item.size}</td>
                  <td>{item.time}</td>
                  <td className="d-flex justify-content-center gap-2">
                    <button className="btn btn-primary btn-sm" onClick={() => handleEdit(item)}>
                      <FaCheck /> EDIT
                    </button>
                    <button className="btn btn-danger btn-sm" onClick={handleDecline}>
                      <FaTimes /> DELETE
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CustomerBookingPage;
