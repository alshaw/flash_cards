import React from 'react';
import List from './List';
import Form from './Form'

class FlashCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isFlipped: false }
  }
  handleFlip = () => {
    this.setState({ isFlipped: !this.state.isFlipped })
  }

  addItem = (name) => {
    let { items, id } = this.state;
    let todo = { name, id, complete: false }
    this.setState({ 
      items: [...items, todo],
      id: id + 1
    });
  }

  render() {
    return (
      <div onClick={this.handleFlip}>
        <Form addFlashCardsItem={this.addItem} />
        { this.state.isFlipped ? this.props.back : this.props.front }
      </div>
    )
  }
}

export default FlashCard;