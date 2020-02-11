import React, { Component } from 'react'

export default class FlagResult extends Component {
  render() {
    const { win, name, onNext, containerStyle, buttonStyle } = this.props;
    const view = <h1>{win ? 'You are right!' : 'Too bad..'} The answer is {name}.</h1>;

    return (
      <div style={containerStyle}>
        {view}
        <button onClick={onNext} style={buttonStyle}>Next</button>
      </div>
    )
  }
}
