import { React, useState } from "react";
import uuid from "react-uuid";

function Input({ todos, setTodos }) {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const newTodo = {
            id: uuid(),
            title,
            contents,
            isDone: false,
          };
          setTodos([...todos, newTodo]);
          setTitle("");
          setContents("");
        }}
      >
        <input
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          value={contents}
          onChange={(e) => {
            setContents(e.target.value);
          }}
        />
        <button type="submit">입력</button>
      </form>
    </div>
  );
}

export default Input;
