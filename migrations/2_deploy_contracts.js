// @ts-ignore
var TodoList = artifacts.require("./toDoList.sol");

module.exports = (deployer) => {
  deployer.deploy(TodoList);
};
