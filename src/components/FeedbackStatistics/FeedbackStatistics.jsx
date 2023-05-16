import propTypes from 'prop-types';

const FeedbackStatistics = ({ good, neutral, bad, total, count }) => {
  return (
    <div>
      <p className="statPunkt">Good: {good}</p>
      <p className="statPunkt">Neutral: {neutral}</p>
      <p className="statPunkt">Bad: {bad}</p>
      <p className="statPunkt">Total: {total()}</p>
      <p className="statPunkt">Positive feedback: {count()}% </p>
    </div>
  );
};
FeedbackStatistics.propTypes = {
  good: propTypes.number,
  neutral: propTypes.number,
  bad: propTypes.number,
  total: propTypes.func,
  count: propTypes.func,
};
export default FeedbackStatistics;
