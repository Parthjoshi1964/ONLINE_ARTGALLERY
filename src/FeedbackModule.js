import React, { useState } from "react";
import "./FeedbackForm.css"; // Import CSS file

function FeedbackForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState("");
  const [feedback, setFeedback] = useState("");
  const [selectedArtist, setSelectedArtist] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleArtistChange = (event) => {
    setSelectedArtist(event.target.value);
  };

  const handleSubmitFeedback = () => {
    if (name.trim() !== "" && email.trim() !== "" && rating.trim() !== "" && feedback.trim() !== "" && selectedArtist.trim() !== "") {
      setSubmitted(true);
    }
  };

  return (
    <div className="feedback-form">
      <h2>Feedback Form</h2>
      <table>
        <tbody>
          <tr>
            <td><label>Name:</label></td>
            <td><input type="text" value={name} onChange={handleNameChange} placeholder="Enter your name" /></td>
          </tr>
          <tr>
            <td><label>Email:</label></td>
            <td><input type="email" value={email} onChange={handleEmailChange} placeholder="Enter your email" /></td>
          </tr>
          <tr>
            <td><label>Rating:</label></td>
            <td>
              <select value={rating} onChange={handleRatingChange}>
                <option value="">Select Rating</option>
                <option value="1">1 Star</option>
                <option value="2">2 Stars</option>
                <option value="3">3 Stars</option>
                <option value="4">4 Stars</option>
                <option value="5">5 Stars</option>
              </select>
            </td>
          </tr>
          <tr>
            <td><label>Artist:</label></td>
            <td>
              <label>
                <input type="radio" value="Leonardo da Vinci" checked={selectedArtist === "Leonardo da Vinci"} onChange={handleArtistChange} />
                Leonardo da Vinci
              </label>
              <label>
                <input type="radio" value="Pablo Picasso" checked={selectedArtist === "Pablo Picasso"} onChange={handleArtistChange} />
                Pablo Picasso
              </label>
              <label>
                <input type="radio" value="Diego Velázquez" checked={selectedArtist === "Diego Velázquez"} onChange={handleArtistChange} />
                Diego Velázquez
              </label>
              <label>
                <input type="radio" value="Vincent van Gogh" checked={selectedArtist === "Vincent van Gogh"} onChange={handleArtistChange} />
                Vincent van Gogh
              </label>
            </td>
          </tr>
          <tr>
            <td><label>Feedback:</label></td>
            <td><textarea value={feedback} onChange={handleFeedbackChange} placeholder="Enter your feedback..." /></td>
          </tr>
          <tr>
            <td colSpan="2"><button onClick={handleSubmitFeedback}>Submit Feedback</button></td>
          </tr>
        </tbody>
      </table>
      {submitted && (
        <div className="dialog-box">
          <p>Feedback submitted successfully!</p>
        </div>
      )}
    </div>
  );
}

export default FeedbackForm;
