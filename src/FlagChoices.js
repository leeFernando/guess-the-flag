import React, { Component } from 'react'

export default class FlagChoices extends Component {
  state = {
    userChoice: ''
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: Number(value) });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onGuess(this.state.userChoice);
  }

  render() {
    const { options, containerStyle, buttonStyle } = this.props;

    //style for radios
    const radio = {
      marginLeft: '30px'
    }

    let radios = options.map(({ id, name }, i) => (
      <section key={i} style={radio}>
        <input
          name='userChoice'
          value={id}
          type='radio'
        /> {name}
      </section>
    ))

    return (
      <form
        style={containerStyle}
        action=""
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
      >
        {radios}
        <button style={buttonStyle}>Guess</button>
      </form>
    )
  }
}
