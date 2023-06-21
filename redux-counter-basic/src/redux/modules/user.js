//초기 상태값(state)
const initialState = {
  userId: 123,
};

//리듀서: 'state'의 변화를 일으키는 함수
//(1) state를 action의 type에 따라 변경하는 함수

//input: state와 action
//action: state에 대해 어떤 액션을 줄건지
const users = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default users;
