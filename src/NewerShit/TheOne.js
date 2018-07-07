import React, { Component } from 'react';
import { CardContainer, Card, Front, Back, Header } from './TheOneStyles';

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
          <Header>
            <h3>Poop</h3>
            <button onClick={this.handleHide}>close</button>
          </Header>
        </Front>
        <Back>
          <Header>
            <h3>PEEPS!!!</h3>
            <button onClick={this.handleHide}>close</button>
          </Header>
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