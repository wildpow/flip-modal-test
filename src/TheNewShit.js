import React, { Component } from 'react';
import {Card, CardBack, CardFront, Container } from './TheNewStyles';
import Modal from './Modal';
import styled from 'styled-components';

const NewModal = styled(Modal)`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

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
          <CardBack onClick={this.handleHide}>
            <h1>Thank you for you for filling out this fake form. Peace be with you!</h1>
            {/* <button onClick={this.handleHide}>Close</button> */}
          </CardBack>
        </Card>
      </Modal>
    ) : null
    return (
      <Container>
        <h1>Click here to check out this way cool form</h1>
        <button onClick={this.handleShow}>Way cool form</button>
        {modal}
      </Container>
    )
  }
}

export default NewShit;