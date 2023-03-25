import React from 'react';
import { IFeedbackOptionsProps } from '../../interfaces';
import { Container } from './FeedbackOptions.styled';

export class FeedbackOptions extends React.Component<
  IFeedbackOptionsProps,
  {}
> {
  render() {
    return (
      <Container>
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
      </Container>
    );
  }
}
