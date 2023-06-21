import { useDispatch, useSelector } from "react-redux";
import { minusOne, plusN, minusN } from "./redux/modules/counter";
import "./App.css";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);

  const counter = useSelector((state) => {
    return state.counter;
  });

  // useEffect(() => {
  //   console.log("number ->", number);
  // }, [number]);

  //dispatch 가져오기
  const dispatch = useDispatch();

  return (
    <>
      {/* 근데 event 앞에 +안 했을때 마이너스는 숫자가 됐는데 +는 안됨?? */}
      <div>현재 카운트: {counter.number}</div>
      <div>
        <input
          type="number"
          value={number}
          onChange={(event) => {
            const { value } = event.target;
            setNumber(+value);
          }}
        />
      </div>
      <button
        onClick={() => {
          //+1을 해주는 로직을 써주면 된다.
          // dispatch(plusOne());
          dispatch(plusN(number));
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          //+1을 해주는 로직을 써주면 된다.
          dispatch(minusN(number));
        }}
      >
        -
      </button>
    </>
  );
}

export default App;
