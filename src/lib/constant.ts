// export const ActiveChain = "polygon";
export const ActiveChain = "fantom-testnet";
// export const clientId = "446e06f5b29c7422777a4a725d1e680b"; // You can get a client id from dashboard settings
export const clientId = "d75935c2db33dd391882dd2fb2474ceb"; // You can get a client id from dashboard settings
// export const clientId = "0xfa2"; // You can get a client id from dashboard settings
export const AddressZero = "0x0000000000000000000000000000000000000000";

// Testnet
// old
// export const MTKAddress = "0x54486e9647afB598c0253a26D2266880e1f84CB5";
// export const PoolAddress = "0xa89dAaFC40a159F868a8D888CEf5361e06Daa920";
// export const GeniosClubAddress = "0xFfcD83CA9048E47C8A015d23fE9dAa5AEfa8F082";

// new
// export const MTKAddress = "0xB981c2A2620e8142463dD1D8f306FF8B189292eA";
// export const PoolAddress = "0x1172D82ABf5de3D7A24f6Fb5eEb0361D904A18d3";
// export const GeniosClubAddress = "0xa6bc06A49EbCa44f59919fF35c3CC0CA40ae7DF1";

// // nabeel
// export const MTKAddress = "0xB981c2A2620e8142463dD1D8f306FF8B189292eA";
// export const PoolAddress = "0xf541034EA40d0e3232Ee6C3b8d10cF690C0Cf560";
// export const GeniosClubAddress = "0x3B152E09F8474F895724901AF41b9FB37E7aA912";

// Z
// export const PoolAddress = "0x45C158e4d7eB2CC9171107A69FBf20B638556D64";
// export const GeniosClubAddress = "0x4152DF5D00e62dEa215222522DCEa5a1668b6E16";

// export const MTKAddress = "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063";
export const MTKAddress = "0x5F620d60795A2D0210c43bB927b2c989E1fbbf1c";
// USDT
// export const MTKAddress2 = "0xf01D053BA39D69FaBe3848e34D1eB211E4283052";
// export const MTKAddress2 = "0x5145F0158dE9Cc9AdEf82aD3777976F31Fff7ebF";
// export const MTKAddress2 = "0xad1ccDe80429921AF402E9AC099A83c32F4e1776";
// export const MTKAddress2 = "0x811C2C33E9e63D2155f0C73c01f2960725d6f291";
export const MTKAddress2 = "0x6d743CbA5A414Eec3580d2055eB6FE98D7066956";
export const PoolAddress = "0x456c66b4ea2246166d81772bC9Cc3e9F1D28ee06";
// export const GeniosClubAddress = "0xebdB008B0323989e3830c89A2fCd626A7F47C645";
//without pool Worked
// export const GeniosClubAddress = "0xCAe10a58e646451dA2ab00B3EBfA70e37b2DA7dB";
// Mainnet
export const GeniosClubAddress = "0x18642729d5770b18c108D0B991903e857f04497E";
// MLM
// export const GeniosClubAddress2 = "0x27cb4c54950E61319860D53E1573A04CD92a753E";
// export const GeniosClubAddress2 = "0x76b2335554ab5008345bEd61271357F6068a30de";
// export const GeniosClubAddress2 = "0x658F0F18d86c90C56ca5781eb77f4F3BB7c70E8f";
// export const GeniosClubAddress2 = "0x11A087836C0Da7E480DAF7d3985876f8CBea6aF2";
// export const GeniosClubAddress2 = "0xEF3313bd112D17DF34cb66c59559A7aDa2b21650";
export const GeniosClubAddress2 = "0xB56DcBb92768C887DF4cfF1eeb288dA1F6c56982";

// export const MTKAbi = [{"inputs":[{"internalType":"address","name":"_proxyTo","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_new","type":"address"},{"indexed":false,"internalType":"address","name":"_old","type":"address"}],"name":"ProxyOwnerUpdate","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_new","type":"address"},{"indexed":true,"internalType":"address","name":"_old","type":"address"}],"name":"ProxyUpdated","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"implementation","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"proxyOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"proxyType","outputs":[{"internalType":"uint256","name":"proxyTypeId","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferProxyOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newProxyTo","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"updateAndCall","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"_newProxyTo","type":"address"}],"name":"updateImplementation","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}];
export const MTKAbi = [
  {
    type: "constructor",
    name: "",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "Approval",
    inputs: [
      {
        type: "address",
        name: "owner",
        indexed: true,
        internalType: "address",
      },
      {
        type: "address",
        name: "spender",
        indexed: true,
        internalType: "address",
      },
      {
        type: "uint256",
        name: "value",
        indexed: false,
        internalType: "uint256",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "Transfer",
    inputs: [
      {
        type: "address",
        name: "from",
        indexed: true,
        internalType: "address",
      },
      {
        type: "address",
        name: "to",
        indexed: true,
        internalType: "address",
      },
      {
        type: "uint256",
        name: "value",
        indexed: false,
        internalType: "uint256",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "function",
    name: "allowance",
    inputs: [
      {
        type: "address",
        name: "owner",
        internalType: "address",
      },
      {
        type: "address",
        name: "spender",
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
    name: "approve",
    inputs: [
      {
        type: "address",
        name: "spender",
        internalType: "address",
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
    name: "balanceOf",
    inputs: [
      {
        type: "address",
        name: "account",
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
    name: "decimals",
    inputs: [],
    outputs: [
      {
        type: "uint8",
        name: "",
        internalType: "uint8",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "decreaseAllowance",
    inputs: [
      {
        type: "address",
        name: "spender",
        internalType: "address",
      },
      {
        type: "uint256",
        name: "subtractedValue",
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
    name: "increaseAllowance",
    inputs: [
      {
        type: "address",
        name: "spender",
        internalType: "address",
      },
      {
        type: "uint256",
        name: "addedValue",
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
    name: "mint",
    inputs: [
      {
        type: "address",
        name: "to",
        internalType: "address",
      },
      {
        type: "uint256",
        name: "amount",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "name",
    inputs: [],
    outputs: [
      {
        type: "string",
        name: "",
        internalType: "string",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "symbol",
    inputs: [],
    outputs: [
      {
        type: "string",
        name: "",
        internalType: "string",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "totalSupply",
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
    name: "transfer",
    inputs: [
      {
        type: "address",
        name: "to",
        internalType: "address",
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
    name: "transferFrom",
    inputs: [
      {
        type: "address",
        name: "from",
        internalType: "address",
      },
      {
        type: "address",
        name: "to",
        internalType: "address",
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

// New Genios club 2
// export const GeniosClubAbi2 = [
//   {
//     inputs: [
//       { internalType: "address", name: "_owner", type: "address" },
//       { internalType: "address", name: "_Idx", type: "address" },
//       { internalType: "address", name: "_admin", type: "address" },
//       { internalType: "address", name: "_dai", type: "address" },
//     ],
//     stateMutability: "nonpayable",
//     type: "constructor",
//   },
//   {
//     inputs: [
//       { internalType: "address", name: "_user", type: "address" },
//       { internalType: "uint256", name: "_amount", type: "uint256" },
//     ],
//     name: "AddUpgradeAmount",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [{ internalType: "address", name: "", type: "address" }],
//     name: "AddressToId",
//     outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [
//       { internalType: "address", name: "_user", type: "address" },
//       { internalType: "uint256", name: "_matrix", type: "uint256" },
//     ],
//     name: "CurrentCycleNo",
//     outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [],
//     name: "EmergencyWithdraw",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//     name: "IdToAddress",
//     outputs: [{ internalType: "address", name: "", type: "address" }],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [
//       { internalType: "address", name: "_ref", type: "address" },
//       { internalType: "uint256", name: "_cycle", type: "uint256" },
//       { internalType: "uint256", name: "_matrix", type: "uint256" },
//       { internalType: "uint256", name: "_id", type: "uint256" },
//     ],
//     name: "IdToPosition",
//     outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [],
//     name: "LAST_LEVEL",
//     outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [],
//     name: "LastIdUser",
//     outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [],
//     name: "LastUserId",
//     outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//     name: "MatrixRates",
//     outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [
//       { internalType: "uint256", name: "one_", type: "uint256" },
//       { internalType: "uint256", name: "two_", type: "uint256" },
//       { internalType: "uint256", name: "third_", type: "uint256" },
//     ],
//     name: "PositionCalculator",
//     outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//     stateMutability: "pure",
//     type: "function",
//   },
//   {
//     inputs: [
//       { internalType: "address", name: "_ref", type: "address" },
//       { internalType: "uint256", name: "cycle", type: "uint256" },
//       { internalType: "uint256", name: "_matrix", type: "uint256" },
//       { internalType: "uint256", name: "_postion", type: "uint256" },
//     ],
//     name: "PositionToId",
//     outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [
//       { internalType: "address", name: "_newUser", type: "address" },
//       { internalType: "address", name: "_Ref", type: "address" },
//     ],
//     name: "Register",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [
//       { internalType: "address", name: "_newUser", type: "address" },
//       { internalType: "uint256", name: "_matrix", type: "uint256" },
//     ],
//     name: "Upgrade",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [{ internalType: "address", name: "", type: "address" }],
//     name: "Users",
//     outputs: [
//       { internalType: "uint256", name: "Id", type: "uint256" },
//       { internalType: "uint256", name: "DirectRefs", type: "uint256" },
//       { internalType: "uint256", name: "ReinvestCount", type: "uint256" },
//       { internalType: "uint256", name: "Earnings", type: "uint256" },
//       { internalType: "uint256", name: "Amount", type: "uint256" },
//       { internalType: "uint256", name: "upgradeBalance", type: "uint256" },
//       { internalType: "uint256", name: "recycleBalance", type: "uint256" },
//       { internalType: "uint256", name: "recycle1", type: "uint256" },
//       { internalType: "uint256", name: "recycle2", type: "uint256" },
//       { internalType: "uint256", name: "recycle3", type: "uint256" },
//       { internalType: "uint256", name: "recycle4", type: "uint256" },
//       { internalType: "uint256", name: "recycle5", type: "uint256" },
//       { internalType: "uint256", name: "recycle6", type: "uint256" },
//       { internalType: "uint256", name: "recycle7", type: "uint256" },
//       { internalType: "uint256", name: "recycle8", type: "uint256" },
//       { internalType: "address", name: "DRef", type: "address" },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [{ internalType: "address", name: "_user", type: "address" }],
//     name: "withdrawFeeAmount",
//     outputs: [{ internalType: "bool", name: "", type: "bool" }],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
// ];
export const GeniosClubAbi2 = [
  {
    inputs: [
      { internalType: "address", name: "_owner", type: "address" },
      { internalType: "address", name: "_Idx", type: "address" },
      { internalType: "address", name: "_admin", type: "address" },
      { internalType: "address", name: "_dai", type: "address" },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      { internalType: "address", name: "_user", type: "address" },
      { internalType: "uint256", name: "_amount", type: "uint256" },
    ],
    name: "AddUpgradeAmount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "AddressToId",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_user", type: "address" },
      { internalType: "uint256", name: "_matrix", type: "uint256" },
    ],
    name: "CurrentCycleNo",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "EmergencyWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [
      { internalType: "address", name: "_ref", type: "address" },
      { internalType: "uint256", name: "_cycle", type: "uint256" },
      { internalType: "uint256", name: "_matrix", type: "uint256" },
      { internalType: "uint256", name: "_id", type: "uint256" },
    ],
    name: "IdToPosition",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "LAST_LEVEL",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "LastIdUser",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
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
    inputs: [
      { internalType: "address", name: "_user", type: "address" },
      { internalType: "uint256", name: "matrix__", type: "uint256" },
    ],
    name: "LevelOpen",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "MatrixRates",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "one_", type: "uint256" },
      { internalType: "uint256", name: "two_", type: "uint256" },
      { internalType: "uint256", name: "third_", type: "uint256" },
    ],
    name: "PositionCalculator",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_ref", type: "address" },
      { internalType: "uint256", name: "cycle", type: "uint256" },
      { internalType: "uint256", name: "_matrix", type: "uint256" },
      { internalType: "uint256", name: "_postion", type: "uint256" },
    ],
    name: "PositionToId",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_newUser", type: "address" },
      { internalType: "address", name: "_Ref", type: "address" },
    ],
    name: "Register",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_newUser", type: "address" },
      { internalType: "uint256", name: "_matrix", type: "uint256" },
    ],
    name: "Upgrade",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "Users",
    outputs: [
      { internalType: "uint256", name: "Id", type: "uint256" },
      { internalType: "uint256", name: "DirectRefs", type: "uint256" },
      { internalType: "uint256", name: "ReinvestCount", type: "uint256" },
      { internalType: "uint256", name: "Earnings", type: "uint256" },
      { internalType: "uint256", name: "Amount", type: "uint256" },
      { internalType: "uint256", name: "upgradeBalance", type: "uint256" },
      { internalType: "uint256", name: "recycleBalance", type: "uint256" },
      { internalType: "uint256", name: "recycle1", type: "uint256" },
      { internalType: "uint256", name: "recycle2", type: "uint256" },
      { internalType: "uint256", name: "recycle3", type: "uint256" },
      { internalType: "uint256", name: "recycle4", type: "uint256" },
      { internalType: "uint256", name: "recycle5", type: "uint256" },
      { internalType: "uint256", name: "recycle6", type: "uint256" },
      { internalType: "uint256", name: "recycle7", type: "uint256" },
      { internalType: "uint256", name: "recycle8", type: "uint256" },
      { internalType: "address", name: "DRef", type: "address" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_user", type: "address" }],
    name: "withdrawFeeAmount",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
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
