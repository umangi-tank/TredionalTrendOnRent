import "bootstrap/dist/css/bootstrap.min.css";
const OurStory = () => {
  return (
    <div
      className="container text-center py-5"
      style={{ fontFamily: "'Playfair Display', serif" }}
    >
      <div className="row align-items-center">
        {/* Left Image Section */}
        <div className="col-md-6 mb-4 mb-md-0 d-flex justify-content-center">
          <div
            className="shadow rounded overflow-hidden"
            style={{
              width: "300px",
              height: "300px",
            }}
          >
            <img
              src="public/Images/our_story.jpg"
              alt="Traditional Grace"
              className="img-fluid h-100 w-100"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>

        {/* Right Content Section */}
        <div className="col-md-6">
          <h2
            className="text-center mb-4"
            style={{ color: "#541222" }}
          >
            OUR STORY
          </h2>
          <p className="text-justify normal-text">
            At Choli Collection, we celebrate the timeless elegance and artistry
            of traditional attire while embracing modern trends. Our collection
            features intricately crafted cholis, designed with a deep reverence
            for cultural heritage and an unwavering commitment to
            sustainability.
          </p>
          {/* Explore More Button */}
          <a
                  href="/OurStory_page"
                  className="btn mt-auto"
                  style={{ backgroundColor: "#541222", borderColor: "#541222", color: "#fff" }}
                >
                  VIEW MORE 
                </a>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
