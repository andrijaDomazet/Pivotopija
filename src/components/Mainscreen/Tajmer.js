import React, { Component } from "react";

export default class Tajmer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0 // prikaz_objekata: false
    };
  }

  brojanje() {
    this.setState(state => ({
      seconds: state.seconds + 1
    }));
  }
  componentDidMount() {
    this.interval = setInterval(() => this.brojanje(), 1000);
  }
  render() {
    console.log("tajmer");
    return (
      <div>
        {/* <div>
          Seconds:{this.state.seconds}
          <p />
        </div> */}
      </div>
    );
  }
}
