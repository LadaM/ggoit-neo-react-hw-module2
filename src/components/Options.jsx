import css from './Options.module.css';
import PropTypes from 'prop-types';

const Options = ({hasFeedback, setFeedback}) => {
  const handleFeedback = (type) => {
    setFeedback((prevState) => ({
      ...prevState,
      [type]: prevState[type] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0
    });
  };

  return (<div className={css.container}>
    <button className={css.btn} onClick={() => handleFeedback('good')}>Good</button>
    <button className={css.btn} onClick={() => handleFeedback('neutral')}>Neutral</button>
    <button className={css.btn} onClick={() => handleFeedback('bad')}>Bad</button>
    {hasFeedback && <button className={css.btn} onClick={resetFeedback}>Reset</button>}
  </div>);
};

Options.propTypes = {
  hasFeedback: PropTypes.bool.isRequired,
  setFeedback: PropTypes.func.isRequired,
};

export default Options; 