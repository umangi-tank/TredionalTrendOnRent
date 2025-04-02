
  import { Link } from "react-router-dom";

  const Sidebar = () => {
    return (
      <div
        className="text-white p-3"
        style={{
          width: "250px",
          fontFamily: "Playfair Display, serif",
          backgroundColor: "#541222",
          position: "fixed",
          height: "100vh",
          overflowY: "auto",
        }}
      >
        <div className="text-center mb-3">
          <img src="/Images/logo.png" alt="Logo" style={{ width: "80px" }} />
        </div>

        <ul className="nav flex-column">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/Admin_dashboard_page">
              DASHBOARD
            </Link>
            <Link className="nav-link text-white" to="/AddCollection_page">
              ADD COLLECTION
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/CustomerBookingPage">
              CUSTOMER BOOKING
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/UserRegistrationPage">
              USER REGISTRATION
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/ManageCollectionPage">
              MANAGE COLLECTION
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/PaymentHistoryPage">
              PAYMENT HISTORY
            </Link>
          </li>
        </ul>
      </div>
    );
  };

  export default Sidebar;
