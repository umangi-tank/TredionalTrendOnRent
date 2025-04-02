import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, Form, Dropdown } from "react-bootstrap";
import { FaUserEdit } from "react-icons/fa";
import Sidebar from "./AdminSidebar"; // Import Sidebar component
import { useState } from "react";

const AdminProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [adminData, setAdminData] = useState({
    name: "UMANGI",
    email: "umangitank99@gmail.com",
    contact: "+91 91739 14174",
    role: "Admin",
    joined: "december 17, 2024",
    photo: "Images/AdminProfile.png"
  });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAdminData({ ...adminData, photo: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="d-flex" style={{ height: "100vh" }}>
      {/* Sidebar Component */}
      <div style={{ width: "250px", minHeight: "100vh", position: "fixed", top: 0, left: 0 }}>
        <Sidebar />
      </div>
      {/* Profile Content */}
      <div className="container mt-4" style={{ marginLeft: "260px", flex: 1 }}>
        <div className="position-relative text-end">
          <Dropdown align="end">
            <Dropdown.Toggle variant="light" id="dropdown-basic" style={{ border: "none", background: "none" }}>
              <img
                src={adminData.photo}
                alt="Admin"
                style={{ width: "40px", height: "40px", borderRadius: "50%" }}
              />
            </Dropdown.Toggle>
            <Dropdown.Menu className="text-dark">
              <Dropdown.Item href="/AdminProfile">View Profile</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="/Admin_login" className="text-danger">Sign Out</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <h4 className="text-center py-2" style={{ backgroundColor: "#9B767C", color: "white" }}>
          ADMIN PROFILE
        </h4>
        <Card className="p-4 shadow" style={{ backgroundColor: "#6b4f4f", color: "white" }}>
          {isEditing ? (
            <Form>
              <Form.Group className="mb-3 text-center">
                <Form.Label>Profile Picture</Form.Label>
                <Form.Control type="file" accept="image/*" onChange={handleImageChange} />
                <img src={adminData.photo} alt="Profile" className="rounded-circle mt-2" style={{ width: "100px", height: "100px" }} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  value={adminData.name}
                  onChange={(e) => setAdminData({ ...adminData, name: e.target.value })}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  value={adminData.email}
                  onChange={(e) => setAdminData({ ...adminData, email: e.target.value })}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Contact</Form.Label>
                <Form.Control
                  type="text"
                  value={adminData.contact}
                  onChange={(e) => setAdminData({ ...adminData, contact: e.target.value })}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Role</Form.Label>
                <Form.Control type="text" value={adminData.role} disabled />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Joined</Form.Label>
                <Form.Control type="text" value={adminData.joined} disabled />
              </Form.Group>
              <div className="d-flex justify-content-center mt-3">
                <Button variant="light" onClick={handleSaveClick}>
                  Save Changes
                </Button>
              </div>
            </Form>
          ) : (
            <>
              <div className="text-center">
                <img
                  src={adminData.photo}
                  alt="Admin Avatar"
                  className="rounded-circle mb-3"
                  style={{ width: "120px", height: "120px" }}
                />
                <h4>{adminData.name}</h4>
                <p>{adminData.email}</p>
              </div>
              <hr style={{ backgroundColor: "white" }} />
              <div>
                <p><strong>Contact:</strong> {adminData.contact}</p>
                <p><strong>Role:</strong> {adminData.role}</p>
                <p><strong>Joined:</strong> {adminData.joined}</p>
              </div>
              <div className="d-flex justify-content-center mt-3">
                <Button variant="light" className="d-flex align-items-center" onClick={handleEditClick}>
                  <FaUserEdit className="me-2" /> Edit Profile
                </Button>
              </div>
            </>
          )}
        </Card>
      </div>
    </div>
  );
};

export default AdminProfile;
