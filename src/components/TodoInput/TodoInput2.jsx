import React from 'react';
import './TodoInput.css';
import { useState } from 'react';

function TodoInput({ placeholder, value, onChange,addTodo }) {
    const [text, setText] = useState("");
  const [showButton, setShowButton] = useState(false);

  const onAdd = () => {
    addTodo((prev) => [...prev, { todo: text, desc: text, id: prev.length + 1 }]);
    setText("");
    setShowButton(false);
  }
  return (
    <section className="inputHolder">
       <input 
          placeholder="Add a Task..." 
          value={text}
          onChange={(e) => setText(e.target.value)}
          onFocus={() => setShowButton(true)}
          onBlur={() => !text && setShowButton(false)}
          className="inputStyle"
        />
      {showButton && <button className="addBtn" onClick={onAdd} >Add</button>}
    </section>
  );
}

export default TodoInput;
