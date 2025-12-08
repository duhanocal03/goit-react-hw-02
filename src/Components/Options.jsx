export default function Options({ onLeaveFeedback, onReset, totalFeedback }) {
  return (
    <div>
      <h2>Please leave your feedback about our service by selecting one of the options below.</h2>

      <button onClick={() => onLeaveFeedback("good")}>Good</button>
      <button onClick={() => onLeaveFeedback("neutral")}>Neutral</button>
      <button onClick={() => onLeaveFeedback("bad")}>Bad</button>

      {/* Reset butonu sadece feedback varsa görünür */}
      {totalFeedback > 0 && (
        <button onClick={onReset}>Reset</button>
      )}
    </div>
  );
}
