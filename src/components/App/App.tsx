import React, { Component } from 'react';
import { Statistics } from '../Statistics/Statistics';
import { Section } from '../Section/Section';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';

export class App extends Component {
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

  calcTotal = () => this.state.good + this.state.neutral + this.state.bad;
  calcPositiveFeedback = () =>
    `${((this.state.good / this.calcTotal()) * 100).toFixed(0)}%`;

  handleGoodResponse = e =>
    this.setState(prevState => ({ good: prevState.good + 1 }));
  handleNeutralResponse = e =>
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  handleBadResponse = e =>
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <section>
          <h2> This is my Feedback Widget</h2>

          <Section title="Please leave feedback">
            <FeedbackOptions
              handlerGood={this.handleGoodResponse}
              handlerNeutral={this.handleNeutralResponse}
              handlerBad={this.handleBadResponse}
            />
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
        </section>
      </div>
    );
  }
}
