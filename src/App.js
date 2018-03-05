import React, { Component } from 'react';
import Header from './Header';
import ExerciseRow from './ExerciseRow';
import NewExercise from './NewExercise';
import ExerciseGrid from './ExerciseGrid';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exercises: [
        { name: "Bench (Dumbell)", weight: "50", unit: "lbs", lastDone: Date.now() },
        { name: "Bench (Barbell)", weight: "50", unit: "lbs", lastDone: Date.now() },
        { name: "Deadlift", weight: "50", unit: "lbs", lastDone: Date.now() }
      ]
    };

    this.addExercise = this.addExercise.bind(this);
    this.updateWeight = this.updateWeight.bind(this);
  }

  addExercise(name) {
    this.setState((prevState) => {
      prevState.exercises.push({
        name: name,
        weight: 0,
        unit: "lbs",
        lastDone: Date.now()
      });

      return prevState;
    });
  }

  updateWeight(weight, index) {
    this.setState((prevState) => {
      prevState.exercises[index].weight = weight;
      prevState.exercises[index].lastDone = Date.now();

      return prevState;
    });
  }

  render() {
    return (
      <div className="App">
        <Header />

        <ExerciseGrid>
          {this.state.exercises.map((exercise, index) => 
            <ExerciseRow exercise={exercise} updateWeight={(newWeight) => this.updateWeight(newWeight, index)} key={index}/>
          )}
          <NewExercise add={this.addExercise} />
        </ExerciseGrid>
      </div>
    );
  }
}

export default App;
