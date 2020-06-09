// @ts-nocheck
import Web3 from "web3";
import { TODO_LIST_ABI, TODO_LIST_ADDRESS } from "./config";

export const helper = async (setAccount, setToDoListContract) => {
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);

    try {
      await window.ethereum.enable();
      console.log("ethereum ===> ", window.ethereum);
      console.log("web3===> ", window.web3.eth);
      const todoListContract = new window.web3.eth.Contract(
        TODO_LIST_ABI,
        TODO_LIST_ADDRESS
      );
      const taskCount = await todoListContract.methods.taskCount().call();

      setAccount(window.web3.eth.accounts.givenProvider.selectedAddress);
      console.log("toDoListContract===> ", todoListContract);
      console.log("taskCount===> ", taskCount);

      setToDoListContract(todoListContract);
      window.web3.eth.sendTransaction({
        /* ... */
      });
    } catch (error) {
      console.log(" err ===> User denied account access...");
    }
  } else if (window.web3) {
    window.web3 = new Web3(window.web3.currentProvider);
    window.web3.eth.sendTransaction({
      /* ... */
    });
  } else {
    console.log(
      "Non-Ethereum browser detected. You should consider trying MetaMask!"
    );
  }
};
