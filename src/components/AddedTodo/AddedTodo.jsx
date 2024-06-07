import React, { useReducer } from "react";
import "./AddedTodo.css";
import "../TodoInput/TodoInput.css";

// Define action types
const ActionType = {
  SET_EDIT_MODE: "SET_EDIT_MODE",
  SET_TODO: "SET_TODO",
  UPDATE_TODO: "UPDATE_TODO",
  DELETE_TODO: "DELETE_TODO",
};

// Define reducer function
function addedTodoReducer(state, action) {
  switch (action.type) {
    case ActionType.SET_EDIT_MODE:
      return { ...state, isEditing: action.payload };
    case ActionType.SET_TODO:
      return { ...state, newTodo: action.payload };
    default:
      return state;
  }
}

function AddedTodo({ todo, desc, id, onEdit, onDelete }) {
  const initialState = {
    isEditing: false,
    newTodo: todo,
  };

  const [state, dispatch] = useReducer(addedTodoReducer, initialState);

  const handleEdit = () => {
    onEdit(id, { todo: state.newTodo, desc: state.newTodo });
    dispatch({ type: ActionType.SET_EDIT_MODE, payload: false });
  };

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <section className="AddedListContainer">
      <div className="AddedListItem">
        {state.isEditing ? (
          <div className="editForm">
            <input
              type="text"
              value={state.newTodo}
              onChange={(e) =>
                dispatch({ type: ActionType.SET_TODO, payload: e.target.value })
              }
              className="inputBtn"
            />
          </div>
        ) : (
          <div className="content">
            <h3>{todo}</h3>
            <p>{desc}</p>
          </div>
        )}
        <div className="btnContainer">
          {state.isEditing ? (
            <button className="saveBtn" onClick={handleEdit}>Save</button>
          ) : (
            <button className="editBtn" onClick={() => dispatch({ type: ActionType.SET_EDIT_MODE, payload: true })}>Edit</button>
          )}
          <button className="delBtn" onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </section>
  );
}

export default AddedTodo;
