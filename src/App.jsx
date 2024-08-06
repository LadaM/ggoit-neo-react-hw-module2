import css from './App.module.css';
import Description from './components/Description.jsx';
import Options from './components/Options.jsx';
import { useEffect, useState } from 'react';
import Feedback from './components/Feedback.jsx';

function App() {
  const initializeState = () => {
    const storedFeedback = localStorage.getItem('feedback');
    return storedFeedback ? JSON.parse(storedFeedback) : { good: 0, neutral: 0, bad: 0 };
  };
  const [feedback, setFeedback] = useState(initializeState);
  const hasFeedback = Object.values(feedback).some((value) => value > 0);
  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  return (
        <>
            <div className={css.container}>
              <Description />
              <Options hasFeedback={hasFeedback} setFeedback={setFeedback} />
              {hasFeedback && <Feedback feedback={feedback} />}
            </div>
        </>
    )
}

export default App;
