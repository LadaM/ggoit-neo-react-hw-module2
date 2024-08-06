import css from './App.module.css';
import Description from './components/Description.jsx';
import Options from './components/Options.jsx';
import { useState } from 'react';
import Feedback from './components/Feedback.jsx';

function App() {

  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });
    return (
        <>
            <div className={css.container}>
              <Description />
              <Options feedback={feedback} setFeedback={setFeedback} />
              <Feedback feedback={feedback} />
            </div>
        </>
    )
}

export default App;
