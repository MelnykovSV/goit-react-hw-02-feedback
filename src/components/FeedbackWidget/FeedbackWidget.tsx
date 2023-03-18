import React, { Component } from 'react';
// interface IClickEvent {
//   _reactName: 'string';
//   type: 'string';
// }

export class FeedbackWidget extends Component {
  static defaultProps = {
    goodDefault: 0,
    neutralDefault: 0,
    badDefault: 0,
  };

  state = {
    good: this.props.goodDefault,
    neutral: this.props.neutralDefault,
    bad: this.props.badDefault,
  };

  handleGoodResponse = e =>
    this.setState(prevState => ({ good: prevState.good + 1 }));
  handleNeutralResponse = e =>
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  handleBadResponse = e =>
    this.setState(prevState => ({ bad: prevState.bad + 1 }));

  render() {
    console.log(this.state);
    return (
      <section>
        This is my Feedback Widget
        <h1 className="feedback-title">Please leave feedback</h1>
        <div className="buttons-container">
          <button
            type="button"
            className="button-good"
            onClick={this.handleGoodResponse}
          >
            Good
          </button>
          <button
            type="button"
            className="button-neutral"
            onClick={this.handleNeutralResponse}
          >
            Neutral
          </button>
          <button
            type="button"
            className="button-bad"
            onClick={this.handleBadResponse}
          >
            Bad
          </button>
        </div>
        <div className="statistics-container">
          <h2 className="statistics-title">Statistics</h2>
          <div className="statistics-body">
            <p className="response-good">Good: {this.state.good}</p>
            <p className="response-neutral">Neutral: {this.state.neutral}</p>
            <p className="response-bad">Bad: {this.state.bad}</p>
            <p className="response-total">Total: {}</p>
            <p className="positive-persentage">Positive feedback: {}</p>
          </div>
        </div>
      </section>
    );
  }
}
