import React, { useState } from "react";
import { Card, Space } from "antd";
import { auth, googleProvider } from "../../config/firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import ForumLogo from "./logo.jpg";
import "./auth.css";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setEmail("");
      navigate("/home");
    } catch (err) {
      console.log(err);
    }
  };
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      setEmail("");
      setPassword("");
      navigate("/home");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="auth">
      <Space direction="vertical" size={16}>
        <Card
          style={{
            width: 480,
            padding: "60px 15px",
          }}
        >
          <div className="logo">
            <img className="forum__logo" src={ForumLogo} alt="" />
            <h1>Forum</h1>
          </div>
          <div className="login">
            <b className="email">Email address</b>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="inputEmail"
              type="email"
              placeholder="example@gmail.com"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="inputEmail"
            />
            <button onClick={login} className="login__btn">
              Login
            </button>
            <div className="btn-wrapper">
              <button onClick={signInWithGoogle} className="sign__in">
                Sign in
              </button>
              <button className="sign__in">Sign up</button>
            </div>
          </div>
        </Card>
      </Space>
    </div>
  );
};

export default Auth;
