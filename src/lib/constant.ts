// export const ActiveChain = "polygon";
export const ActiveChain = "fantom-testnet";
// export const clientId = "446e06f5b29c7422777a4a725d1e680b"; // You can get a client id from dashboard settings
export const clientId = "d75935c2db33dd391882dd2fb2474ceb"; // You can get a client id from dashboard settings
// export const clientId = "0xfa2"; // You can get a client id from dashboard settings
export const AddressZero = "0x0000000000000000000000000000000000000000";
export const MTKAddress = "0x89CAb729b260c1ad8EFD1A764cb29fE2A68cDb24";
// USDT new
export const MTKAddress2 = "0xb3eD35E0e734b63A3C32bF76bFFe4783DE59B591";
export const PoolAddress = "0x456c66b4ea2246166d81772bC9Cc3e9F1D28ee06";
// Mainnet
export const GeniosClubAddress = "0x18642729d5770b18c108D0B991903e857f04497E";
// MLM new
export const GeniosClubAddress2 = "0x3DD9596cdbA2F75D20eBf044a2b740c9A03DDeC8";

export const MTKAbi = [
  {
    inputs: [{ internalType: "address", name: "_owner", type: "address" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "from", type: "address" },
      { indexed: true, internalType: "address", name: "to", type: "address" },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    constant: true,
    inputs: [],
    name: "_decimals",
    outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "_name",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "_symbol",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "address", name: "spender", type: "address" },
    ],
    name: "allowance",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "approve",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "balanceOf",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ internalType: "uint256", name: "amount", type: "uint256" }],
    name: "burn",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "decimals",
    outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "subtractedValue", type: "uint256" },
    ],
    name: "decreaseAllowance",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getOwner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "addedValue", type: "uint256" },
    ],
    name: "increaseAllowance",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ internalType: "uint256", name: "amount", type: "uint256" }],
    name: "mint",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "name",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ internalType: "address", name: "_newOwner", type: "address" }],
    name: "renounceOwnership",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "symbol",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "totalSupply",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "recipient", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "transfer",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "sender", type: "address" },
      { internalType: "address", name: "recipient", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];

export const GeniosClubAbi = [
  {
    inputs: [
      { internalType: "address", name: "id0", type: "address" },
      { internalType: "address", name: "tokenAddr", type: "address" },
      {
        internalType: "address",
        name: "academyAndMarketingAddr",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "userId",
        type: "uint256",
      },
      { indexed: true, internalType: "address", name: "user", type: "address" },
      { indexed: true, internalType: "uint8", name: "level", type: "uint8" },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "G3X7AcademyUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "userId",
        type: "uint256",
      },
      { indexed: true, internalType: "address", name: "user", type: "address" },
      { indexed: true, internalType: "uint8", name: "level", type: "uint8" },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "G3X7ClubUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "userId",
        type: "uint256",
      },
      { indexed: true, internalType: "address", name: "user", type: "address" },
      { indexed: true, internalType: "uint8", name: "level", type: "uint8" },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "G3X7RankUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "userId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      { indexed: true, internalType: "address", name: "from", type: "address" },
      { indexed: false, internalType: "uint8", name: "matrix", type: "uint8" },
      { indexed: false, internalType: "uint8", name: "level", type: "uint8" },
    ],
    name: "MissedTokenReceive",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "user", type: "address" },
      {
        indexed: true,
        internalType: "address",
        name: "referrer",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "userId",
        type: "uint256",
      },
      { indexed: false, internalType: "uint8", name: "matrix", type: "uint8" },
      { indexed: false, internalType: "uint8", name: "level", type: "uint8" },
      { indexed: false, internalType: "uint8", name: "place", type: "uint8" },
    ],
    name: "NewUserPlace",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "userId",
        type: "uint256",
      },
      { indexed: true, internalType: "address", name: "user", type: "address" },
      { indexed: true, internalType: "uint8", name: "level", type: "uint8" },
    ],
    name: "RankEarners",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "user", type: "address" },
      {
        indexed: true,
        internalType: "address",
        name: "referrer",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "userId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "referrerId",
        type: "uint256",
      },
    ],
    name: "Registration",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "userId",
        type: "uint256",
      },
      { indexed: true, internalType: "address", name: "user", type: "address" },
      {
        indexed: true,
        internalType: "address",
        name: "CurrentRef",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
      { indexed: false, internalType: "uint8", name: "matrix", type: "uint8" },
      { indexed: false, internalType: "uint8", name: "level", type: "uint8" },
    ],
    name: "Reinvest",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "userId",
        type: "uint256",
      },
      { indexed: true, internalType: "address", name: "from", type: "address" },
      {
        indexed: true,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      { indexed: false, internalType: "uint8", name: "matrix", type: "uint8" },
      { indexed: false, internalType: "uint8", name: "level", type: "uint8" },
    ],
    name: "SentExtraTokenDividends",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "userId",
        type: "uint256",
      },
      { indexed: true, internalType: "address", name: "user", type: "address" },
      {
        indexed: true,
        internalType: "address",
        name: "referrer",
        type: "address",
      },
      { indexed: false, internalType: "uint8", name: "matrix", type: "uint8" },
      { indexed: false, internalType: "uint8", name: "level", type: "uint8" },
    ],
    name: "Upgrade",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "user", type: "address" },
      { indexed: true, internalType: "address", name: "ref", type: "address" },
      { indexed: true, internalType: "uint8", name: "level", type: "uint8" },
    ],
    name: "UserAdd",
    type: "event",
  },
  {
    inputs: [],
    name: "AcademyAndMarketingAddr",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "AcademyAndMarketingComm",
    outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "Id0",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "IdToAddress",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "IsUserExists",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "LAST_LEVEL",
    outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "LastUserId",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "LevelPrice",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "LevelPricePercentage",
    outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "Platform",
    outputs: [
      { internalType: "uint256", name: "G3X2TotalEarnings", type: "uint256" },
      { internalType: "uint256", name: "G3X7TotalEarnings", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "RankReqTotalTeam",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "RankTeamPerLineLimit",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "RanksComm",
    outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "refAddr", type: "address" }],
    name: "RegistrationExt",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "TOKEN",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "Users",
    outputs: [
      { internalType: "uint256", name: "Id", type: "uint256" },
      { internalType: "address", name: "Ref", type: "address" },
      { internalType: "uint256", name: "Amount", type: "uint256" },
      { internalType: "uint256", name: "TotalTeam", type: "uint256" },
      { internalType: "uint256", name: "DirectRefs", type: "uint256" },
      { internalType: "uint256", name: "G3X2Earnings", type: "uint256" },
      { internalType: "uint256", name: "G3X7Earnings", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "UsersTeams",
    outputs: [
      { internalType: "uint256", name: "G3x2FirstTeam", type: "uint256" },
      { internalType: "uint256", name: "G3x2SecondTeam", type: "uint256" },
      { internalType: "uint256", name: "G3x7FirstTeam", type: "uint256" },
      { internalType: "uint256", name: "G3x7SecondTeam", type: "uint256" },
      { internalType: "uint256", name: "G3x7ThirdTeam", type: "uint256" },
      { internalType: "uint256", name: "G3x7FourthTeam", type: "uint256" },
      { internalType: "uint256", name: "G3x7FifthTeam", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint8", name: "level", type: "uint8" },
      { internalType: "uint8", name: "matrix", type: "uint8" },
    ],
    name: "buyNewLevel",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "tAmount", type: "uint256" },
      { internalType: "uint8", name: "tPerc", type: "uint8" },
    ],
    name: "calPerc",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "emergencyWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "userAddr", type: "address" },
      { internalType: "uint8", name: "level", type: "uint8" },
    ],
    name: "findFreeG3X2Referrer",
    outputs: [{ internalType: "address", name: "refAddr", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "userAddr", type: "address" },
      { internalType: "uint8", name: "level", type: "uint8" },
    ],
    name: "findFreeG3X7Referrer",
    outputs: [{ internalType: "address", name: "refAddr", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "userAddr", type: "address" }],
    name: "getDirectRefsIds",
    outputs: [{ internalType: "uint256[]", name: "refs", type: "uint256[]" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "userAddr", type: "address" },
      { internalType: "uint8", name: "level", type: "uint8" },
    ],
    name: "usersActiveG3X2Levels",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "userAddr", type: "address" },
      { internalType: "uint8", name: "level", type: "uint8" },
    ],
    name: "usersActiveG3X7Levels",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "userAddr", type: "address" },
      { internalType: "uint8", name: "level", type: "uint8" },
    ],
    name: "usersG3X2Matrix",
    outputs: [
      {
        components: [
          { internalType: "address", name: "CurrentRef", type: "address" },
          {
            internalType: "address[]",
            name: "FirstLevelRefs",
            type: "address[]",
          },
          {
            internalType: "address[]",
            name: "SecondLevelRefs",
            type: "address[]",
          },
          { internalType: "bool", name: "Blocked", type: "bool" },
          { internalType: "uint256", name: "ReinvestCount", type: "uint256" },
          { internalType: "uint256", name: "ReinvestTime", type: "uint256" },
          { internalType: "uint256", name: "Earnings", type: "uint256" },
        ],
        internalType: "struct GeniosClubDai.G3X2",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "userAddr", type: "address" },
      { internalType: "uint8", name: "level", type: "uint8" },
    ],
    name: "usersG3X7Matrix",
    outputs: [
      {
        components: [
          { internalType: "address", name: "CurrentRef", type: "address" },
          {
            internalType: "address[]",
            name: "FirstLevelRefs",
            type: "address[]",
          },
          {
            internalType: "address[]",
            name: "SecondLevelRefs",
            type: "address[]",
          },
          {
            internalType: "address[]",
            name: "ThirdLevelRefs",
            type: "address[]",
          },
          {
            internalType: "address[]",
            name: "FourthLevelRefs",
            type: "address[]",
          },
          {
            internalType: "address[]",
            name: "FifthLevelRefs",
            type: "address[]",
          },
          { internalType: "bool", name: "Blocked", type: "bool" },
          { internalType: "uint256", name: "ReinvestCount", type: "uint256" },
          { internalType: "uint256", name: "ReinvestTime", type: "uint256" },
          { internalType: "uint256", name: "Earnings", type: "uint256" },
        ],
        internalType: "struct GeniosClubDai.IG3X7",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "userAddr", type: "address" },
      { internalType: "uint8", name: "level", type: "uint8" },
    ],
    name: "usersRankTeams",
    outputs: [
      {
        components: [
          { internalType: "uint256", name: "G3x7FirstTeam", type: "uint256" },
          { internalType: "uint256", name: "G3x7SecondTeam", type: "uint256" },
          { internalType: "uint256", name: "G3x7ThirdTeam", type: "uint256" },
          { internalType: "uint256", name: "G3x7FourthTeam", type: "uint256" },
          { internalType: "uint256", name: "G3x7FifthTeam", type: "uint256" },
          { internalType: "uint256", name: "G3x7SixthTeam", type: "uint256" },
          { internalType: "uint256", name: "G3x7SeventhTeam", type: "uint256" },
        ],
        internalType: "struct GeniosClubDai.RankTeam",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "userAddr", type: "address" },
      { internalType: "uint8", name: "level", type: "uint8" },
    ],
    name: "usersRanks",
    outputs: [
      {
        components: [
          { internalType: "bool", name: "IsActive", type: "bool" },
          { internalType: "uint256", name: "TotalTeam", type: "uint256" },
          { internalType: "uint256", name: "DirectRefs", type: "uint256" },
        ],
        internalType: "struct GeniosClubDai.Rank",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export const PoolAbi = [
  {
    type: "constructor",
    name: "",
    inputs: [
      {
        type: "address",
        name: "tokenAddr",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "Deposit",
    inputs: [
      {
        type: "uint8",
        name: "level",
        indexed: true,
        internalType: "uint8",
      },
      {
        type: "uint256",
        name: "amount",
        indexed: false,
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "week",
        indexed: false,
        internalType: "uint256",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "UserAdded",
    inputs: [
      {
        type: "address",
        name: "account",
        indexed: true,
        internalType: "address",
      },
      {
        type: "uint8",
        name: "level",
        indexed: true,
        internalType: "uint8",
      },
      {
        type: "uint256",
        name: "week",
        indexed: false,
        internalType: "uint256",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "Withdraw",
    inputs: [
      {
        type: "address",
        name: "account",
        indexed: true,
        internalType: "address",
      },
      {
        type: "uint256",
        name: "amount",
        indexed: false,
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "week",
        indexed: false,
        internalType: "uint256",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "function",
    name: "AddUser",
    inputs: [
      {
        type: "uint8",
        name: "level",
        internalType: "uint8",
      },
      {
        type: "address",
        name: "userAddr",
        internalType: "address",
      },
    ],
    outputs: [
      {
        type: "bool",
        name: "",
        internalType: "bool",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "AddedRanks",
    inputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "address",
        name: "userAdd",
        internalType: "address",
      },
      {
        type: "uint256",
        name: "hisTime",
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "level",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "CONTRACT",
    inputs: [],
    outputs: [
      {
        type: "address",
        name: "",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "CheckWithdrawAmount",
    inputs: [
      {
        type: "uint8",
        name: "level",
        internalType: "uint8",
      },
      {
        type: "address",
        name: "userAddr",
        internalType: "address",
      },
    ],
    outputs: [
      {
        type: "uint256",
        name: "lastWeekAmount",
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "currentWeekAmount",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "CurrentWeek",
    inputs: [],
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "DepositAmount",
    inputs: [
      {
        type: "uint8",
        name: "level",
        internalType: "uint8",
      },
      {
        type: "uint256",
        name: "amount",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "bool",
        name: "",
        internalType: "bool",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "IsTimeToWithdraw",
    inputs: [
      {
        type: "uint8",
        name: "level",
        internalType: "uint8",
      },
      {
        type: "address",
        name: "userAddr",
        internalType: "address",
      },
    ],
    outputs: [
      {
        type: "bool",
        name: "",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "IsUserExists",
    inputs: [
      {
        type: "address",
        name: "",
        internalType: "address",
      },
      {
        type: "uint8",
        name: "",
        internalType: "uint8",
      },
    ],
    outputs: [
      {
        type: "bool",
        name: "",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "LastDepositWeek",
    inputs: [],
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "LastWeekStart",
    inputs: [],
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "NextWeekStart",
    inputs: [],
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "TOKEN",
    inputs: [],
    outputs: [
      {
        type: "address",
        name: "",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "TotalAmount",
    inputs: [],
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "TotalDepositWeek",
    inputs: [],
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "TotalRanksEarnings",
    inputs: [],
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "User",
    inputs: [
      {
        type: "address",
        name: "",
        internalType: "address",
      },
      {
        type: "uint8",
        name: "",
        internalType: "uint8",
      },
    ],
    outputs: [
      {
        type: "uint256",
        name: "LastWithdrawWeek",
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "LastWithdrawAmount",
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "TotalWithdrawAmount",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "UserRanksEarnings",
    inputs: [
      {
        type: "address",
        name: "",
        internalType: "address",
      },
    ],
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "Week",
    inputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
      {
        type: "uint8",
        name: "",
        internalType: "uint8",
      },
    ],
    outputs: [
      {
        type: "uint256",
        name: "TUsers",
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "TAmount",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "WithdrawAmount",
    inputs: [
      {
        type: "uint8",
        name: "level",
        internalType: "uint8",
      },
      {
        type: "address",
        name: "userAddr",
        internalType: "address",
      },
    ],
    outputs: [
      {
        type: "bool",
        name: "",
        internalType: "bool",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "indexOfRanks",
    inputs: [],
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "setContractAddr",
    inputs: [
      {
        type: "address",
        name: "contAddr",
        internalType: "address",
      },
      {
        type: "address",
        name: "userAddr",
        internalType: "address",
      },
    ],
    outputs: [
      {
        type: "bool",
        name: "",
        internalType: "bool",
      },
    ],
    stateMutability: "nonpayable",
  },
];

//Genios Club 2 Abis
export const GeniosClubAbi2 = [
  {
    type: "constructor",
    name: "",
    inputs: [
      {
        type: "address",
        name: "_owner",
        internalType: "address",
      },
      {
        type: "address",
        name: "_admin",
        internalType: "address",
      },
      {
        type: "address",
        name: "_dai",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "NewUser",
    inputs: [
      {
        type: "uint256",
        name: "_user",
        indexed: false,
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "_sponcer",
        indexed: false,
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "amount",
        indexed: false,
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "time",
        indexed: false,
        internalType: "uint256",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "Recycled",
    inputs: [
      {
        type: "uint256",
        name: "_user",
        indexed: false,
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "_sponcer",
        indexed: false,
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "amount",
        indexed: false,
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "newMatrix",
        indexed: false,
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "time",
        indexed: false,
        internalType: "uint256",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "Upgrade",
    inputs: [
      {
        type: "uint256",
        name: "_user",
        indexed: false,
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "_sponcer",
        indexed: false,
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "amount",
        indexed: false,
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "newMatrix",
        indexed: false,
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "time",
        indexed: false,
        internalType: "uint256",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "function",
    name: "AddUpgradeAmount",
    inputs: [
      {
        type: "address",
        name: "_user",
        internalType: "address",
      },
      {
        type: "uint256",
        name: "_amount",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "AddressToId",
    inputs: [
      {
        type: "address",
        name: "",
        internalType: "address",
      },
    ],
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "CurrentCycleNo",
    inputs: [
      {
        type: "address",
        name: "_user",
        internalType: "address",
      },
      {
        type: "uint256",
        name: "_matrix",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "EmergencyWithdraw",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "IdToAddress",
    inputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "address",
        name: "",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "IdToPosition",
    inputs: [
      {
        type: "address",
        name: "_ref",
        internalType: "address",
      },
      {
        type: "uint256",
        name: "_matrix",
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "_cycle",
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "_id",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "LAST_LEVEL",
    inputs: [],
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "LastIdUser",
    inputs: [],
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "LastUserId",
    inputs: [],
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "LevelOpen",
    inputs: [
      {
        type: "address",
        name: "_user",
        internalType: "address",
      },
      {
        type: "uint256",
        name: "matrix__",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "bool",
        name: "",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "MatrixRates",
    inputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "Register",
    inputs: [
      {
        type: "address",
        name: "_newUser",
        internalType: "address",
      },
      {
        type: "address",
        name: "_sponcer",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "UpgradeFunc",
    inputs: [
      {
        type: "address",
        name: "_newUser",
        internalType: "address",
      },
      {
        type: "address",
        name: "_sponcer",
        internalType: "address",
      },
      {
        type: "uint256",
        name: "_matrix",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "Users",
    inputs: [
      {
        type: "address",
        name: "",
        internalType: "address",
      },
    ],
    outputs: [
      {
        type: "uint256",
        name: "Id",
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "DirectRefs",
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "ReinvestCount",
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "Earnings",
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "Amount",
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "upgradeBalance",
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "recycleBalance",
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "recycle1",
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "recycle2",
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "recycle3",
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "recycle4",
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "recycle5",
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "recycle6",
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "recycle7",
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "recycle8",
        internalType: "uint256",
      },
      {
        type: "address",
        name: "DRef",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "_PositionCalculator",
    inputs: [
      {
        type: "uint256",
        name: "one_",
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "two_",
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "third_",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    stateMutability: "pure",
  },
  {
    type: "function",
    name: "exists",
    inputs: [
      {
        type: "address",
        name: "",
        internalType: "address",
      },
    ],
    outputs: [
      {
        type: "bool",
        name: "",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "myTime",
    inputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "postionToId",
    inputs: [
      {
        type: "address",
        name: "_ref",
        internalType: "address",
      },
      {
        type: "uint256",
        name: "_matrix",
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "_cycle",
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "_position",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "upline",
    inputs: [
      {
        type: "address",
        name: "_user",
        internalType: "address",
      },
      {
        type: "uint256",
        name: "_matrix",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "uint256",
        name: "id",
        internalType: "uint256",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "withdrawFeeAmount",
    inputs: [
      {
        type: "address",
        name: "_user",
        internalType: "address",
      },
    ],
    outputs: [
      {
        type: "bool",
        name: "",
        internalType: "bool",
      },
    ],
    stateMutability: "nonpayable",
  },
];

export const MTKAbi2 = [
  {
    inputs: [{ internalType: "address", name: "_owner", type: "address" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "from", type: "address" },
      { indexed: true, internalType: "address", name: "to", type: "address" },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    constant: true,
    inputs: [],
    name: "_decimals",
    outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "_name",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "_symbol",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "address", name: "spender", type: "address" },
    ],
    name: "allowance",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "approve",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "balanceOf",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ internalType: "uint256", name: "amount", type: "uint256" }],
    name: "burn",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "decimals",
    outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "subtractedValue", type: "uint256" },
    ],
    name: "decreaseAllowance",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getOwner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "addedValue", type: "uint256" },
    ],
    name: "increaseAllowance",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ internalType: "uint256", name: "amount", type: "uint256" }],
    name: "mint",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "name",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ internalType: "address", name: "_newOwner", type: "address" }],
    name: "renounceOwnership",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "symbol",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "totalSupply",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "recipient", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "transfer",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "sender", type: "address" },
      { internalType: "address", name: "recipient", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];
