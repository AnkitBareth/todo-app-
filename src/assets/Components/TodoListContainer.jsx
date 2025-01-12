const TodoListContainer = ({ TodoList, handleDeleteButton }) => {
  return (
    <>
      {" "}
      {TodoList.length === 0 ? (
        <p>No todo has been added</p>
      ) : (
        TodoList.map((TodoList) => (
          <div key={TodoList.todoName} className="todo-item-container">
            <p className="todo-item">{TodoList.todoName}</p>
            <p className="todo-item">{TodoList.todoDueDate}</p>
            <p className="todo-item">{TodoList.priority}</p>
            <button
              className="delete-button"
              onClick={() => handleDeleteButton(TodoList.todoName)}
            >
              Delete
            </button>
          </div>
        ))
      )}
    </>
  );
};

export default TodoListContainer;
