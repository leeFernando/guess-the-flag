import React, { Component } from 'react'
import FlagDisplay, { GAMEPHASE } from './FlagDisplay'


export default class App extends Component {

  state = {
    countries: [],
    options: [],
    correctAns: '',
    phase: GAMEPHASE.ANSWERING
  }

  setOptions = (countries) => {
    let options = [];
    //Choose 4 indexes randomly
    while (options.length < 4) {
      let idx = Math.floor(Math.random() * countries.length)
      if (!options.includes(idx)) {
        options.push(idx);
      }
    }
    //Choose a random idx from 'options' as answer
    let ansIdx = Math.floor(Math.random() * options.length);
    let correctAns = options[ansIdx];
    return { options, correctAns };
  }

  onGuess = (userAns) => {
    const { correctAns } = this.state;
    if (userAns === correctAns)
      this.setState({ phase: GAMEPHASE.CORRECT });
    else
      this.setState({ phase: GAMEPHASE.WRONG });
  }

  onNext = () => {
    this.setState(state => ({
      ...this.setOptions(state.countries),
      phase: GAMEPHASE.ANSWERING
    }));
  }

  componentDidMount() {
    const url = 'https://restcountries.eu/rest/v2/all';
    fetch(url)
      .then(data => data.json())
      .then(data => {
        let countries = data.map(({ name, flag }) => ({
          name, flag
        }));
        this.setState({ ...this.setOptions(countries), countries });
      })
  }

  render() {
    const { options, correctAns, countries, phase } = this.state;

    let view = <div>Loading...</div>
    if (correctAns) {
      // mapping idx to names
      const opts = options.map(id => ({ id, name: countries[id].name }));
      const { name, flag } = countries[correctAns];

      view = <FlagDisplay
        onNext={this.onNext}
        onGuess={this.onGuess}
        options={opts}
        phase={phase}
        flag={flag}
        name={name} />
    }

    return (
      <div>
        {view}
      </div>
    )
  }
}
