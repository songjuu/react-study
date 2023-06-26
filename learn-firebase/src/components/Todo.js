// components/Todo.js
import React, { useEffect, useState } from "react";
import TodoItem from "../TodoItem";
import { addDoc, collection, getDocs, query } from "firebase/firestore";
import { db } from "../firebase";

const Todo = () => {
  const [todos, setTodos] = useState([
    { text: "할 일 1", isDone: false, id: 1 },
    { text: "할 일 2", isDone: true, id: 2 },
  ]);

  //데이터 읽어오기
  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, "todos")); //어떤 식으로 데이터 가져올건데 쿼리 만들어
      //querySnaphshot 해당 문서 정보, 접근 가능하게 해줌
      const querySnapshot = await getDocs(q); // getDocs 비동기적 함수, querySnapshot 반환

      const initialTodos = []; //기본 초깃값 todos
      querySnapshot.forEach((doc) => {
        const data = {
          id: doc.id,
          ...doc.data(), //?
        };
        initialTodos.push(data);
      });
      setTodos(initialTodos);
    };
    fetchData();
  }, []);

  const [text, setText] = useState("");
  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "text") {
      setText(value);
    }
  };

  //데이터 추가하기
  const addTodo = async (event) => {
    event.preventDefault();
    const newTodo = { text: text, isDone: false }; //새로운 할일목록
    setTodos(() => {
      return [...todos, newTodo];
    });
    // console.log(newTodo);
    setText("");

    //Firestore에서 'todos' 컬렉션에 새로운 할 일 문서 추가하는거
    const collectionRef = collection(db, "todos");
    await addDoc(collectionRef, newTodo); //todos 컬렉션에 newTodo 문서 추가
  };

  return (
    <div>
      <h2>할 일 컴포넌트</h2>
      <form>
        <div>
          <label>할 일 : </label>
          <input
            type="text"
            value={text}
            name="text"
            onChange={onChange}
            required
          ></input>
          <button onClick={addTodo}>추가</button>
        </div>
      </form>
      <h3>Working</h3>
      {todos
        .filter((todo) => !todo.isDone)
        .map((todo) => {
          return <TodoItem key={todo.id} todo={todo} setTodos={setTodos} />;
        })}
      <h3>Done</h3>
      {todos
        .filter((todo) => todo.isDone)
        .map((todo) => {
          return <TodoItem key={todo.id} todo={todo} setTodos={setTodos} />;
        })}
    </div>
  );
};

export default Todo;
