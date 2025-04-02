import "bootstrap/dist/css/bootstrap.min.css";

const Testimonials = () => {
  const testimonials = [
    {
      name: "ISHA DAVDA",
      text: "Welcome to Traditional Trend of Rent, your ultimate destination for renting exquisite cholis that blend tradition with modernity. We believe that every occasion deserves a touch of elegance, and what better way to achieve it than by adorning yourself with beautiful, high-quality traditional attire?",
      image: "/Images/team-1.jpg",
    },
    {
        name: "JAY PARMAR",
        text: "Welcome to Traditional Trend of Rent, your ultimate destination for renting exquisite cholis that blend tradition with modernity. We believe that every occasion deserves a touch of elegance, and what better way to achieve it than by adorning yourself with beautiful, high-quality traditional attire?",
        image: "/Images/team-2.png",
      },
    {
      name: "UMANGI TANK",
      text: "Welcome to Traditional Trend of Rent, your ultimate destination for renting exquisite cholis that blend tradition with modernity. We believe that every occasion deserves a touch of elegance, and what better way to achieve it than by adorning yourself with beautiful, high-quality traditional attire?",
      image: "/Images/team-3.jpg",
    },
  ];

  return (
    <div className="container my-5">
        <h2
          className="text-center mb-4"
          style={{
            backgroundColor: "#8B5D66",
            color: "white",
            padding: "10px",
            fontFamily: "'Playfair Display', serif",
          }}
        >
          OUR TEAM 
        </h2>
      <div className="row g-4">
        {testimonials.map((testimonial, index) => (
          <div className="col-md-4 col-sm-6 col-12" key={index}>
            <div className="card border-0 text-center p-3">
              <img
                src={testimonial.image}
                className="card-img-top img-fluid mx-auto"
                alt="testimonial"
                style={{ maxWidth: "120px", borderRadius: "50%" }}
              />
              <div className="card-body">
                <h5 className="fw-bold text-uppercase" style={{ color: "#541222" }}>
                  {testimonial.name}
                </h5>
                <p className="text-muted">{testimonial.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
