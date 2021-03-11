// @ts-nocheck
import React, { useState, useEffect } from "react";
import "./App.css";
import { helper } from "./helper";

const App = () => {
  const [task, setTak] = useState("");
  const [account, setAccount] = useState("");
  const [toDoListContract, setToDoListContract] = useState({});
  const [taskCount, setTaskCount] = useState("");
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    window.addEventListener(
      "load",
      helper(setAccount, setToDoListContract, setTaskCount, setTasks)
    );
  }, [setToDoListContract, taskCount, setAccount]);

  console.log("contract===>", toDoListContract.methods);

  return (
    <div className="App container">
      <h1> Welcome to React App</h1>
      <h3> Account : {account}</h3>
      <h3> taskCount # : {taskCount}</h3>
      <div>
        {" "}
        List Of tasks :{" "}
        {tasks.map((t, i) => (
          <div key={i}>
            <input type="checkbox" />
            {t.content}
          </div>
        ))}
      </div>
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
            toDoListContract.methods
              .createTask(task)
              .send({ from: account })
              .once("receipt", (res) => console.log("res ==> ", res));
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default App;
