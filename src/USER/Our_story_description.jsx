const OurStory_description = () => {
    return (
      <div className="container mt-5">
        <h2
          className="text-center mb-4"
          style={{
            backgroundColor: "#8B5D66",
            color: "white",
            padding: "10px",
            fontFamily: "'Playfair Display', serif",
          }}
        >
          OUR STORY
        </h2>
        <div className="container my-5">
      <div className="text-center">
        <h1 className="fw-bold">Experience the Elegance of Ethnic Wear Without the Expense.</h1>
      </div>

      <div className="row mt-4">
        <div className="col-md-5 text-center">
          <img
            src="public\Images\about.jpg"// Replace with the appropriate image link
            alt="Ethnic Wear"
            className="img-fluid rounded shadow"
          />
        </div>

        <div className="col-md-7">
          <p className="mt-2">
            Welcome to <strong>Traditional Trend of Rent</strong>, your ultimate destination for renting exquisite cholis that blend tradition with modernity. We believe that every occasion deserves a touch of elegance, and what better way to achieve it than by adorning yourself with beautiful, high-quality traditional attire?
          </p>

          <p>
            Our mission is to make luxurious ethnic wear accessible and affordable to everyone. Whether it’s a wedding, a festive celebration, or a cultural event, we offer a wide range of meticulously crafted cholis to suit every style and occasion. From intricate bridal designs to simple yet elegant casual wear, we have something special for everyone.
          </p>
        </div>
      </div>
    </div>
       
            </div>
    );
}
  export default OurStory_description;
  