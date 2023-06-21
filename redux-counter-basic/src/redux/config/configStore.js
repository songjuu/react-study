//중앙 데이터 관리소(store)를 설정하는 부분

import { createStore } from "redux";
import { combineReducers } from "redux";
import counter from "../modules/counter";
import users from "../modules/user";

const rootReducer = combineReducers({
  counter,
  users,
}); //reducer의 묶음들
const store = createStore(rootReducer);

export default store;
//export default로 하면 import 할 때 중괄호 안 써줘도 됨
