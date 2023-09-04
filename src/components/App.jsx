import { useState } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import { AppSection } from './App.Styled';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import { GlobalStyle } from './GlobalStyled';

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
    <AppSection>
      <Section title="Please leave your feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleFeedback}
        />
      </Section>
      <Section>
        {TotalFeedback === 0 ? (
          <Notification message="There is no feedback for this moment" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={TotalFeedback}
            positivePercentage={positiveFeedback}
          />
        )}
      </Section>
      <GlobalStyle />
    </AppSection>
  );
};
