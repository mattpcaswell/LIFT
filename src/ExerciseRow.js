import React, { Component } from 'react';
import moment from 'moment';

class ExerciseRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            adding: false
        };

        this.add = this.add.bind(this);
        this.yes = this.yes.bind(this);
        this.no = this.no.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        // update lastDone every 30 seconds
        this.interval = setInterval(() => this.forceUpdate(), 1000 * 30);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
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
        this.props.updateWeight(event.target.value);
    }

    render() {
        let lastDone = moment(this.props.exercise.lastDone).fromNow();

        return (
            <React.Fragment>
                <div className="exercise-name">{this.props.exercise.name}</div>
                {!this.state.adding ? <div className="exercise-weight">{this.props.exercise.weight + this.props.exercise.unit}</div> :
                    <input type="text" value={this.props.exercise.weight} onChange={this.handleChange} className="weight-input" />}
                <div className="exercise-since">{lastDone}</div>
                {!this.state.adding && <div className="exercise-add button" onClick={this.add}>ADD</div>}
                {this.state.adding && <div className="exercise-add-container">
                    <div className="button" onClick={this.yes}>Y</div>
                    <div className="button" onClick={this.no}>N</div>
                </div>}
            </React.Fragment>
        );
    }
}

export default ExerciseRow;