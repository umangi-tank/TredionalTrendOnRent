import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSignOutAlt, FaEye, FaEyeSlash } from "react-icons/fa";

const UserProfile = () => {
  const navigate = useNavigate();
  const [editMode, setEditMode] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [profile, setProfile] = useState({
    name: "Umang Itank",
    role: "User",
    email: "umangitank99@gmail.com",
    mobile: "9173914174",
    photo: null,
    password: "123456",
  });

  const handleChange = (e, field) => {
    setProfile({ ...profile, [field]: e.target.value });
  };

  const handleFileChange = (e) => {
    setProfile({ ...profile, photo: URL.createObjectURL(e.target.files[0]) });
  };

  const handleEditToggle = () => {
    if (!editMode) {
      setProfile({ name: "", email: "", mobile: "", password: "", photo: null });
    }
    setEditMode(!editMode);
  };

  const handleSignOut = () => {
    alert("Signing Out...");
    navigate("/");
  };

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center">
        <h4 className="text-center py-2 flex-grow-1" style={{ backgroundColor: "#9B767C", color: "white", position: "relative" }}>
          USER PROFILE HISTORY
          <FaSignOutAlt 
            onClick={handleSignOut}
            style={{ position: "absolute", right: "15px", cursor: "pointer" }} 
          />
        </h4>
      </div>

      <div className="card p-4 border border-dark shadow-lg mt-3">
        <div className="text-center">
          <img
            src={profile.photo || "Images/UserProfile.jpeg"}
            alt="Profile"
            className="rounded-circle border border-dark"
            width="150"
            height="150"
          />
          {editMode && (
            <div className="mt-3">
              <input type="file" className="form-control border border-dark" onChange={handleFileChange} />
            </div>
          )}
        </div>

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
              />
              <button className="btn btn-outline-secondary" type="button" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>
          <div className="text-center">
            {editMode ? (
              <button className="btn" style={{ backgroundColor: "#541222", color: "white" }} onClick={handleEditToggle}>
                Save Changes
              </button>
            ) : (
              <button className="btn" style={{ backgroundColor: "#541222", color: "white" }} onClick={handleEditToggle}>
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