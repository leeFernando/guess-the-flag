import React, { Component } from 'react';

export default class FlagResult extends Component {
  render() {
    const { win, name, onNext } = this.props;
    const view = (
      <h1>
        {win ? 'You are right!' : 'Too bad..'} The answer is {name}.
      </h1>
    );

    return (
      <div className='child-container'>
        {view}
        <button onClick={onNext} className='child-button'>
          Next
        </button>
      </div>
    );
  }
}
