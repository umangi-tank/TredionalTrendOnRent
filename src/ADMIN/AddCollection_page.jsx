import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Sidebar from "./AdminSidebar";

const AddCollection_page = () => {
  const [formData, setFormData] = useState({
    choliName: "",
    choliType: "",
    topwearFabric: "",
    bottomwearFabric: "",
    dupattaType: "",
    rentalPrice: "",
    setType: "",
    rentalTime: "",
    setSize: "",
    image: null,
  });

  const [errors, setErrors] = useState({});
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const validateForm = () => {
    let newErrors = {};
    
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = "This field is required";
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form Submitted Successfully!");
      // Proceed with form submission (e.g., API call)
    }
  };

  return (
    <div className="d-flex">
      {/* ✅ Sidebar Component */}
      <Sidebar />

      {/* Main Content */}
      <div className="container-fluid p-5" style={{ fontFamily: "Playfair Display, serif", marginLeft: "250px" }}>
        {/* Top Navbar */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-bold mb-0" style={{ color: "#541222" }}>ADD NEW COLLECTION</h2>

          <div className="position-relative">
            <img
              src="public/images/admin_logo.png"
              alt="Admin"
              style={{ width: "40px", height: "40px", borderRadius: "50%", cursor: "pointer" }}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            />
            {dropdownOpen && (
              <div className="bg-white text-dark rounded shadow mt-2 p-2 position-absolute" style={{ right: "0px", top: "50px", width: "150px", zIndex: "1000" }}>
                <a href="/AdminProfile" className="d-block text-decoration-none text-dark p-2">View Profile</a>
                <hr className="my-2" />
                <a href="/Admin_login" className="d-block text-decoration-none text-danger p-2">Sign Out</a>
              </div>
            )}
          </div>
        </div>

        {/* Main Form */}
        <div className="row justify-content-center">
          <div className="col-md-8">
            <form onSubmit={handleSubmit}>
              {[
                { label: "Choli Name", name: "choliName" },
                { label: "Choli Type", name: "choliType" },
                { label: "Topwear Fabric Name", name: "topwearFabric" },
                { label: "Bottomwear Fabric Name", name: "bottomwearFabric" },
                { label: "Dupatta Type", name: "dupattaType" },
                { label: "Set Rental Prices", name: "rentalPrice" },
                { label: "Set Type", name: "setType" },
                { label: "Rental Time", name: "rentalTime" },
                { label: "Set Size", name: "setSize" },
              ].map(({ label, name }, index) => (
                <div className="mb-3" key={index}>
                  <input
                    type="text"
                    name={name}
                    className={`form-control border border-2 ${errors[name] ? "border-danger" : "border-secondary"}`}
                    placeholder={`Enter ${label}`}
                    onChange={handleChange}
                  />
                  {errors[name] && <small className="text-danger">{errors[name]}</small>}
                </div>
              ))}

              {/* File Upload */}
              <div className="mb-3">
                <label className="form-label fw-bold">CHOOSE CHOLI IMAGE</label>
                <input
                  type="file"
                  name="image"
                  className={`form-control ${errors.image ? "border-danger" : ""}`}
                  onChange={handleChange}
                />
                {errors.image && <small className="text-danger">{errors.image}</small>}
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button type="submit" className="btn fw-bold text-white px-4 py-2" style={{ backgroundColor: "#541222" }}>
                  ADD COLLECTION
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCollection_page;
