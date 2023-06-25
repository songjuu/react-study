import React, { useState } from "react";
import Input from "./components/Input";
import uuid from "react-uuid";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([
    {
      id: uuid(),
      title: "테스트 제목1",
      contents: "테스트 내용1",
      isDone: false,
    },
    {
      id: uuid(),
      title: "테스트 제목2",
      contents: "테스트 내용2",
      isDone: false,
    },
    {
      id: uuid(),
      title: "테스트 제목3",
      contents: "테스트 내용3",
      isDone: true,
    },
    {
      id: uuid(),
      title: "테스트 제목4",
      contents: "테스트 내용4",
      isDone: false,
    },
  ]);

  return (
    <div>
      <header
        style={{
          backgroundColor: "#dbe9ff",
          padding: "10px",
        }}
      >
        헤더
      </header>
      <main
        style={{
          backgroundColor: "#fffadb",
          padding: "10px",
        }}
      >
        <Input todos={todos} setTodos={setTodos} />
        <div>
          <h1>리스트 영역</h1>
          <TodoList todos={todos} setTodos={setTodos} listIsDone={false} />
          <TodoList todos={todos} setTodos={setTodos} listIsDone={true} />
        </div>
      </main>
      <footer
        style={{
          backgroundColor: "#ffebfe",
          padding: "10px",
        }}
      >
        푸터
      </footer>
    </div>
  );
}

export default App;
