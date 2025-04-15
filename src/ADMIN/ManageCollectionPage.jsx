import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import Sidebar from "./AdminSidebar"; // Your existing sidebar component

const ManageCollectionPage = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/collections");
        const data = await res.json();
        setCollections(data);
      } catch (error) {
        console.error("Error fetching collections:", error);
      }
    };

    fetchCollections();
  }, []);

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

  const handleEdit = (item) => {
    alert(`Edit clicked for ${item.choliName}`);
  };

  const handleDelete = (item) => {
    if (window.confirm(`Are you sure you want to delete ${item.choliName}?`)) {
      alert("Deleted!");
    }
  };

  return (
    <div className="d-flex">
      <Sidebar />

      <div
        className="container-fluid p-4"
        style={{ fontFamily: "Playfair Display, serif", marginLeft: "250px" }}
      >
        {/* Header */}
        <div
          className="d-flex justify-content-between align-items-center border-bottom pb-2 position-fixed bg-white px-4"
          style={{ top: 0, left: 250, width: "calc(100% - 250px)", zIndex: 1050 }}
        >
          <h2 className="fw-bold" style={{ color: "#541222" }}>
            MANAGE COLLECTION
          </h2>

          <div className="position-relative profile-dropdown">
            <img
              src="/Images/admin_logo.png"
              alt="Admin"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                cursor: "pointer",
              }}
              onClick={(e) => {
                e.stopPropagation();
                setDropdownOpen(!dropdownOpen);
              }}
            />
            {dropdownOpen && (
              <div
                className="bg-white text-dark rounded shadow mt-2 p-2 position-absolute"
                style={{ right: "0px", top: "50px", width: "150px", zIndex: "1000" }}
              >
                <a
                  href="/AdminProfile"
                  className="d-block text-decoration-none text-dark p-2"
                >
                  View Profile
                </a>
                <hr className="my-2" />
                <a
                  href="/Admin_login"
                  className="d-block text-decoration-none text-danger p-2"
                >
                  Sign Out
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Table */}
        <div className="table-responsive mt-5 pt-4">
          <table
            className="table table-bordered text-center"
            style={{ backgroundColor: "#f5efe1" }}
          >
            <thead style={{ backgroundColor: "#333", color: "#fff" }}>
              <tr>
                <th>IMAGE</th>
                <th>CHOLI NAME</th>
                <th>CHOLI TYPE</th>
                <th>TOPWEAR</th>
                <th>BOTTOMWEAR</th>
                <th>DUPATTA</th>
                <th>SET TYPE</th>
                <th>SIZE</th>
                <th>RENTAL TIME</th>
                <th>RENTAL PRICE</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {collections.length > 0 ? (
                collections.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <img
                        src={item.image}
                        alt="choli"
                        style={{
                          width: "80px",
                          height: "80px",
                          objectFit: "cover",
                        }}
                      />
                    </td>
                    <td>{item.choliName}</td>
                    <td>{item.choliType}</td>
                    <td>{item.topwearFabric}</td>
                    <td>{item.bottomwearFabric}</td>
                    <td>{item.dupattaType}</td>
                    <td>{item.setType}</td>
                    <td>{item.setSize}</td>
                    <td>{item.rentalTime}</td>

                    <td
                      className="fw-bold"
                      style={{ backgroundColor: "#333", color: "#fff" }}
                    >
                      ₹{item.rentalPrice}
                    </td>
                    <td className="d-flex justify-content-center gap-2">
                      <button
                        className="btn btn-primary btn-sm"
                        onClick={() => handleEdit(item)}
                      >
                        <FaEdit /> Edit
                      </button>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDelete(item)}
                      >
                        <FaTrash /> Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="11" className="text-center">
                    No data available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageCollectionPage;
