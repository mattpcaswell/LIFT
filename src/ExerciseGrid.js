import React, { Component } from 'react';

class ExerciseGrid extends Component {
    render() {
        return (
            <div className="exercise-grid">
                {this.props.children}
            </div>
        );
    }
}

export default ExerciseGrid;