import React from "react";

function TodoList({ todos, setTodos, listIsDone }) {
  return (
    <div>
      <h2>{listIsDone ? "DoneList" : "TodoList"}</h2>
      <div>
        {todos
          .filter((t) => {
            return t.isDone === listIsDone;
          })
          .map((todo) => {
            return (
              <div
                style={{
                  border: "1px solid black",
                  padding: "10px",
                  margin: "10px",
                }}
              >
                <p>{todo.id}</p>
                <p>{todo.title}</p>
                <p>{todo.contents}</p>
                <p>{todo.isDone.toString()}</p>
                <button
                  onClick={() => {
                    const newTodos = todos.filter(
                      (filteredTodo) => filteredTodo.id !== todo.id
                    );
                    setTodos(newTodos);
                  }}
                >
                  삭제
                </button>
                <button
                  onClick={() => {
                    //새로운 배열 생성
                    const newTodos = todos.map((item) => {
                      if (item.id === todo.id) {
                        return { ...item, isDone: !item.isDone };
                      } else {
                        return item;
                      }
                    });

                    //setTodos
                    setTodos(newTodos);
                  }}
                >
                  {listIsDone ? "취소" : "완료"}
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default TodoList;
