import "./Todo-Create.css";
import { useState } from "react";
const TodoCreate = (props) => {
  const [getInput, setInput] = useState();
  const handleSubmit = (event) => {
    event.preventDefault();
    const newTodo = {
      id: Math.floor(Math.random() * 100) + 100,
      title: getInput,
    };
    props.onCreateTodo(newTodo);
    setInput('');
  };
  const handleInputTodo = (event) => {
    setInput(event.target.value);
    console.log(getInput);
  };
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input type="text" value={getInput} onChange={handleInputTodo} />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoCreate;
