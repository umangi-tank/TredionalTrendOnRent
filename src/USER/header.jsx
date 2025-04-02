import 'bootstrap-icons/font/bootstrap-icons.css';

const Header = () => {
  const themeColor = "#541222";

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container">
        
        <a className="navbar-brand" href="#" style={{ fontFamily: "Playfair Display, serif" }}>
          <img
            src="public/Images/logo.png"
            alt="Logo"
            style={{ height: "60px" }}
          />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a
                className="nav-link"
                href="/"
                style={{ color: themeColor, fontFamily: "Playfair Display, serif" }}
              >
                HOME
              </a>
            </li>
            <li className="nav-item dropdown">
            <a
                className="nav-link"
                href="/WeDellinPage"
                style={{ color: themeColor, fontFamily: "Playfair Display, serif" }}
              >
                WE DELL IN
              </a>
              
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/OurStory_page" style={{ color: themeColor, fontFamily: "Playfair Display, serif" }}>
                OUR STORY
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Our_team_page" style={{ color: themeColor, fontFamily: "Playfair Display, serif" }}>
                OUR TEAM
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Contact_us" style={{ color: themeColor, fontFamily: "Playfair Display, serif" }}>
                CONTACT US
              </a>
            </li>
          </ul>

          {/* Profile Icon with Dropdown */}
          <div className="dropdown ms-lg-3">
            <a
              href="#"
              className="d-flex align-items-center"
              id="profileDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="bi bi-person-circle" style={{ color: themeColor, fontSize: "1.5rem" }}></i>
            </a>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="profileDropdown">
              <li><a className="dropdown-item" href="/Login_page">User Login</a></li>
              <li><a className="dropdown-item" href="/Admin_login">Admin Login</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
