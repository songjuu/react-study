//action value
const PLUS_ONE = "counter/PLUS_ONE";
const MINUS_ONE = "counter/MINUS_ONE";
const PLUS_N = "counter/PLUS_N";
const MINUS_N = "counter/MINUS_N";

//action creater:action value를 return 하는 함수
export const plusOne = () => {
  return {
    type: PLUS_ONE,
  };
};

export const minusOne = () => {
  return {
    type: MINUS_ONE,
  };
};

//{}객체로 받아와서 그런건가???{payload} 였을 땐 NaN 이였음
export const plusN = (payload) => {
  // console.log("payload", payload);
  return {
    type: PLUS_N,
    payload,
  };
};

export const minusN = (payload) => {
  return {
    type: MINUS_N,
    payload,
  };
};

//초기 상태값(state)
const initialState = {
  number: 0,
};

//리듀서: 'state'의 변화를 일으키는 함수
//(1) state를 action의 type에 따라 변경하는 함수

//input: state와 action
//action: state에 대해 어떤 액션을 줄건지
//action: 객체라는 것은 action type을 payload 만큼 처리하는 것이다
//payload: 전달되는 실체
const counter = (state = initialState, action) => {
  // console.log(state);
  switch (action.type) {
    case PLUS_ONE:
      return {
        number: state.number + 1,
      };
    case MINUS_ONE:
      return {
        number: state.number - 1,
      };
    case PLUS_N:
      return {
        number: state.number + action.payload,
      };
    case MINUS_N:
      return {
        number: state.number - action.payload,
      };
    default:
      return state;
  }
};

export default counter;
