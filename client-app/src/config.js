export const TODO_LIST_ADDRESS = "0x94Fa5b73E7C81b4479Dbe38D61CDa48f58B3E97c";

export const TODO_LIST_ABI = [
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
    constant: undefined,
  },
  {
    constant: true,
    inputs: [],
    name: "taskCount",
    outputs: [[Object]],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0xb6cb58a5",
  },
  {
    constant: true,
    inputs: [[Object]],
    name: "tasks",
    outputs: [[Object], [Object], [Object]],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x8d977672",
  },
  {
    constant: false,
    inputs: [[Object]],
    name: "createTask",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0x111002aa",
  },
];
