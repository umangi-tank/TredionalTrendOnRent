import { useState } from "react";

const BookingCollection = () => {
  const [formData, setFormData] = useState({
    choliName: "",
    choliTypes: "",
    topwearFabric: "",
    bottomwearFabric: "",
    dupattaType: "",
    rentalPrice: "",
    setType: "",
    duration: "",
    setSize: "",
    file: null,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
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
      alert("Booking successfully!");
      console.log("Form Data:", formData);
      setFormData({
        choliName: "",
        choliTypes: "",
        topwearFabric: "",
        bottomwearFabric: "",
        dupattaType: "",
        rentalPrice: "",
        setType: "",
        duration: "",
        setSize: "",
        file: null,
      });
      setErrors({});
    }
  };

  return (
    <div className="container py-5">
      <h4 className="text-center py-2" style={{ backgroundColor: "#541222", color: "white" }}>
        BOOKING COLLECTION
      </h4>
      <form className="row g-3" onSubmit={handleSubmit}>
        {[
          { name: "choliName", placeholder: "Choli Name" },
          { name: "choliTypes", placeholder: "Choli Types" },
          { name: "topwearFabric", placeholder: "Topwear Fabric Name" },
          { name: "bottomwearFabric", placeholder: "Bottomwear Fabric Name" },
          { name: "dupattaType", placeholder: "Dupatta Type Name" },
          { name: "rentalPrice", placeholder: "Set Rental Prices" },
          { name: "setType", placeholder: "Set Type" },
          { name: "duration", placeholder: "How Much Time" },
          { name: "setSize", placeholder: "Set Size" },
        ].map(({ name, placeholder }, index) => (
          <div className="col-md-12" key={index}>
            <input
              type="text"
              name={name}
              value={formData[name]}
              onChange={handleChange}
              className={`form-control border ${errors[name] ? "border-danger" : "border-dark"}`}
              placeholder={`Enter ${placeholder}`}
            />
            {errors[name] && <div className="text-danger">{errors[name]}</div>}
          </div>
        ))}

        <div className="col-md-12">
          <input
            type="file"
            className={`form-control border ${errors.file ? "border-danger" : "border-dark"}`}
            onChange={handleFileChange}
          />
          {errors.file && <div className="text-danger">{errors.file}</div>}
        </div>

        <div className="col-md-12 text-center">
          <button type="submit" className="btn" style={{ backgroundColor: "#541222", color: "white" }}>
            Book Collection
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingCollection;