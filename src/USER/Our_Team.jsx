const Our_Team = () => {
 
  return (
    <div className="container mt-2">
      <h2 className="text-center mb-2">OUR TEAM</h2>
      <div className="overflow-auto d-flex" style={{ whiteSpace: "nowrap" }}>
        <div className="p-5 text-center">

          <img src="public\Images\team-1.jpg" alt="Item 1" className="img-fluid" style={{ maxWidth: "200px" }} />
          <h5 className="mx-3" style={{ fontFamily: "Playfair Display, serif" }}>ADMINISTRATOR : ISHA DAVDA</h5>
          <p style={{ fontFamily: "Roboto, sans-serif" }}>Exclusive Rental Choli Collection –<br />
             Style for Every Occasion!</p>
        </div>
        <div className="p-5 text-center">
       
          <img src="public\Images\team-2.png" alt="Item 2" className="img-fluid" style={{ maxWidth: "200px" }} />
          <h5 className="mx-3" style={{ fontFamily: "Playfair Display, serif" }}>OWNER : JAY PARMAR</h5>
          <p style={{ fontFamily: "Roboto, sans-serif" }}>Exclusive Rental Choli Collection –<br />
             Style for Every Occasion!</p>
        </div>
        <div className="p-5 text-center">
          <img src="public\Images\team-3.jpg" alt="Item 3" className="img-fluid" style={{ maxWidth: "200px" }} />
          <h5 className="mx-3" style={{ fontFamily: "Playfair Display, serif" }}>DESIGNER : UMANGI TANK</h5>
          <p style={{ fontFamily: "Roboto, sans-serif" }}>Exclusive Rental Choli Collection –<br />
           Style for Every Occasion!</p>

        </div>
      </div>
    </div>
  );
};

export default Our_Team;
