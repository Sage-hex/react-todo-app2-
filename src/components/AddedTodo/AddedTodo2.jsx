

import React, { useState } from "react";
import "./AddedTodo.css";
import "../TodoInput/TodoInput.css"; 

function AddedTodo({ todo, desc, id, list, setList, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTodo, setNewTodo] = useState(todo);

  const deleteTodo = () => {
    const filteredList = list.filter((e) => e.id !== id);
    setList(filteredList);
  };

  const saveTodo = () => {
    onEdit(id, { todo: newTodo, desc: newTodo });
    setIsEditing(false);
  };
  //let content;
  // if (isEditing) {
  //   content = (
  //     <div className="editForm">
  //       <input
  //         className="inputStyle" 
  //         type="text"
  //         value={newTodo}
  //         onChange={(e) => setNewTodo(e.target.value)}
  //       />
  //       <button className="inputButton" onClick={saveTodo}>Save</button> 
  //     </div>
  //   );
  // } else {
  //   content = (
  //     <div className="content">
  //       <h3>{todo}</h3>
  //       <p>{desc}</p>
  //     </div>
  //   );
  // }

  // let editButton;
  // if (isEditing) {
  //   editButton = null; // Hide Edit button when editing
  // } else {
  //   editButton = (
  //     <button className="editBtn" onClick={() => setIsEditing(true)}>Edit</button>
  //   );
  // }


  return (
    <section className="AddedListContainer">
      <div className="AddedListItem">
        {isEditing ? (
          <div className="editForm">
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
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
        {isEditing ? (
            <button className="saveBtn" onClick={saveTodo}>Save</button> 
          ) : (
            <button className="editBtn" onClick={() => setIsEditing(true)}>Edit</button> 
          )}
          {/*<button className="editBtn" onClick={() => setIsEditing(true)}>Edit</button>*/}
          <button className="delBtn" onClick={deleteTodo}>Delete</button>
        </div>
      </div>
    </section>
  );
}

export default AddedTodo;
