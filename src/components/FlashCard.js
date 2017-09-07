import React from 'react';
import List from './List';

class FlashCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isFlipped: false }
  }
  handleFlip = () => {
    this.setState({ isFlipped: !this.state.isFlipped })
  }
  render() {
    return (
      <div onClick={this.handleFlip}>
        { this.state.isFlipped ? this.props.back : this.props.front }
      </div>
    )
  }
}

export default FlashCard;