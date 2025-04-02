const RecentlyAdded = () => {
    return (
      <div className="container mt-5">
        <h2 className="text-center mb-4">RECENTLY ADDED</h2>
        <div id="designCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row">
                <div className="col-md-4">
                  <img src="public/Images/re-1.jpg" className="d-block w-100" alt="Design 1" style={{ objectFit: 'cover', height: '400px', width: '100%' }} />
                </div>
                <div className="col-md-4">
                  <img src="public/Images/re-2.jpg" className="d-block w-100" alt="Design 2" style={{ objectFit: 'cover', height: '400px', width: '100%' }} />
                </div>
                <div className="col-md-4">
                  <img src="public/Images/re-3.jpg" className="d-block w-100" alt="Design 3" style={{ objectFit: 'cover', height: '400px', width: '100%' }} />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-md-4">
                  <img src="public/Images/re-5.jpg" className="d-block w-100" alt="Design 5" style={{ objectFit: 'cover', height: '400px', width: '100%' }} />
                </div>
                <div className="col-md-4">
                  <img src="public/Images/re-6.jpg" className="d-block w-100" alt="Design 6" style={{ objectFit: 'cover', height: '400px', width: '100%' }} />
                </div>
                <div className="col-md-4">
                  <img src="public/Images/re-4.jpg" className="d-block w-100" alt="Design 7" style={{ objectFit: 'cover', height: '400px', width: '100%' }} />
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#designCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#designCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    );
  };
  
  export default RecentlyAdded;
  