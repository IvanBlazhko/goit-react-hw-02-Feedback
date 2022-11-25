import PropTypes from 'prop-types';

import Style from '../Style/Feedback.module.css';

export const FeedbackButtons = ({ stateItemIncrement, buttons }) => {
  return (
    <div className={Style.feedback__buttons}>
      {buttons.map(button => (
        <div key={button}>
          <button
            className={Style.feedback__btn}
            onClick={stateItemIncrement}
            name={button}
          >
            {button}
          </button>
        </div>
      ))}
    </div>
  );
};

export default FeedbackButtons;

FeedbackButtons.prototype = {
  stateItemIncrement: PropTypes.func,
  buttons: PropTypes.array,
};
