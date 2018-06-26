import React, { Component } from 'react';
import styled, {css} from 'styled-components'



const Card = styled.article`
  position: relative;
  width: 100%;
  min-height: 380px;
  cursor: pointer;
  perspective: 1000px;
  transition: all .25s ease-in-out;

  /* &:focus,
  &:hover {
    box-shadow: 0 0 40 rgba(0,0,0,.15);
  } */

  &.flipped {
    & > div:first-of-type { // frontside of the card
      transform: perspective(1000px) rotateY(-180deg);
    }

    & > div:last-of-type { // backside of the card
      transform: perspective(1000px) rotateY(0deg);
    }
  }
`;
const CardSide = css`
  position: absolute;
  font-size: 4rem;
  top: 0;
  left: 0;
  overflow: hidden;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transition: all .35s ease-in-out;
`

const CardFront = styled.div`
  ${CardSide};
  background-color: blue;
  font-weight: bold;
  text-align: center;
`
const CardBack = styled.div`
  ${CardSide};
  text-align: center;
  background-color: red;
  transform: rotateY(-180deg);
`
class MakeOffer extends Component {
  constructor() {
    super()
    this.state = { flipped: ''}
    this.flipCard = this.flipCard.bind(this)
    this.handleFlipBack = this.handleFlipBack.bind(this)
  }
  
  flipCard() {
    this.setState({ flipped: 'flipped'})
  }
  handleFlipBack = () => {
    this.setState({ flipped: ''})
  }
  render() {
    return (
      <div>
        <Card className={this.state.flipped}>
          <CardFront>
            <h1>Hello</h1>
            <button onClick={this.flipCard}>Flip</button>
          </CardFront>
          <CardBack>
            <h1>Bye</h1>
            <button onClick={this.handleFlipBack}>Flip</button>
          </CardBack>
        </Card>
      </div>
    )
  }
}

export default MakeOffer