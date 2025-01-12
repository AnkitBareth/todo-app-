import Container from "./assets/Components/Container";
import InputForTodo from "./assets/Components/InputTodo";
import "./App.css";
import InputForDueDate from "./assets/Components/DueDateInput";
import PriorityBox from "./assets/Components/PriorityBox";
import AddButton from "./assets/Components/AddButton";
import TaskContainer from "./assets/Components/TaskContainer";
import TodoListContainer from "./assets/Components/TodoListContainer";
import { useState } from "react";

function App() {
  const [TodoList, setTodoList] = useState([]);
  const [todoName, setTodoName] = useState("");
  const [todoDueDate, setTodoDueDate] = useState("");
  const [priority, setPriority] = useState("");

  const handleTodoItem = (event) => {
    setTodoName(event.target.value);
  };
  const handleDueDate = (event) => {
    setTodoDueDate(event.target.value);
  };

  const handlePriority = (event) => {
    setPriority(event.target.value);
  };

  const handleClickedButton = () => {
    const newTodo = {
      todoName,
      todoDueDate,
      priority,
    };
    setTodoList((prevList) => [...prevList, newTodo]);
    setTodoName("");
    setTodoDueDate("");
    setPriority("");
  };
  const handleDeleteButton = (todoName) => {
    const newTodoItem = TodoList.filter((item) => item.todoName != todoName);
    setTodoList(newTodoItem);
  };
  return (
    <>
      <div className="heading">
        <h1>My Todo List</h1>
      </div>
      <Container>
        <InputForTodo
          handleTodoItem={handleTodoItem}
          todoName={todoName}
        ></InputForTodo>
        <InputForDueDate
          handleDueDate={handleDueDate}
          todoDueDate={todoDueDate}
        ></InputForDueDate>
        <PriorityBox
          handlePriority={handlePriority}
          priority={priority}
        ></PriorityBox>
        <AddButton handleClickedButton={handleClickedButton}></AddButton>
      </Container>
      <TaskContainer>
        <TodoListContainer
          TodoList={TodoList}
          handleDeleteButton={handleDeleteButton}
        ></TodoListContainer>
      </TaskContainer>
    </>
  );
}

export default App;
