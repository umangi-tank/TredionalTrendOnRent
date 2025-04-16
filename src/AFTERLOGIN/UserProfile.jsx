import { useState } from "react";
import { FaSignOutAlt, FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const navigate = useNavigate();
  const [editMode, setEditMode] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [profile, setProfile] = useState({
    name: "umangi tank",  // Default name
    email: "umangitank99@gmail.com",  // Default email
    mobile: "9173914174",  // Default mobile number
    password: "123012301230",  // Default password
  });

  const handleChange = (e, field) => {
    setProfile({ ...profile, [field]: e.target.value });
  };

  const handleEditToggle = () => {
    if (editMode) {
      // Simulate saving the profile and show an alert
      alert("Profile updated successfully!");
    }
    setEditMode(!editMode);
  };

  const handleSignOut = () => {
    localStorage.removeItem("token"); // Remove token upon sign-out
    alert("Signing Out...");
    navigate("/"); // Redirect to login or home page
  };

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center">
        <h4
          className="text-center py-2 flex-grow-1"
          style={{
            backgroundColor: "#9B767C",
            color: "white",
            position: "relative",
          }}
        >
          USER PROFILE HISTORY
          <FaSignOutAlt
            onClick={handleSignOut}
            style={{ position: "absolute", right: "15px", cursor: "pointer" }}
          />
        </h4>
      </div>

      <div className="card p-4 border border-dark shadow-lg mt-3">
        <div className="mt-4">
          {[ 
            { label: "Name", field: "name" },
            { label: "Email", field: "email" },
            { label: "Mobile Number", field: "mobile" },
          ].map(({ label, field }, index) => (
            <div key={index} className="mb-3">
              <label className="form-label fw-bold">{label}</label>
              <input
                type="text"
                className="form-control border border-dark"
                value={profile[field]}
                onChange={(e) => handleChange(e, field)}
                disabled={!editMode}
                aria-label={label}
              />
            </div>
          ))}

          <div className="mb-3">
            <label className="form-label fw-bold">Password</label>
            <div className="input-group">
              <input
                type={showPassword ? "text" : "password"}
                className="form-control border border-dark"
                value={profile.password}
                onChange={(e) => handleChange(e, "password")}
                disabled={!editMode}
                aria-label="Password"
              />
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <div className="text-center">
            {editMode ? (
              <button
                className="btn"
                style={{ backgroundColor: "#541222", color: "white" }}
                onClick={handleEditToggle}
              >
                Save Changes
              </button>
            ) : (
              <button
                className="btn"
                style={{ backgroundColor: "#541222", color: "white" }}
                onClick={handleEditToggle}
              >
                Edit Profile
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
