import React, { Component } from 'react';
import "./NewExercise.css";

class NewExercise extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addingExercise: false,
            name: ""
        };

        this.newExercise = this.newExercise.bind(this);
        this.exit = this.exit.bind(this);
        this.add = this.add.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }j

    newExercise() {
        this.setState({addingExercise: true, name: ""});
    }

    exit() {
        this.setState({addingExercise: false});
    }

    add() {
        this.props.add(this.state.name);
        this.setState({addingExercise: false});
    }

    handleChange(event) {
        this.setState({name: event.target.value});
    }

    render() {
        return (
            <div className="exercise-row">
                <div className="button" onClick={() => this.newExercise()}>New...</div>

                {this.state.addingExercise && <div className="new-exercise-bar">
                    <input type="text" value={this.state.name} onChange={this.handleChange} placeholder="Deadlift"/>
                    <div className="new-exercise-bar-button button" onClick={this.add}>Add</div>
                    <div className="new-exercise-bar-button button" onClick={this.exit}>X</div>
                </div>}
            </div>
        );
    }
}

export default NewExercise;