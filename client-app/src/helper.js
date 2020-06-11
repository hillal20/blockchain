// @ts-nocheck
import Web3 from "web3";
import { TODO_LIST_ABI, TODO_LIST_ADDRESS } from "./config";

export const helper = async (
  setAccount,
  setToDoListContract,
  setTaskCount,
  setTasks
) => {
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);

    try {
      await window.ethereum.enable();
      console.log("ethereum ===> ", window.ethereum.selectedAddress);
      console.log("web3===> ", window.web3.eth);

      setAccount(window.web3.eth.givenProvider.selectedAddress);

      const todoListContract = new window.web3.eth.Contract(
        TODO_LIST_ABI,
        TODO_LIST_ADDRESS
      );
      setToDoListContract(todoListContract);
      console.log("toDoListContract===> ", todoListContract);

      const taskCountPromise = await todoListContract.methods.taskCount();
      const taskCount = await taskCountPromise.call();
      setTaskCount(taskCount);

      for (let i = 0; i < taskCount; i++) {
        const task = await todoListContract.methods.tasks(i).call();
        setTasks((oldTasks) => [...oldTasks, task]);
        console.log("taskCount===> ", task);
      }

      console.log(" ======> working =======> ");

      // window.web3.eth.sendTransaction({
      //   /* ... */
      // });
    } catch (error) {
      console.log(" err ===> User denied account access...");
    }
  } else if (window.web3) {
    window.web3 = new Web3(window.web3.currentProvider);
    console.log("web3 2 ===> ", window.web3);

    // window.web3.eth.sendTransaction({
    //   /* ... */
    // });
  } else {
    console.log(
      "Non-Ethereum browser detected. You should consider trying MetaMask!"
    );
  }
};
