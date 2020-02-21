import React, { Component } from 'react';

export default class FlagChoices extends Component {
  state = {
    userChoice: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: Number(value) });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onGuess(this.state.userChoice);
  };

  render() {
    const { options } = this.props;

    let radios = options.map(({ id, name }, i) => (
      <section key={i} className='radio'>
        <input id={name} type='radio' name='userChoice' value={id} />
        <label htmlFor={name}>{name}</label>
      </section>
    ));

    return (
      <form
        sty
        className='child-container'
        action=''
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
      >
        {radios}
        <button className='child-button'>Guess</button>
      </form>
    );
  }
}
