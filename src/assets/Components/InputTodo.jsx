const InputForTodo = ({ handleTodoItem, todoName }) => {
  return (
    <input
      className="input-for-todo item"
      type="text"
      placeholder="What needs to be done?"
      value={todoName}
      onChange={(event) => handleTodoItem(event)}
    />
  );
};

export default InputForTodo;
