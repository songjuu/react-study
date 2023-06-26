// components/TodoItem.js
import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import React from "react";
import { db } from "./firebase";

const TodoItem = ({ todo, setTodos }) => {
  //데이터 수정하기
  const updateTodo = async (event) => {
    //이 로직이 있어야 firebase에서도 업뎃이 되는겨
    const todoRef = doc(db, "todos", todo.id);
    // console.log(todoRef);
    await updateDoc(todoRef, { ...todo, isDone: !todo.isDone });

    //취소면 완료 완료면 취소
    setTodos((prev) => {
      return prev.map((element) => {
        // console.log(element.id, element.text);
        if (element.id === todo.id) {
          return { ...element, isDone: !element.isDone };
        } else {
          return element;
        }
      });
    });
  };

  const deleteTodo = async (event) => {
    const todoRef = doc(db, "todos", todo.id);
    await deleteDoc(todoRef);

    setTodos((prev) => {
      return prev.filter((element) => element.id !== todo.id);
    });
  };

  return (
    <div key={todo.id}>
      <span>{todo.text}</span>
      <button onClick={updateTodo}>{todo.isDone ? "취소" : "완료"}</button>
      <button onClick={deleteTodo}>삭제</button>
    </div>
  );
};

export default TodoItem;
