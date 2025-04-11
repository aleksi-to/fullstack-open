import { useState } from "react";

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const Best = ({ anecdotes, allclicks, max }) => {
  return (
    <>
      <h2>Anecdote with the most votes</h2>
      <p>{anecdotes[max]}</p>
      <p>has {allclicks[max]} votes</p>
    </>
  );
};

const Anecdote = ({ anecdotes, selected, allclicks }) => {
  return (
    <>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <p>has votes {allclicks[selected]}</p>
    </>
  );
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [allclicks, setClicks] = useState(new Uint8Array(anecdotes.length));
  const [max, setMax] = useState(0);

  const handleNext = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex);
    handleMax();
  };

  const handleVote = () => {
    const copy = [...allclicks];
    copy[selected] += 1;
    setClicks(copy);
    handleMax();
  };

  const handleMax = () => {
    for (let i = 0; i < allclicks.length; i++) {
      if (allclicks[i] > allclicks[max]) {
        setMax(i);
      }
    }
  };

  return (
    <div>
      <Anecdote
        anecdotes={anecdotes}
        selected={selected}
        allclicks={allclicks}
      />
      <Button onClick={handleVote} text={"vote"} />
      <Button onClick={handleNext} text={"next anecdote"} />
      <Button onClick={handleMax} text={"MAX"} />
      <Best anecdotes={anecdotes} allclicks={allclicks} max={max} />
    </div>
  );
};

export default App;
