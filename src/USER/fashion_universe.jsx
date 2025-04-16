import { useState } from "react";

const FashionUniverse = () => {
  const [userNumber, setUserNumber] = useState("");
  const [userMessage, setUserMessage] = useState("");

  const handleChatClick = async () => {
    const formattedNumber = userNumber.replace(/\D/g, ""); // Keep only digits

    if (formattedNumber.length < 10) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    if (userMessage.trim() === "") {
      alert("Please enter your message.");
      return;
    }

    // Send data to backend
    try {
      const response = await fetch("http://localhost:5000/api/message/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mobileNumber: formattedNumber,
          message: userMessage,
        }),
      });

      const data = await response.json();

      if (data.success) {
        alert("Sent successfully ✅");
        setUserNumber("");
        setUserMessage("");
      } else {
        alert("Something went wrong.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to send. Please try again later.");
    }
  };

  return (
    <div className="container text-center mt-5">
      <p className="fs-5">
        Welcome to our <strong>TRADITIONAL TREND OF RENT</strong>. Good to see you in our
        Fashion World. We also support C2C. If you want to give a product on rent,
        just let us know. We’ll list your product on our site and handle everything as per T&C.
      </p>

      <div className="mt-4" style={{ maxWidth: "400px", margin: "0 auto" }}>
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Enter your mobile number"
          value={userNumber}
          onChange={(e) => setUserNumber(e.target.value)}
        />
        <textarea
          className="form-control mb-2"
          placeholder="Enter your message"
          rows={3}
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
        ></textarea>
        <button
          className="btn btn-lg"
          style={{ backgroundColor: "#541222", color: "#fff", border: "none" }}
          onClick={handleChatClick}
        >
          CHAT ON OWNER
        </button>
      </div>
    </div>
  );
};

export default FashionUniverse;
