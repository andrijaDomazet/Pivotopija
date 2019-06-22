import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import "../Topbar.scss";
import "./Login.scss";

class SignIn extends Component {
  state = {
    show: false,
    email: "",
    password: ""
  };
  // }

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
          Sign In
        </p>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Sign In</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={this.handleSubmit} className="white">
              <div className="input-field">
                <input
                  className="inputPolje"
                  type="text"
                  id="email"
                  name="email"
                  required
                  onChange={this.handleChange}
                />
                <label id="imePolja" htmlFor="email">
                  Email
                </label>
              </div>
              <div className="input-field">
                <input
                  className="inputPolje"
                  type="password"
                  id="password"
                  required
                  onChange={this.handleChange}
                />
                <label id="imePolja" htmlFor="password">
                  Password
                </label>
              </div>
              <div className="input-field">
                <button className="myButton">Sign In</button>
              </div>
            </form>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default SignIn;
