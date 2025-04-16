import { useState } from "react";
import axios from "axios";

const BookingCollection = () => {
  const [formData, setFormData] = useState({
    choliName: "",
    date: "",
    duration: "",
    startingHour: "",
    contactNumber: "",
    yourName: "",
    emailAddress: "",
    yourAddress: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        await axios.post("http://localhost:5000/api/book", formData);
        alert("Booking submitted successfully!");
        setFormData({
          choliName: "",
          date: "",
          duration: "",
          startingHour: "",
          contactNumber: "",
          yourName: "",
          emailAddress: "",
          yourAddress: "",
        });
        setErrors({});
      } catch (error) {
        alert("Failed to submit booking!");
        console.error(error);
      }
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
          { name: "date", placeholder: "Booking Date", type: "date" },
          { name: "duration", placeholder: "How Much Time" },
          { name: "startingHour", placeholder: "Starting Hour", type: "time" },
          { name: "contactNumber", placeholder: "Contact Number" },
          { name: "yourName", placeholder: "Your Name" },
          { name: "emailAddress", placeholder: "Email Address", type: "email" },
          { name: "yourAddress", placeholder: "Your Address" },
        ].map(({ name, placeholder, type = "text" }, index) => (
          <div className="col-md-12" key={index}>
            <input
              type={type}
              name={name}
              value={formData[name]}
              onChange={handleChange}
              className={`form-control border ${errors[name] ? "border-danger" : "border-dark"}`}
              placeholder={`Enter ${placeholder}`}
            />
            {errors[name] && <div className="text-danger">{errors[name]}</div>}
          </div>
        ))}

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
