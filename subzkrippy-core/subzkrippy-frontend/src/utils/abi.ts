export const abi_fundmanager = [
    {
      "type": "function",
      "name": "addFunds",
      "inputs": [],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "merchantBalance",
      "inputs": [{ "name": "", "type": "address", "internalType": "address" }],
      "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "merchants",
      "inputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
      "outputs": [{ "name": "", "type": "address", "internalType": "address" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "payMerchants",
      "inputs": [],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "updateMerchantBalance",
      "inputs": [
        { "name": "amount", "type": "uint256", "internalType": "uint256" },
        { "name": "merchant", "type": "address", "internalType": "address" }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    }
  ];

export const abi_submanager = [
    {
      "type": "function",
      "name": "createPlan",
      "inputs": [
        { "name": "name", "type": "string", "internalType": "string" },
        { "name": "price", "type": "uint256", "internalType": "uint256" },
        {
          "name": "durationInDays",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "hasActiveSubscription",
      "inputs": [
        { "name": "planId", "type": "bytes32", "internalType": "bytes32" },
        { "name": "userId", "type": "bytes32", "internalType": "bytes32" }
      ],
      "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "plans",
      "inputs": [{ "name": "", "type": "bytes32", "internalType": "bytes32" }],
      "outputs": [
        { "name": "name", "type": "string", "internalType": "string" },
        { "name": "price", "type": "uint256", "internalType": "uint256" },
        { "name": "duration", "type": "uint256", "internalType": "uint256" },
        { "name": "merchant", "type": "address", "internalType": "address" },
        { "name": "exists", "type": "bool", "internalType": "bool" }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "renewSubscription",
      "inputs": [
        { "name": "planId", "type": "bytes32", "internalType": "bytes32" },
        { "name": "userId", "type": "bytes32", "internalType": "bytes32" },
        { "name": "newProofHash", "type": "bytes32", "internalType": "bytes32" }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "subscribe",
      "inputs": [
        { "name": "planId", "type": "bytes32", "internalType": "bytes32" },
        { "name": "userId", "type": "bytes32", "internalType": "bytes32" },
        { "name": "proofHash", "type": "bytes32", "internalType": "bytes32" }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "subscriptions",
      "inputs": [
        { "name": "", "type": "bytes32", "internalType": "bytes32" },
        { "name": "", "type": "bytes32", "internalType": "bytes32" }
      ],
      "outputs": [
        { "name": "proofHash", "type": "bytes32", "internalType": "bytes32" },
        { "name": "startTime", "type": "uint256", "internalType": "uint256" },
        { "name": "endTime", "type": "uint256", "internalType": "uint256" },
        { "name": "active", "type": "bool", "internalType": "bool" }
      ],
      "stateMutability": "view"
    },
    {
      "type": "error",
      "name": "SubscriptionManager_PlanAlreadyExists",
      "inputs": []
    },
    {
      "type": "error",
      "name": "SubscriptionManager_PlanDoesNotExist",
      "inputs": []
    },
    {
      "type": "error",
      "name": "SubscriptionManager_SubscriptionInactive",
      "inputs": []
    }
  ];