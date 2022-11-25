import React from 'react';
import PropTypes from 'prop-types';

import Style from '../Style/Feedback.module.css';

export const FeedbackStatistics = ({
  good,
  bad,
  neutral,
  countPositiveFeedbackPercentage,
  countTotalFeedback,
}) => {
  return (
    <>
      <h2 className={Style.feedback__title}>Statistics</h2>
      <div className={Style.feedback__text}>Good: {good}</div>
      <div className={Style.feedback__text}>Neutral: {neutral}</div>
      <div className={Style.feedback__text}>Bad: {bad}</div>
      <div className={Style.feedback__text}>Total: {countTotalFeedback}</div>
      <div className={Style.feedback__text}>
        Positive Feedback:{' '}
        {countPositiveFeedbackPercentage ? countPositiveFeedbackPercentage : 0}%
      </div>
    </>
  );
};
export default FeedbackStatistics;

FeedbackStatistics.propTypes = {
  good: PropTypes.number,
  bad: PropTypes.number,
  neutral: PropTypes.number,
};
