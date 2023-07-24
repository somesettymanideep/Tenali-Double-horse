import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class Paragraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  handleClose = () => {
    this.setState({ show: false });
  }

  handleShow = () => {
    this.setState({ show: true });
  }


  handleSaveChanges = () => {
    const content = 'Hello, this is a PDF!'; // Replace this with the content you want in the PDF

    // Convert the content to a Blob
    const pdfBlob = new Blob([content], { type: 'application/pdf' });

    // Create a download link
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(pdfBlob);
    downloadLink.download = 'my_document.pdf';
    downloadLink.click();

    // Close the modal after saving
    this.handleClose();
  };

  render() {
    const { show } = this.state;

    return (
      <div className="section light-bg  ">
        <div className="container">
          <div className="row align-items-center ">
            <div className="col-lg-6 mb-lg-30">
              <img src={process.env.PUBLIC_URL + "/assets/img/misc/Suma-500x400.png"} alt="img" />
            </div>
            <div className="col-lg-6">
              <div className="section-title-wrap mr-lg-30 text-center">
                <h5 className="custom-primary">Good Health In</h5>
                <h2 className="title">Every "Bite"</h2>
                <p className="subtitle" style={{ textAlign: 'justify' }}>
                  Pulses are Good Source of Iron. Pulses are also a strachy Food and add fibre to your meal. Eating a high diet fibre is asssociated with a reduced risk of Heart Disease and Type 2 Diabetes
                </p>
                <button onClick={this.handleShow} className="btn-custom">Download brochure</button>
                <Modal show={show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Please Enter Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  autoFocus
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Phone No</Form.Label>
        <Form.Control type="text" placeholder="Phone No" />
      </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <button className="btn-custom btn btn-sm" onClick={this.handleClose}>
              Close
            </button>
            <button className="btn-custom btn btn-sm" onClick={this.handleSaveChanges}>
              Save Changes
            </button>
          </Modal.Footer>
        </Modal>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Paragraph;
