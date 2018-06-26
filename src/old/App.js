import React, { Component } from 'react';
import MakeOffer from './MakeOffer2';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      class: 'none'
    }
    this.handleFlip = this.handleFlip.bind(this);
  }
  
  handleFlip = () => {
    this.setState({
      class: 'rotateY(180deg)'
    })
  }
  render() {
    return (
      <div>
        <MakeOffer/>
     
      
      </div>
    );
  }
}

export default App;
