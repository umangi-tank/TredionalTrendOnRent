function Hero_section() {
    return (
      <div>
         <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active" data-bs-interval="10000">
        <img src="public\Images\cl-1.png" className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item" data-bs-interval="2000">
        <img src="public\Images\cl-2.png" className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src="public\Images\cl-3.png" className="d-block w-100" alt="..."/>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
      </div>
    )
  }
  export default Hero_section
  