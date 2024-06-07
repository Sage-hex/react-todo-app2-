// Import necessary modules
import React, { useReducer } from "react";
import "./TodoApp.css";
import TodoInput from "./components/TodoInput/TodoInput";
import AddedTodo from "./components/AddedTodo/AddedTodo";
import "./components/AddedTodo/AddedTodo.css";

// Define the initial state
const initialState = [];

// Define the reducer function
function todoReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    case "EDIT_TODO":
      return state.map((todo) =>
        todo.id === action.payload.id ? { ...todo, ...action.payload.updatedTodo } : todo
      );
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload.id);
    default:
      return state;
  }
}

function TodoApp() {
  // Use the useReducer hook with the reducer function and initial state
  const [list, dispatch] = useReducer(todoReducer, initialState);

  // Function to add a new todo
  const addTodo = (newTodo) => {
    dispatch({ type: "ADD_TODO", payload: newTodo });
  };

  // Function to handle editing a todo
  const handleEdit = (id, updatedTodo) => {
    dispatch({ type: "EDIT_TODO", payload: { id, updatedTodo } });
  };

  // Function to handle deleting a todo
  const handleDelete = (id) => {
    dispatch({ type: "DELETE_TODO", payload: { id } });
  };

  return (
    <main className="TodoAppContainer">
      <section className="TodoAppInnerContainer">
        <h1 className="TodoAppTitle">To-do App Tracker</h1>
        <TodoInput addTodo={addTodo} />
        <div className="TodoListHolder">
          {list.map((e) => (
            <div key={e.id}>
              <AddedTodo
                todo={e.todo}
                desc={e.desc}
                id={e.id}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            </div>
          ))}
        </div>
        <p className="TodoAppDescription" style={{ fontSize: "14px" }}>
          A simple todo app built with ❤️ By Koisochukwu Emmanuel using React.js
        </p>
        <p className="TodoAppDescription">
          <a href="https://github.com/sage-hex/react-todo-app">View on Github</a>
        </p>
      </section>
      
    </main>
  );
}

export default TodoApp;
