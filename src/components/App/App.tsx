import React from 'react';
import { Statistics } from '../Statistics/Statistics';
import { Section } from '../Section/Section';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { ModernNormalize } from 'emotion-modern-normalize';
import { Container } from './App.styled';

import { IAppState } from '../../interfaces';

export class App extends React.Component<{}, IAppState> {
  state: IAppState = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  calcTotal = (): number =>
    this.state.good + this.state.neutral + this.state.bad;

  calcPositiveFeedback = (): string =>
    `${((this.state.good / this.calcTotal()) * 100).toFixed(0)}%`;

  handleResponse = (e: React.MouseEvent): void => {
    const target = e.target as typeof e.target & {
      value: string;
    };
    this.setState(
      prevState =>
        ({
          [target.value]: prevState[target.value as keyof IAppState] + 1,
        } as Pick<IAppState, keyof IAppState>)
    );
  };

  render() {
    return (
      <Container>
        <ModernNormalize />

        <h2> This is my Feedback Widget</h2>

        <Section title="Please leave feedback">
          <FeedbackOptions responseHandler={this.handleResponse} />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.calcTotal()}
            positiveFeedback={this.calcPositiveFeedback()}
          />
        </Section>
      </Container>
    );
  }
}
