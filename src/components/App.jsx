import { useState } from 'react';
import FeedbackOptios from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';

// import { useState } from "react";
export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = option => {
    if (option === 'good') {
      return setGood(prevGood => prevGood + 1);
    } else if (option === 'neutral') {
      return setNeutral(prevNeutral => prevNeutral + 1);
    } else if (option === 'bad') {
      return setBad(prevBad => prevBad + 1);
    }
  };

  const TotalFeedback = good + bad + neutral;

  const positiveFeedback = Math.round((good / TotalFeedback) * 100);

  return (
    <div>
      <h1>Please leave your feedback</h1>
      <FeedbackOptios
        options={['good', 'neutral', 'bad']}
        onLeaveFeedback={handleFeedback}
      />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={TotalFeedback}
        positivePercentage={positiveFeedback}
      />
    </div>
  );
};
