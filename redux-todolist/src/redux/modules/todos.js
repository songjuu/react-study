import shortid from "shortid";

const initialState = [
  {
    id: shortid.generate(),
    title: "리액트",
    body: "리액트 공부하기",
    isDone: false,
  },
  {
    id: shortid.generate(),
    title: "자바스크립트",
    body: "자바스크립트 공부하기",
    isDone: true,
  },
  {
    id: shortid.generate(),
    title: "리액트1",
    body: "리덕스 공부하기",
    isDone: false,
  },
  {
    id: shortid.generate(),
    title: "취미",
    body: "수영하기",
    isDone: true,
  },
];

//reducer
//action ->type, payload(payload만큼 처리해줘)
const todos = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload);
    case "SWITCH_TODO":
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, isDone: !todo.isDone };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};

export default todos;
