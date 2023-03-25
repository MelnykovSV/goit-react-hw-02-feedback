import React, { Component } from 'react';

export class FeedbackOptions extends Component {
  render() {
    return (
      <div className="buttons-container">
        <button
          type="button"
          className="button-good"
          onClick={this.props.handlerGood}
        >
          Good
        </button>
        <button
          type="button"
          className="button-neutral"
          onClick={this.props.handlerNeutral}
        >
          Neutral
        </button>
        <button
          type="button"
          className="button-bad"
          onClick={this.props.handlerBad}
        >
          Bad
        </button>
      </div>
    );
  }
}
