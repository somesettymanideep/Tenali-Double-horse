import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';



const FeedbackDrawer = () => {
  
  const [showDrawer, setShowDrawer] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleShowDrawer = () => {
    setShowDrawer(!showDrawer);
  };
   

  const handleSubmitFeedback = (event) => {
    event.preventDefault();
    const formData = {
        firstName,
        lastName,
        email,
        message,
      };
    
      // Perform your API call or form submission logic here
      // For simplicity, we'll just log the form data to the console
      console.log(formData);
    
      // Reset the form fields after submission
      setFirstName('');
      setLastName('');
      setEmail('');
      setMessage('');
    
      // Optionally, show the success message or any other handling after successful form submission
      setShowDrawer(false)
  };

  return (
    <div>
      <style>
        {/* Include the CSS styles here using React's inline style syntax */}
        {`
          /* Your CSS styles go here */
        `}
      </style>
      <div id="feedbackDrawer" className={showDrawer ? 'showDrawer' : ''}>
        {/* Feedback Form */}
        <div id="feedbackForm">
        <Form onSubmit={handleSubmitFeedback}>
            <h2>Submit Feedback</h2>
            <Form.Group controlId="firstName" style={{marginBottom:'5px'}}>
              <Form.Control
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
                required
              />
            </Form.Group>
            <Form.Group controlId="lastName" style={{marginBottom:'5px'}}>
              <Form.Control
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
                required
              />
            </Form.Group>
            <Form.Group controlId="email" style={{marginBottom:'5px'}}>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
              />
            </Form.Group>
            <Form.Group controlId="message"style={{marginBottom:'5px'}}>
              <Form.Control
                as="textarea"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Message"
                rows="5"
                required
              />
            </Form.Group>
            <button type="submit" className="btn-custom btn-sm primary" name="button">Send Message</button>
          </Form>
        </div>
        {/* Success Message */}
        <div id="feedbackSuccess">
          <h2>Thank You</h2>
          <p>Your feedback was successfully submitted</p>
          <button onClick={handleShowDrawer}>Submit More Feedback</button>
        </div>
        {/* Error Message */}
        <div id="feedbackError">
          <h2>Aw, Snap!</h2>
          <p>There was an error submitting your feedback</p>
          <button onClick={handleShowDrawer}>Try Again</button>
        </div>
        {/* Feedback Trigger */}
        <div id="feedbackTrigger" onClick={handleShowDrawer}>
       Feedback
          <span id="close">&raquo;</span>
        </div>
      </div>
    </div>
  );
};

export default FeedbackDrawer;
