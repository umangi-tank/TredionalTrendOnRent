import 'bootstrap-icons/font/bootstrap-icons.css';

const AHeader = () => {
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
                href="/AfterDashboardPage"
                style={{ color: themeColor, fontFamily: "Playfair Display, serif" }}
              >
                HOME
              </a>
            </li>
            
            <li className="nav-item">
              <a
                className="nav-link"
                href="/AWeDellInPage"
                style={{ color: themeColor, fontFamily: "Playfair Display, serif" }}
              >
                WE DELL IN
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" 
              href="/MyBookingPage" 
              style={{ color: themeColor, fontFamily: "Playfair Display, serif" }}>
                MY BOOKING
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link"
               href="UserProfilePage" 
               style={{ color: themeColor, fontFamily: "Playfair Display, serif" }}>
                PROFILE SETTING
              </a>
            </li>
          </ul>

          {/* Wishlist Icon */}
          <a href="/WhishListPage" 
          className="nav-link" 
          style={{ color: themeColor, fontSize: "20px" }}>
            <i className="bi bi-heart"></i>
          </a>
          
        </div>
      </div>
    </nav>
  );
};

export default AHeader;
