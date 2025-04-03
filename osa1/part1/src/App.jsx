import { useState } from "react";

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const increaseGood = () => setGood(good + 1);
  const increaseNeutral = () => setNeutral(neutral + 1);
  const increaseBad = () => setBad(bad + 1);

  const increaseKakka = (props) => {
    return props.setValue(props.value);
  };

  return (
    <>
      <h1>give feedback</h1>
      <Button onClick={increaseGood} text={"good"} />
      <Button onClick={increaseNeutral} text={"neutral"} />
      <Button onClick={increaseBad} text={"bad"} />
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </>
  );
};

export default App;
