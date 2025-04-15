import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import axios from "axios";
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
    console.log("Form validation errors:", newErrors);  // Debugging validation errors
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();  // Prevent form reload

    console.log("Submitting form..."); // Debugging form submission
    console.log("Form Data Before Submission:", formData); // Log the data before submitting

    if (validateForm()) {
      const data = new FormData();
      for (const key in formData) {
        data.append(key, formData[key]);
      }

      try {
        console.log("Sending API request...");
        const response = await axios.post("http://localhost:5000/api/collections/add-collection", data);
        console.log("API Response:", response); // Log the response from the API

        if (response.data.success) {
          alert("Collection added successfully!");
        } else {
          alert("Failed to add collection. Please try again.");
        }

        // Reset form after submission
        setFormData({
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

        // Optionally reset file input
        document.querySelector('input[type="file"]').value = "";
      } catch (err) {
        console.error("Error during form submission:", err);
        alert("Failed to submit collection. Please try again.");
      }
    } else {
      console.log("Form validation failed:", errors);  // Log the errors if validation failed
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
                    value={formData[name]}
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
