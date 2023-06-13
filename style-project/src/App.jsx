import React, { useState } from "react";
import "./App.css";
import Button from "./components/button";
import User from "./components/user";

function App() {
  const [users, setUsers] = useState([
    { id: 1, age: 30, name: "송중기" },
    { id: 2, age: 24, name: "송강" },
    { id: 3, age: 21, name: "김유정" },
    { id: 4, age: 29, name: "구교환" },
  ]);

  const [name, setName] = useState("");
  const [age, setAge] = useState();

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  const clickAddButton = () => {
    const newUser = {
      id: users.length + 1,
      age,
      name: name,
    };

    setName("");
    setAge("");
    setUsers([...users, newUser]); //불변성 유지하기 위해 state로 받기위해
  };

  const clickRemoveButtonHandler = (id) => {
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
  };

  return (
    <div>
      <div>
        이름:&nbsp;
        <input value={name} onChange={nameChangeHandler} />
        <br />
        나이:&nbsp;
        <input value={age} onChange={ageChangeHandler} />
        <br />
        <Button clickAddButton={clickAddButton}>추가</Button>
      </div>
      <div className="app-style">
        {users.map((item) => {
          return (
            <User
              key={item.id}
              item={item}
              removeButtonHandler={clickRemoveButtonHandler}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
