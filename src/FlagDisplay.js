import React, { Component } from 'react';
import FlagChoices from './FlagChoices';
import FlagResult from './FlagResult';

const GAMEPHASE = {
  ANSWERING: 0,
  CORRECT: 1,
  WRONG: 2,
};
export { GAMEPHASE };

export default class FlagDisplay extends Component {
  render() {
    const { options, flag, name, phase, onNext, onGuess } = this.props;

    let view;
    if (phase === GAMEPHASE.ANSWERING)
      view = <FlagChoices options={options} onGuess={onGuess} />;
    else if (phase === GAMEPHASE.CORRECT)
      view = <FlagResult win={true} name={name} onNext={onNext} />;
    else view = <FlagResult win={false} name={name} onNext={onNext} />;

    return (
      <div className='container'>
        <h1>Guess The Flag!</h1>
        {view}
        <img className='image' src={flag} alt={name} />
      </div>
    );
  }
}
