import React, { useState } from 'react';
import './TodoInput.css';

function TodoInput({ addTodo }) {
  const [text, setText] = useState("");
  const [showButton, setShowButton] = useState(false);

  const onAdd = () => {
    if (text.trim()) {
      addTodo({
        todo: text,
        desc: text,
        id: Date.now(), // Use a unique id for each todo
      });
      setText("");
      setShowButton(false);
    }
  };

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
      {showButton && <button className="addBtn" onClick={onAdd}>Add</button>}
    </section>
  );
}

export default TodoInput;
