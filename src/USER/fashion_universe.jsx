const FashionUniverse = () => {
  return (
    <div className="container text-center mt-5">
      <p className="fs-5">
        Welcome to our <strong>TREDITIONAL TREND OF RENT</strong>. Good To See You On Our
        Fashion World. We are certainly wanting to know you that we do also
        C2C. If you want to give a particular product on Rent Then just let us
        know through the WhatsApp number. After that we will put in our website
        and give customer to rent. We will take your product care That will be
        in our T&C. We will send you T&C or yours also.
      </p>
      <button
        className="btn btn-lg mt-3"
        style={{ backgroundColor: "#541222", color: "#fff", border: "none" }}
        onClick={() =>
          window.open(
            "https://wa.me/your-number",
            "_blank"
          )
        }
      >
        CHAT ON WHATSAPP
      </button>
    </div>
  );
};

export default FashionUniverse;
