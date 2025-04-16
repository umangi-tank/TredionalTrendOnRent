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

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.choliName) newErrors.choliName = "Choli Name is required";
    if (!formData.choliType) newErrors.choliType = "Choli Type is required";
    if (!formData.topwearFabric) newErrors.topwearFabric = "Topwear Fabric is required";
    if (!formData.bottomwearFabric) newErrors.bottomwearFabric = "Bottomwear Fabric is required";
    if (!formData.dupattaType) newErrors.dupattaType = "Dupatta Type is required";
    if (!formData.rentalPrice) newErrors.rentalPrice = "Rental Price is required";
    if (!formData.setType) newErrors.setType = "Set Type is required";
    if (!formData.rentalTime) newErrors.rentalTime = "Rental Time is required";
    if (!formData.setSize) newErrors.setSize = "Set Size is required";
    if (!formData.image) newErrors.image = "Image is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      const data = new FormData();
      data.append("choliName", formData.choliName);
      data.append("choliType", formData.choliType);
      data.append("topwearFabric", formData.topwearFabric);
      data.append("bottomwearFabric", formData.bottomwearFabric);
      data.append("dupattaType", formData.dupattaType);
      data.append("rentalPrice", formData.rentalPrice);
      data.append("setType", formData.setType);
      data.append("rentalTime", formData.rentalTime);
      data.append("setSize", formData.setSize);
      data.append("image", formData.image); // file

      try {
        const response = await axios.post(
          "http://localhost:5000/api/collections/add-collection",
          data
        );

        if (response.data.success) {
          alert("Collection added successfully!");

          // Reset form
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
          document.querySelector('input[type="file"]').value = "";
        } else {
          alert("Failed to add collection.");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("Error submitting form");
      }
    }
  };

  return (
    <div className="d-flex">
      {/* Sidebar Component */}
      <Sidebar />

      {/* Main Content */}
      <div className="container-fluid p-5" style={{ fontFamily: "Playfair Display, serif", marginLeft: "250px" }}>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-bold mb-0" style={{ color: "#541222" }}>ADD NEW COLLECTION</h2>
        </div>

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

