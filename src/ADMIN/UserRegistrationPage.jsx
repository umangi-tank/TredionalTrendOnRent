import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import Sidebar from "./AdminSidebar";

const UserRegistrationPage = () => {
  const [users, setUsers] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/users"); // Replace with your backend URL if deployed
        const data = await res.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="container-fluid p-5" style={{ fontFamily: "Playfair Display, serif", marginLeft: "250px" }}>
        {/* Header Section */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-bold mb-0" style={{ color: "#541222" }}>USER REGISTRATION</h2>

          {/* Admin Profile */}
          <div className="position-relative">
            <img
              src="public/Images/admin_logo.png"
              alt="Admin"
              style={{ width: "40px", height: "40px", borderRadius: "50%", cursor: "pointer" }}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            />
            {dropdownOpen && (
              <div
                className="bg-white text-dark rounded shadow mt-2 p-2 position-absolute"
                style={{
                  right: "0px",
                  top: "50px",
                  fontFamily: "Playfair Display, serif",
                  width: "150px",
                  zIndex: "1000",
                }}
              >
                <a href="/AdminProfile" className="d-block text-decoration-none text-dark p-2">View Profile</a>
                <hr className="my-2" />
                <a href="/Admin_login" className="d-block text-decoration-none text-danger p-2">Sign Out</a>
              </div>
            )}
          </div>
        </div>

        {/* Table Section */}
        <div className="table-responsive">
          <table className="table table-borderless text-center" style={{ backgroundColor: "#f5efe1", borderRadius: "10px" }}>
            <thead className="text-white" style={{ backgroundColor: "#541222" }}>
              <tr>
                <th className="p-3">USERNAME</th>
                <th className="p-3">EMAIL ADDRESS</th>
                <th className="p-3">MOBILE NO.</th>
                <th className="p-3">PASSWORD</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index} style={{ borderBottom: "2px solid #541222" }}>
                  <td className="fw-bold p-3">{user.username}</td>
                  <td className="p-3">{user.email}</td>
                  <td className="p-3">{user.phone}</td>
                  <td className="p-3">
                    {user.password} <i className="bi bi-eye-slash" style={{ cursor: "pointer" }}></i>
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

export default UserRegistrationPage;
