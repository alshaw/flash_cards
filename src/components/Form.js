import React from 'react';

class Form extends React.Component {
  state = { name: '' } 

  addFlashCards = (e) => {
    e.preventDefault();
    this.props.addFlashCardsItem(this.state.name);
    this.setState({ name: '' })
  }

  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value })
  }

  render() {
    return (
      <form onSubmit={this.addFlashCards}>
        <input
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          placeholder="Add a flash card" 
        />
      </form>
    )
  }
}

export default Form;
