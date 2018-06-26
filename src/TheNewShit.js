import React, { Component } from 'react';
import {Card, CardBack, CardFront } from './TheNewStyles';
import Modal from './Modal';


class NewShit extends Component {
  constructor() {
    super()
    this.state ={
      flipped: "",
      showModal: false
    }
    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);
    this.flipCard = this.flipCard.bind(this);
    // this.flipBack = this.flipBack.bind(this);
  }
  handleShow() {
    this.setState({ showModal: !this.state.showModal})
  }
  handleHide() {
    this.setState({ showModal: false, flipped: !this.state.flipped})
  }
  flipCard() {
    this.setState({ flipped: 'flipped'})
  }
  // flipBack() {
  //   this.setState({ flipped: ''})
  // }

  render() {
    const modal = this.state.showModal ? (
      <Modal>
        <Card className={this.state.flipped}>
          <CardFront>
            <h1>Tottally Cool form goes here. Once filled out click submit</h1>
            <button onClick={this.flipCard}>Submit</button>
          </CardFront>
          <CardBack>
            <h1>Thank you for you for filling out this fake form. Peace be with you!</h1>
            <button onClick={this.handleHide}>Close</button>
          </CardBack>
        </Card>
      </Modal>
    ) : null
    return (
      <div>
        <h1>Click here to check out this way cool form</h1>
        <button onClick={this.handleShow}>Way cool form</button>
        {modal}
      </div>
    )
  }
}

export default NewShit;