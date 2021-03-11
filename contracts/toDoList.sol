pragma solidity ^0.5.0;


contract TodoList {
    // state veriables and they have to be typed
    uint256 public taskCount = 0;
    string name = "hill";
    mapping(uint256 => Task) public tasks;

    //just a fuction to practice solidity language,
    function hello() public view returns (string memory) {
        // view means we are not changing anything in the contract
        return "hello word ";
    }

    struct Task {
        uint256 id;
        string content;
        bool completed;
    }

    // array of peopel of type Person
     Person[] public people;
     // this index is responsible to track the indexs of the array, every time we add somthing to the array we increment it
     uint256 public index;
     struct Person{
         string name;
         string lastName;
     }

//memory  create a enough  space for the param of method in runtime,
    function createTask(string memory passedContent) public {
        taskCount++;
        tasks[taskCount] = Task(taskCount, passedContent, false);
    }

    // this the constructor for the TododlIst
    constructor() public {
        createTask("this is the first task .... ");
    }
}
