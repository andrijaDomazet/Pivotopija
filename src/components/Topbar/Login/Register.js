import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import "../Topbar.scss";
import "./Login.scss";

export default class Register extends Component {
  state = {
    show: false,
    email: "",
    password: "",
    firstName: "",
    lastName: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = () => {
    this.setState({ show: true });
  };

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
                <input
                  type="email"
                  className="email"
                  required
                  onChange={this.handleChange}
                />
                <label className="imePolja" htmlFor="email">
                  Email
                </label>
              </div>
              <div className="input-field">
                <input
                  type="password"
                  className="password"
                  required
                  onChange={this.handleChange}
                />
                <label className="imePolja" htmlFor="password">
                  Password
                </label>
              </div>
              <div className="input-field">
                <input
                  type="text"
                  className="firstName"
                  required
                  onChange={this.handleChange}
                />
                <label className="imePolja" htmlFor="firstName">
                  First Name
                </label>
              </div>
              <div className="input-field">
                <input
                  type="text"
                  className="lastName"
                  required
                  onChange={this.handleChange}
                />
                <label className="imePolja" htmlFor="lastName">
                  Last Name
                </label>
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
