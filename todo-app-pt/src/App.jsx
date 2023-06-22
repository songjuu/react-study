import React, { useState } from "react";

import uuid from "react-uuid";
import InputForm from "./components/InputForm";

function App() {
  // const [title, setTitle] = useState("");
  // const [contents, setContents] = useState("");

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
          backgroundColor: "#d1ffdd",
          padding: "10px",
        }}
      >
        헤더
      </header>
      <main
        style={{
          backgroundColor: "#feffd6",
          padding: "10px",
        }}
      >
        <InputForm todos={todos} setTodos={setTodos} />
        <div>
          <h1>LIST 영역</h1>
          {/* TODO: list 영역 컴포넌트 나누기..TT */}
          <div>
            <h2>할 일 목록</h2>
            {todos
              .filter((todo) => {
                return todo.isDone === false;
              })
              .map((todo) => {
                return (
                  <div
                    key={todo.id}
                    style={{
                      border: "1px solid black",
                      margin: "10px",
                      paddingLeft: "10px",
                    }}
                  >
                    <p>{todo.id}</p>
                    <h3>{todo.title}</h3>
                    <p>{todo.contents}</p>
                    <p>완료여부: {todo.isDone.toString()}</p>
                    <div
                      style={{
                        paddingBottom: "10px",
                      }}
                    >
                      <button
                        onClick={() => {
                          const newTodos = todos.map((item) => {
                            if (item.id === todo.id) {
                              return {
                                ...item,
                                isDone: !item.isDone,
                              };
                            } else {
                              return item;
                            }
                          });
                          setTodos(newTodos);
                        }}
                      >
                        완료
                      </button>
                      <button
                        onClick={() => {
                          const deletedTodos = todos.filter((item) => {
                            return item.id !== todo.id;
                          });
                          setTodos(deletedTodos);
                        }}
                      >
                        삭제
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
          <div>
            <h2>완료 목록</h2>
            {todos
              .filter((todo) => {
                return todo.isDone === true;
              })
              .map((todo) => {
                return (
                  <div
                    key={todo.id}
                    style={{
                      border: "1px solid black",
                      margin: "10px",
                      paddingLeft: "10px",
                    }}
                  >
                    <p>{todo.id}</p>
                    <h3>{todo.title}</h3>
                    <p>{todo.contents}</p>
                    <p>완료여부: {todo.isDone.toString()}</p>
                    <div
                      style={{
                        paddingBottom: "10px",
                      }}
                    >
                      <button
                        onClick={() => {
                          const newTodos = todos.map((item) => {
                            if (item.id === todo.id) {
                              return {
                                ...item,
                                isDone: !item.isDone,
                              };
                            } else {
                              return item;
                            }
                          });
                          setTodos(newTodos);
                        }}
                      >
                        취소
                      </button>
                      <button
                        onClick={() => {
                          const deletedTodos = todos.filter((item) => {
                            return item.id !== todo.id;
                          });
                          setTodos(deletedTodos);
                        }}
                      >
                        삭제
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </main>
      <footer
        style={{
          backgroundColor: "#fae6ff",
          padding: "10px",
        }}
      >
        푸터
      </footer>
    </div>
  );
}

export default App;
