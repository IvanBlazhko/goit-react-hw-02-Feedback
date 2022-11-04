import React, { Component } from 'react';

import Style from './Feedback.module.css';

import { FeedbackStatistics } from './FeedbackComponents/FeedbackStatistics';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  goodIncrement = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };
  neutralIncrement = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };
  badIncrement = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };
  countTotalFeedback = () => {
    return this.state.good + this.state.bad + this.state.neutral;
  };
  countPositiveFeedbackPercentage = () => {
    return Math.round(100 / (this.countTotalFeedback() / this.state.good));
  };
  render() {
    const { good } = this.state;
    const { neutral } = this.state;
    const { bad } = this.state;
    return (
      <div className={Style.feedback__body}>
        <h1 className={Style.feedback__title}>Please leave feedback</h1>
        <div className={Style.feedback__buttons}>
          <button className={Style.feedback__btn} onClick={this.goodIncrement}>
            Good
          </button>
          <button
            className={Style.feedback__btn}
            onClick={this.neutralIncrement}
          >
            Neutral
          </button>
          <button className={Style.feedback__btn} onClick={this.badIncrement}>
            Bad
          </button>
        </div>
        <FeedbackStatistics
          good={good}
          bad={bad}
          neutral={neutral}
          countTotalFeedback={this.countTotalFeedback()}
          countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}
        />
      </div>
    );
  }
}

export default Feedback;
