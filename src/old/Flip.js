import React, { Component } from 'react';
import './Flip.css';

const Flipper = (props) => {
  return (
    <div className={`flipper-container ${props.orintation}`}>
      <div className={`flipper ${props.flipped ? " flipped" : ""}`}>
        <Front>the Front!</Front>
        <Back>the Back!</Back>
      </div>
    </div>
  )
}

const Front = (props) => {
  return (
    <div className="front tile">{props.children}</div>
  )
}

const Back = (props) => {
  return (
    <div className="back tile">{props.children}</div>
  )
}


class Flip extends Component {
  constructor() {
    super();
    this.state = {
      flipped: false
    }
    this.handleFlip = this.handleFlip.bind(this);
  }
  handleFlip() {
    this.setState({
      flipped: !this.state.flipped
    });
  }
  render() {
    return(
      <div>
        <Flipper flipped={this.state.flipped} orintation="horizontal" />
        <Flipper flipped={this.state.flipped} orintation="vertical" />
        <div className="button-container">
          <button onClick={this.flip}>Flip!</button>
        </div>
      </div>
    )
  }
}

export default Flip;