import React, { Component } from 'react'
import FlagChoices from './FlagChoices';
import FlagResult from './FlagResult';

//CSS STYLE
const childContainer = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'black',
  color: 'white',
  height: '100px',
  fontSize: '20px',
  width: '100%'
}
const childButton = {
  border: 'none',
  background: 'orange',
  padding: '10px',
  borderRadius: '5px',
  color: 'white',
  fontSize: '20px',
  margin: '0 30px'
}
const container = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
}
const image = {
  width: '600px',
  height: '350px',
  border: '1px solid black',
  marginTop: '30px',
  backgroundSize: 'cover'
}

const GAMEPHASE = {
  ANSWERING: 0,
  CORRECT: 1,
  WRONG: 2
}
export { GAMEPHASE };

export default class FlagDisplay extends Component {
  render() {
    const { options, flag, name, phase, onNext, onGuess } = this.props;

    let view;
    if (phase === GAMEPHASE.ANSWERING)
      view = <FlagChoices
        options={options}
        onGuess={onGuess}
        containerStyle={childContainer}
        buttonStyle={childButton} />
    else if (phase === GAMEPHASE.CORRECT)
      view = <FlagResult
        win={true}
        name={name}
        onNext={onNext}
        containerStyle={childContainer}
        buttonStyle={childButton} />
    else
      view = <FlagResult
        win={false}
        name={name}
        onNext={onNext}
        containerStyle={childContainer}
        buttonStyle={childButton} />

    return (
      <div style={container}>
        <h1>Guess The Flag!</h1>
        {view}
        <img style={image} src={flag} alt={name} />
      </div>
    )
  }
}
