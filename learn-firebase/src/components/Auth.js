// components/Auth.js
import React, { useState } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    }
    if (name === "password") {
      setPassword(value);
    }
  };
  // onChange={(e)=>setEmail(e.target.value)} ???

  const signUp = async (event) => {
    event.preventDefault();
    try {
      //이메일로 회원가입(파라미터는 auth객체, 이메일, 패스워드)
      //auth객체는 firebase에 만들어놨잖슴
      const userCredential = await createUserWithEmailAndPassword(
        //비동기 함수에 await
        auth,
        email,
        password
      );
    } catch (error) {
      console.error("회원가입 실패입니다. 다시 입력해주세요.");
    }
  };

  const signIn = async (event) => {
    event.preventDefault();
    //이메일로 로그인
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
    } catch (error) {
      console.error("로그인 실패입니다. 다시 시도해주세요.");
    }
  };

  //로그아웃
  const logOut = async (event) => {
    event.preventDefault();

    await signOut(auth);
  };

  return (
    <div>
      <h2>로그인 컴포넌트</h2>
      <form>
        <div>
          <label>이메일 : </label>
          <input
            type="email"
            value={email}
            name="email"
            onChange={onChange}
            required
          ></input>
        </div>
        <div>
          <label>비밀번호 : </label>
          <input
            type="password"
            value={password}
            name="password"
            onChange={onChange}
            required
          ></input>
        </div>
        <button onClick={signUp}>회원가입</button>
        <button onClick={signIn}>로그인</button>
        <button onClick={logOut}>로그아웃</button>
      </form>
    </div>
  );
};

export default Auth;
