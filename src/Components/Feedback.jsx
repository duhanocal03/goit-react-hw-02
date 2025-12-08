export default function Feedback({ feedback, total, positive }) {
  return (
    <div>
      <h2>Statistics</h2>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>

      <p>Total: {total}</p>
      <p>Positive: {positive}%</p>
    </div>
  );
}
