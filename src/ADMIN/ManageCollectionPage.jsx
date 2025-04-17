import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import Sidebar from "./AdminSidebar";
import axios from "axios";

const ManageCollectionPage = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [collections, setCollections] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

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
    setCurrentItem(item);
    setEditMode(true);
  };

  const handleDelete = async (itemId) => {
    if (window.confirm("Are you sure you want to delete this collection?")) {
      try {
        await axios.delete(`http://localhost:5000/api/collections/${itemId}`);
        setCollections((prevCollections) =>
          prevCollections.filter((item) => item._id !== itemId)
        );
        alert("Collection deleted successfully");
      } catch (error) {
        console.error("Error deleting collection:", error);
        alert("Failed to delete collection");
      }
    }
  };

  const handleSave = async () => {
    try {
      const updatedItem = await axios.put(
        `http://localhost:5000/api/collections/${currentItem._id}`,
        currentItem
      );
      setCollections((prevCollections) =>
        prevCollections.map((item) =>
          item._id === updatedItem.data._id ? updatedItem.data : item
        )
      );
      setEditMode(false);
      alert("Collection updated successfully");
    } catch (error) {
      console.error("Error updating collection:", error);
      alert("Failed to update collection");
    }
  };

  const handleInputChange = (e, field) => {
    setCurrentItem({ ...currentItem, [field]: e.target.value });
  };

  return (
    <div className="d-flex">
      <Sidebar />
      <div
        className="container-fluid p-4"
        style={{ fontFamily: "Playfair Display, serif", marginLeft: "250px" }}
      >
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
                collections.map((item, index) => {
                  console.log("Image path:", item.image); // ✅ Debugging log

                  return (
                    <tr key={index}>
                      <td>
                        <img
                          src={`http://localhost:5000/uploads/${item.image}`}
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
                          className="btn btn-warning btn-sm"
                          onClick={() => handleEdit(item)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => handleDelete(item._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })
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

        {editMode && (
          <div className="modal show" style={{ display: "block" }}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Edit Collection</h5>
                  <button
                    type="button"
                    className="close"
                    onClick={() => setEditMode(false)}
                  >
                    
                  </button>
                </div>
                <div className="modal-body">
                  <div className="mb-3">
                    <label className="form-label">Choli Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={currentItem.choliName}
                      onChange={(e) => handleInputChange(e, "choliName")}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Choli Type</label>
                    <input
                      type="text"
                      className="form-control"
                      value={currentItem.choliType}
                      onChange={(e) => handleInputChange(e, "choliType")}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Topwear Fabric</label>
                    <input
                      type="text"
                      className="form-control"
                      value={currentItem.topwearFabric}
                      onChange={(e) => handleInputChange(e, "topwearFabric")}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Bottomwear Fabric</label>
                    <input
                      type="text"
                      className="form-control"
                      value={currentItem.bottomwearFabric}
                      onChange={(e) => handleInputChange(e, "bottomwearFabric")}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Dupatta Type</label>
                    <input
                      type="text"
                      className="form-control"
                      value={currentItem.dupattaType}
                      onChange={(e) => handleInputChange(e, "dupattaType")}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Set Type</label>
                    <input
                      type="text"
                      className="form-control"
                      value={currentItem.setType}
                      onChange={(e) => handleInputChange(e, "setType")}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Set Size</label>
                    <input
                      type="text"
                      className="form-control"
                      value={currentItem.setSize}
                      onChange={(e) => handleInputChange(e, "setSize")}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Rental Time</label>
                    <input
                      type="text"
                      className="form-control"
                      value={currentItem.rentalTime}
                      onChange={(e) => handleInputChange(e, "rentalTime")}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Rental Price</label>
                    <input
                      type="number"
                      className="form-control"
                      value={currentItem.rentalPrice}
                      onChange={(e) => handleInputChange(e, "rentalPrice")}
                    />
                  </div>
                  <div className="text-center">
                    <button className="btn btn-primary" onClick={handleSave}>
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageCollectionPage;
