import { useState } from 'react';
import axios from 'axios'; // Import axios for making API requests

const ReviewForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState('');

  const fieldStyle = {
    fontFamily: "'Playfair Display', serif"
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Validate inputs
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      try {
        // Send form data to backend
        const response = await axios.post('http://localhost:5000/api/reviews/submit-review', formData);

        if (response.status === 201) {
          setSubmissionStatus('Review submitted successfully!');
          setFormData({ name: '', email: '', message: '' });
        } else {
          setSubmissionStatus('Unexpected response from server.');
        }
      } catch (error) {
        console.error('Submit error:', error);
        setSubmissionStatus('Something went wrong. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="container mt-5">
      <h4 className="text-center mb-4" style={{
        backgroundColor: "#8B5D66",
        color: "white",
        padding: "10px",
        fontFamily: "'Playfair Display', serif",
      }}>
        YOUR REVIEW
      </h4>

      <div className="row">
        <div className="col-md-6">
          <h4 className="mb-3 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
            MEET US
          </h4>
          <div className="ratio ratio-4x3">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.6746959958656!2d70.78339287537899!3d22.3038948285876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959cb29d1f9a0d9%3A0x20c8dc21d98f7923!2sRajkot%2C%20Gujarat%2C%20India!5e0!3m2!1sen!2sus!4v1617915142418!5m2!1sen!2sus"
              title="Google Map - Rajkot, Gujarat"
              className="rounded"
              allowFullScreen=""
              loading="lazy"
            />
          </div>
        </div>

        <div className="col-md-6">
          <form onSubmit={handleSubmit} noValidate>
            {/* Name Field */}
            <div className="mb-3">
              <label htmlFor="name" className="form-label" style={fieldStyle}>
                ENTER YOUR NAME
              </label>
              <input
                type="text"
                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                style={fieldStyle}
              />
              {errors.name && <div className="invalid-feedback">{errors.name}</div>}
            </div>

            {/* Email Field */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label" style={fieldStyle}>
                ENTER YOUR EMAIL ADDRESS
              </label>
              <input
                type="email"
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                style={fieldStyle}
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>

            {/* Message Field */}
            <div className="mb-3">
              <label htmlFor="message" className="form-label" style={fieldStyle}>
                TYPE ANY MESSAGES...
              </label>
              <textarea
                className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type any messages..."
                required
                style={fieldStyle}
              />
              {errors.message && <div className="invalid-feedback">{errors.message}</div>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn btn-primary w-100"
              style={{
                backgroundColor: "#8B5D66",
                borderColor: "#8B5D66",
                fontFamily: "'Playfair Display', serif",
              }}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>
                  Submitting...
                </>
              ) : 'SEND'}
            </button>
          </form>

          {/* Status Message */}
          {submissionStatus && (
            <div className={`mt-3 alert ${
              submissionStatus.includes('successfully') ? 'alert-success' :
              isSubmitting ? 'alert-info' : 'alert-danger'
            }`}>
              {submissionStatus}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewForm;
