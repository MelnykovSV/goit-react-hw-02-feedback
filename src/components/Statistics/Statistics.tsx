import React, { Component } from 'react';

export class Statistics extends Component {
  render() {
    if (!this.props.total) {
      return <p>No feedback given</p>;
    }
    return (
      <div className="statistics-body">
        <p className="response-good">Good: {this.props.good}</p>
        <p className="response-neutral">Neutral: {this.props.neutral}</p>
        <p className="response-bad">Bad: {this.props.bad}</p>
        <p className="response-total">Total: {this.props.total}</p>
        <p className="positive-persentage">
          Positive feedback: {this.props.positiveFeedback}
        </p>
      </div>
    );
  }
}
