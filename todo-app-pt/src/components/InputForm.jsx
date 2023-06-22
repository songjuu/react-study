import React from "react";
import { useState } from "react";
import uuid from "react-uuid";

function InputForm({ todos, setTodos }) {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const newTodo = {
            id: uuid(),
            title,
            contents,
            isDone: false,
          };
          setTodos([...todos, newTodo]);
        }}
      >
        <input
          type="text"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <input
          type="text"
          value={contents}
          onChange={(event) => {
            setContents(event.target.value);
          }}
        />
        <button>입력</button>
      </form>
    </div>
  );
}

export default InputForm;
