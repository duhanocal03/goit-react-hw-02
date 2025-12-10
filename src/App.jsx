import { useState, useEffect } from "react";
import Feedback from "./Components/Feedback/Feedback.jsx";
import Options from "./Components/Options_Feedback/Options.jsx";
import './Components/Options_Feedback/option.css'
import './App.css'

function App() {
  const [feedback, setFeedback] = useState(() => {
    const saved = localStorage.getItem("feedback");
    return saved
      ? JSON.parse(saved)
      : { good: 0, neutral: 0, bad: 0 };
  });

  // State her değiştiğinde localStorage'a yaz
  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const handleFeedback = type => {
    setFeedback(prev => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
  };

  const handleReset = () => {
    const resetState = { good: 0, neutral: 0, bad: 0 };
    setFeedback(resetState);
    localStorage.setItem("feedback", JSON.stringify(resetState));
  };

  const totalFeedback =
    feedback.good + feedback.neutral + feedback.bad;

  const positivePercentage =
    totalFeedback > 0
      ? Math.round((feedback.good / totalFeedback) * 100)
      : 0;

  return (
    <div>
      <h1>Sip Happens Café</h1>

      <Options
        onLeaveFeedback={handleFeedback}
        onReset={handleReset}
        totalFeedback={totalFeedback}
      />

      {totalFeedback === 0 ? (
        <p>There is no feedback yet</p>
      ) : (
        <Feedback
          feedback={feedback}
          total={totalFeedback}
          positive={positivePercentage}
        />
      )}
    </div>
  );
}

export default App
