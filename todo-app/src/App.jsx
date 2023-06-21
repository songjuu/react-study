import { useState } from "react";
import "./App.css";
import uuid from "react-uuid";
import TodoList from "./components/TodoList";

function App() {
  const initialState = [
    {
      id: uuid(),
      title: "텍스트 제목 1",
      contents: "텍스트 내용 1",
      isDone: false,
    },
    {
      id: uuid(),
      title: "텍스트 제목 2",
      contents: "텍스트 내용 2",
      isDone: true,
    },
    {
      id: uuid(),
      title: "",
      contents: "",
      isDone: false,
    },
  ];

  const [todos, setTodos] = useState(initialState);
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  return (
    <>
      <header
        style={{
          backgroundColor: "#f5dfa2",
          padding: "10px",
        }}
      >
        헤더입니다.
      </header>
      <main
        style={{
          backgroundColor: "#c3f7c9",
          padding: "10px",
        }}
      >
        <div>
          <h3>Input 영역</h3>
          <div>
            <form
              onSubmit={(event) => {
                event.preventDefault();

                //TODO: 넣을 객체 생성
                const newTodo = {
                  id: uuid(),
                  title,
                  contents,
                  isDone: false,
                };

                //TODO: todos state에 넣어줘야해
                setTodos([...todos, newTodo]);
              }}
            >
              <input
                type="text"
                placeholder="제목입력"
                value={title}
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
              />
              <input
                type="text"
                placeholder="내용입력"
                value={contents}
                onChange={(event) => {
                  setContents(event.target.value);
                }}
              />
              <button>제출</button>
            </form>
          </div>
        </div>
        <TodoList todos={todos} setTodos={setTodos} listIsDone={false} />
        <TodoList todos={todos} setTodos={setTodos} listIsDone={true} />
      </main>
      <footer
        style={{
          backgroundColor: "#c3ddf7",
          padding: "10px",
        }}
      >
        푸터입니다.
      </footer>
    </>
  );
}

export default App;
