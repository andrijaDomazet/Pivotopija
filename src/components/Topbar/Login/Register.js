import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import "../Topbar.scss";
import "./Login.scss";

class Register extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
      email: "",
      password: "",
      firstName: "",
      lastName: "",
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <>
        <p className="top-link" onClick={this.handleShow}>
          Register
          </p>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Register</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={this.handleSubmit} className="white">
              <div className="input-field">
                <input type="email" id="email" required onChange={this.handleChange} />
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-field">
                <input type="password" id="password" required onChange={this.handleChange} />
                <label htmlFor="password">Password</label>
              </div>
              <div className="input-field">
                <input type="text" id="firstName" required onChange={this.handleChange} />
                <label htmlFor="firstName">First Name</label>
              </div>
              <div className="input-field">
                <input type="text" id="lastName" required onChange={this.handleChange} />
                <label htmlFor="lastName">Last Name</label>
              </div>
              <div className="input-field">
                <button className="myButton">Register</button>
              </div>
            </form>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default Register
