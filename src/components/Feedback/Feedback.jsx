import React, { Component } from 'react';

import Style from './Feedback.module.css';

import FeedbackStatistics from './FeedbackComponents/FeedbackStatistics';
import FeedbackButtons from './FeedbackComponents/FeedbackButtons';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  stateItemIncrement = event => {
    const { name } = event.currentTarget;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };
  render() {
    const { good } = this.state;
    const { neutral } = this.state;
    const { bad } = this.state;
    const countTotalFeedback = good + neutral + bad;
    const countPositiveFeedbackPercentage = Math.round(
      100 / (countTotalFeedback / good)
    );
    return (
      <div className={Style.feedback__body}>
        <h1 className={Style.feedback__title}>Please leave feedback</h1>
        <FeedbackButtons
          stateItemIncrement={this.stateItemIncrement}
          buttons={Object.keys(this.state)}
        />
        {countTotalFeedback ? (
          <FeedbackStatistics
            good={good}
            bad={bad}
            neutral={neutral}
            countTotalFeedback={countTotalFeedback}
            countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <div>No Feedback</div>
        )}
      </div>
    );
  }
}

export default Feedback;
