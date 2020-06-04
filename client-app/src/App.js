import React, { useState, useEffect } from "react";
import "./App.css";
import Web3 from "web3";

function App() {
  const [task, setTak] = useState("");
  const [account, setAccount] = useState("");

  window.addEventListener("load", async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      try {
        await window.ethereum.enable();
        console.log("ethereum ===> ", window.ethereum);

        setAccount(window.web3.eth.accounts.givenProvider.selectedAddress);
        window.web3.eth.sendTransaction({
          /* ... */
        });
      } catch (error) {
        console.log(" err ===> User denied account access...");
      }
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
      console.log("web3===> ", window.web3.eth);
      // Acccounts always exposed
      window.web3.eth.sendTransaction({
        /* ... */
      });
    }
    // Non-dapp browsers...
    else {
      console.log(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  });

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
}

export default App;
