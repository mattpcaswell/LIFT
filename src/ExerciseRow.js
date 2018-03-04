import React, { Component } from 'react';

class ExerciseRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            adding: false,
            weight: this.props.weight
        };

        this.add = this.add.bind(this);
        this.yes = this.yes.bind(this);
        this.no = this.no.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    add() {
        this.setState({adding: true});
    }

    yes() {
        this.setState({adding: false});
    }

    no() {
        this.setState({adding: false});
    }

    handleChange(event) {
        this.setState({weight: event.target.value});
    }

    render() {
        return (
            <div className="exercise-row">
                <div className="exercise-name">{this.props.name}</div>
                <div className="exercise-weight">{this.props.weight}</div>
                <div className="exercise-since">{this.props.lastDone}</div>
                {!this.state.adding && <div className="exercise-add button" onClick={this.add}>ADD</div>}
                {this.state.adding && <div className="exercise-add-container">
                    <input type="text" value={this.state.weight} onChange={this.handleChange} className="weight-input"/>
                    <div className="button" onClick={this.yes}>Y</div>
                    <div className="button" onClick={this.no}>N</div>
                </div>}
            </div>
        );
    }
}

export default ExerciseRow;