import css from './FeedbackComponent.module.css';
import propTypes from 'prop-types';
const FeedbackComponent = ({ options, onLeaveFeedback }) => {
  return options.map(option => {
    return (
      <button
        className={css.btnFeedback}
        key={option}
        type="button"
        name={option}
        onClick={onLeaveFeedback}
      >
        {option}
      </button>
    );
  });
};
FeedbackComponent.propTypes = {
  options: propTypes.arrayOf(propTypes.string),
  onLeaveFeedback: propTypes.func,
};
export default FeedbackComponent;
