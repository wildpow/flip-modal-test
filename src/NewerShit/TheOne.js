import React, { Component } from 'react';
import { CardContainer, Card, Front, Back } from './TheOneStyles';

class CrazyCard extends Component {
  constructor() {
    super();
    this.state = {
      flip: ''
    }
    this.flipCard = this.flipCard.bind(this);
    this.flipBack = this.flipBack.bind(this)
  }
  flipCard() {
    this.setState({ flip: 'rotateY(180deg)'})
  }
  flipBack() {
    this.setState({ flip: ''})
  }
  render() {
    return (
      <div>
      <CardContainer>
        <Card style={{transform: this.state.flip}}>
        <Front>
          <h1>Poop</h1>
        </Front>
        <Back>
          <h1>fart</h1>
        </Back>
        </Card>
      </CardContainer>
      <button onClick={this.flipCard}>Flip</button>
      <button onClick={this.flipBack}>Back</button>
      </div>
    )
  }
}

export default CrazyCard;