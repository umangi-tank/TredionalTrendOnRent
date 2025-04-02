const ReviewForm = () => {
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
          YOUR REVIEW
        </h2>
        <div className="row">
          <div className="col-md-6">
            <h4
              className="mb-3 text-center"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              MEET US
            </h4>
            <div className="ratio ratio-4x3">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.6746959958656!2d70.78339287537899!3d22.3038948285876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959cb29d1f9a0d9%3A0x20c8dc21d98f7923!2sRajkot%2C%20Gujarat%2C%20India!5e0!3m2!1sen!2sus!4v1617915142418!5m2!1sen!2sus"
                title="Google Map - Rajkot, Gujarat"
                className="rounded"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
          <div className="col-md-6">
            <form>
              <div className="mb-3">
                <label
                  htmlFor="name"
                  className="form-label"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  ENTER YOUR NAME
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "#333",
                    backgroundColor: "white",
                  }}
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="email"
                  className="form-label"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  ENTER YOUR EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "#333",
                    backgroundColor: "white",
                  }}
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="message"
                  className="form-label"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  TYPE ANY MESSAGES...
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="4"
                  placeholder="Type any messages..."
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "#333",
                    backgroundColor: "white",
                  }}
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-primary w-100"
                style={{
                  backgroundColor: "#8B5D66",
                  borderColor: "#8B5D66",
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                SEND
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  };
  
  export default ReviewForm;
  