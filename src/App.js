import React, { Component } from 'react';
import Header from './Header';
import ExerciseRow from './ExerciseRow';
import NewExercise from './NewExercise';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: "none"
    };

    this.addExercise = this.addExercise.bind(this);
  }

  addExercise(name) {
    this.setState({test: name});
  }

  render() {
    return (
      <div className="App">
        <Header />
        <ExerciseRow name="Bench (Dumbell)" weight="50lbs" lastDone="2 Days Ago"/>
        <ExerciseRow name="Bench (Barbell)" weight="180lbs" lastDone="A Few Seconds Ago"/>
        <ExerciseRow name={this.state.test} weight="70lbs" lastDone="4 Months Ago"/>
        <NewExercise add={this.addExercise}/>
      </div>
    );
  }
}

export default App;
