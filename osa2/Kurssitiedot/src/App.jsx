const Course = ({ course }) => (
  <div>
    <h1>{course.name}</h1>
    <ul>
      {course.parts.map((part) => (
        <li key={part.id}>
          {part.name} {part.exercises}
        </li>
      ))}
    </ul>
  </div>
);

const App = () => {
  const course = {
    name: "Half Stack application development",
    id: 1,
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
      {
        name: "Redux",
        exercises: 11,
        id: 4,
      },
    ],
  };
    
  // TODO toteuta summa ilman luvut-muuttujaa  
  const luvut = course.parts.map((part) => part.exercises);
  const summa = luvut.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0,
  );
  return (
    <div>
      <Course course={course} />
      <b>total of {summa} exercises</b>
    </div>
  );
};

export default App;
