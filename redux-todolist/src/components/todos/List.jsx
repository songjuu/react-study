import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function List() {
  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <h2>TODOLIST</h2>
        {todos
          .filter((todo) => todo.isDone === false)
          .map((todo) => {
            return (
              <div
                key={todo.id}
                style={{
                  border: "1px solid black",
                  padding: "10px",
                  margin: "10px",
                }}
              >
                <div>
                  <Link to={`/${todo.id}`}>상세페이지</Link>
                </div>
                {todo.id}
                <br />
                {todo.title}
                <br />
                {todo.body}
                <br />
                {todo.isDone.toString()}
                <div>
                  <button
                    onClick={() => {
                      dispatch({
                        type: "SWITCH_TODO",
                        payload: todo.id,
                      });
                    }}
                  >
                    완료
                  </button>
                  <button
                    onClick={() => {
                      dispatch({
                        type: "DELETE_TODO",
                        payload: todo.id,
                      });
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
        <h2>DONELIST</h2>
        {todos
          .filter((todo) => todo.isDone === true)
          .map((todo) => {
            return (
              <div
                key={todo.id}
                style={{
                  border: "1px solid black",
                  padding: "10px",
                  margin: "10px",
                }}
              >
                <div>
                  <Link to={`/${todo.id}`}>상세페이지</Link>
                </div>
                {todo.id}
                <br />
                {todo.title}
                <br />
                {todo.body}
                <br />
                {todo.isDone.toString()}
                <div>
                  <button
                    onClick={() => {
                      dispatch({
                        type: "SWITCH_TODO",
                        payload: todo.id,
                      });
                    }}
                  >
                    취소
                  </button>
                  <button
                    onClick={() => {
                      dispatch({
                        type: "DELETE_TODO",
                        payload: todo.id,
                      });
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
  );
}

export default List;
