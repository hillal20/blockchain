pragma solidity ^0.5.0;


contract TodoList {
    // state veriable
    uint256 public taskCount = 0;

    struct Task {
        uint256 id;
        string content;
        bool completed;
    }

    mapping(uint256 => Task) public tasks;

    function createTask(string memory passedContent) public {
        taskCount++;
        tasks[taskCount] = Task(taskCount, passedContent, false);
    }

    // this the constructor for the TododlIst
    constructor() public {
        createTask("this is the first task .... ");
    }
}
