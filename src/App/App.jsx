import React, {Component} from "react";

import Style from './Style/Feedback.module.css';

import FeedbackButtons from "./components/FeedbackButtons";
import FeedbackStatistics from "./components/FeedbackStatistics";

class App extends Component {
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
      <div className={Style.app__wrapper}>
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
      </div>
    )
  }
}

export default App;
