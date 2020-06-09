// @ts-nocheck
import React, { useState, useEffect } from "react";
import "./App.css";
import { helper } from "./helper";

const App = () => {
  const [task, setTak] = useState("");
  const [account, setAccount] = useState("");
  const [toDoListContract, setToDoListContract] = useState({});

  window.addEventListener("load", helper(setAccount), setToDoListContract);

  useEffect(() => {}, []);

  return (
    <div className="App container">
      <h1> Welcome to React App</h1>
      <h3> Account : {account}</h3>
      <div
        className="form"
        style={{
          display: "flex",
          alignItems: "center",
          width: "50vw",
          flexDirection: "column",
        }}
      >
        <input
          className="todo-form-input"
          name="todo-form"
          placeholder="enter your task"
          onChange={(e) => {
            console.log(" value  ===> ", e.target.value);
            setTak(e.target.value);
          }}
        />
        <button
          className="todo-form-button"
          onClick={() => {
            console.log(" send  ====> ", task);
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default App;
