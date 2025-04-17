import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./AdminSidebar";

const PaymentHistoryPage = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="d-flex">
      {/* Sidebar Fixed */}
      <div
        style={{
          width: "250px",
          height: "100vh",
          position: "fixed",
          backgroundColor: "#541222",
        }}
      >
        <Sidebar />
      </div>

      {/* Main Content */}
      <div
        className="container-fluid p-4"
        style={{ marginLeft: "250px", width: "calc(100% - 250px)" }}
      >
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-bold mb-0" style={{ color: "#541222" }}>
            PAYMENT HISTORY
          </h2>

          {/* Admin Profile with Dropdown */}
          <div className="position-relative">
            <img
              src="public\\Images\\admin_logo.png"
              alt="Admin"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                cursor: "pointer",
              }}
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

        {/* Payment History Table */}
        <div
          className="rounded p-4 shadow"
          style={{ backgroundColor: "#f4e9d8" }}
        >
          <div
            className="table-responsive"
            style={{ maxHeight: "400px", overflowY: "auto" }}
          >
            <table className="table table-bordered text-center">
              <thead
                style={{
                  backgroundColor: "#661b33",
                  color: "white",
                  fontFamily: "Playfair Display, serif",
                }}
              >
                <tr>
                  <th>NAME</th>
                  <th>ADDRESS</th>
                  <th>CONTACT NUMBER</th>
                  <th>AMOUNT</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Umangi</td>
                  <td>khothariya main road, rajkot</td>
                  <td>+91 91739 14174</td>
                  <td>₹5000</td>
                </tr>
                <tr>
                  <td>isha davda</td>
                  <td>Ahemdabad</td>
                  <td>+91 98765 43210</td>
                  <td>₹1500</td>
                </tr>
                <tr>
                  <td>jay parmar</td>
                  <td>78 Nehru Road, Pune</td>
                  <td>+91 91234 56789</td>
                  <td>3000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistoryPage;
