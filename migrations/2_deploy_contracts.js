// @ts-ignore
var TodoList = artifacts.require("./toDoList.sol");

module.exports = function (deployer) {
  deployer.deploy(TodoList);
};
