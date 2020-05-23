 const path = require('path')
 require('dotenv').config({
     path: path.resolve(__dirname, './.env')
 })

 const web3 = require('./web3');

 const address = process.env.RELAYER_CONTRACT
 const abi = [{
     "constant": false,
     "inputs": [{
         "name": "coinbase",
         "type": "address"
     }, {
         "name": "fromToken",
         "type": "address"
     }, {
         "name": "toToken",
         "type": "address"
     }],
     "name": "listToken",
     "outputs": [],
     "payable": false,
     "stateMutability": "nonpayable",
     "type": "function"
 }, {
     "constant": true,
     "inputs": [],
     "name": "MaximumRelayers",
     "outputs": [{
         "name": "",
         "type": "uint256"
     }],
     "payable": false,
     "stateMutability": "view",
     "type": "function"
 }, {
     "constant": false,
     "inputs": [{
         "name": "coinbase",
         "type": "address"
     }, {
         "name": "tradeFee",
         "type": "uint16"
     }],
     "name": "updateFee",
     "outputs": [],
     "payable": false,
     "stateMutability": "nonpayable",
     "type": "function"
 }, {
     "constant": false,
     "inputs": [{
         "name": "owner",
         "type": "address"
     }],
     "name": "changeContractOwner",
     "outputs": [],
     "payable": false,
     "stateMutability": "nonpayable",
     "type": "function"
 }, {
     "constant": true,
     "inputs": [{
         "name": "",
         "type": "address"
     }],
     "name": "RELAYER_LIST",
     "outputs": [{
         "name": "_deposit",
         "type": "uint256"
     }, {
         "name": "_tradeFee",
         "type": "uint16"
     }, {
         "name": "_index",
         "type": "uint256"
     }, {
         "name": "_owner",
         "type": "address"
     }],
     "payable": false,
     "stateMutability": "view",
     "type": "function"
 }, {
     "constant": false,
     "inputs": [{
         "name": "coinbase",
         "type": "address"
     }],
     "name": "depositMore",
     "outputs": [],
     "payable": true,
     "stateMutability": "payable",
     "type": "function"
 }, {
     "constant": true,
     "inputs": [{
         "name": "",
         "type": "uint256"
     }],
     "name": "RELAYER_COINBASES",
     "outputs": [{
         "name": "",
         "type": "address"
     }],
     "payable": false,
     "stateMutability": "view",
     "type": "function"
 }, {
     "constant": true,
     "inputs": [{
         "name": "",
         "type": "address"
     }],
     "name": "RESIGN_REQUESTS",
     "outputs": [{
         "name": "",
         "type": "uint256"
     }],
     "payable": false,
     "stateMutability": "view",
     "type": "function"
 }, {
     "constant": true,
     "inputs": [{
         "name": "coinbase",
         "type": "address"
     }],
     "name": "getRelayerByCoinbase",
     "outputs": [{
         "name": "",
         "type": "uint256"
     }, {
         "name": "",
         "type": "address"
     }, {
         "name": "",
         "type": "uint256"
     }, {
         "name": "",
         "type": "uint16"
     }, {
         "name": "",
         "type": "address[]"
     }, {
         "name": "",
         "type": "address[]"
     }],
     "payable": false,
     "stateMutability": "view",
     "type": "function"
 }, {
     "constant": false,
     "inputs": [{
         "name": "coinbase",
         "type": "address"
     }, {
         "name": "tradeFee",
         "type": "uint16"
     }, {
         "name": "fromTokens",
         "type": "address[]"
     }, {
         "name": "toTokens",
         "type": "address[]"
     }],
     "name": "update",
     "outputs": [],
     "payable": false,
     "stateMutability": "nonpayable",
     "type": "function"
 }, {
     "constant": false,
     "inputs": [{
         "name": "maxRelayer",
         "type": "uint256"
     }, {
         "name": "maxToken",
         "type": "uint256"
     }, {
         "name": "minDeposit",
         "type": "uint256"
     }],
     "name": "reconfigure",
     "outputs": [],
     "payable": false,
     "stateMutability": "nonpayable",
     "type": "function"
 }, {
     "constant": false,
     "inputs": [{
         "name": "coinbase",
         "type": "address"
     }],
     "name": "cancelSelling",
     "outputs": [],
     "payable": false,
     "stateMutability": "nonpayable",
     "type": "function"
 }, {
     "constant": true,
     "inputs": [],
     "name": "ActiveRelayerCount",
     "outputs": [{
         "name": "",
         "type": "uint256"
     }],
     "payable": false,
     "stateMutability": "view",
     "type": "function"
 }, {
     "constant": false,
     "inputs": [{
         "name": "coinbase",
         "type": "address"
     }, {
         "name": "fromToken",
         "type": "address"
     }, {
         "name": "toToken",
         "type": "address"
     }],
     "name": "deListToken",
     "outputs": [],
     "payable": false,
     "stateMutability": "nonpayable",
     "type": "function"
 }, {
     "constant": false,
     "inputs": [{
         "name": "coinbase",
         "type": "address"
     }, {
         "name": "price",
         "type": "uint256"
     }],
     "name": "sellRelayer",
     "outputs": [],
     "payable": false,
     "stateMutability": "nonpayable",
     "type": "function"
 }, {
     "constant": true,
     "inputs": [],
     "name": "RelayerCount",
     "outputs": [{
         "name": "",
         "type": "uint256"
     }],
     "payable": false,
     "stateMutability": "view",
     "type": "function"
 }, {
     "constant": true,
     "inputs": [{
         "name": "",
         "type": "address"
     }],
     "name": "RELAYER_ON_SALE_LIST",
     "outputs": [{
         "name": "",
         "type": "uint256"
     }],
     "payable": false,
     "stateMutability": "view",
     "type": "function"
 }, {
     "constant": false,
     "inputs": [{
         "name": "coinbase",
         "type": "address"
     }],
     "name": "resign",
     "outputs": [],
     "payable": false,
     "stateMutability": "nonpayable",
     "type": "function"
 }, {
     "constant": false,
     "inputs": [{
         "name": "coinbase",
         "type": "address"
     }, {
         "name": "new_owner",
         "type": "address"
     }],
     "name": "transfer",
     "outputs": [],
     "payable": false,
     "stateMutability": "nonpayable",
     "type": "function"
 }, {
     "constant": true,
     "inputs": [],
     "name": "MinimumDeposit",
     "outputs": [{
         "name": "",
         "type": "uint256"
     }],
     "payable": false,
     "stateMutability": "view",
     "type": "function"
 }, {
     "constant": false,
     "inputs": [{
         "name": "coinbase",
         "type": "address"
     }, {
         "name": "tradeFee",
         "type": "uint16"
     }, {
         "name": "fromTokens",
         "type": "address[]"
     }, {
         "name": "toTokens",
         "type": "address[]"
     }],
     "name": "register",
     "outputs": [],
     "payable": true,
     "stateMutability": "payable",
     "type": "function"
 }, {
     "constant": true,
     "inputs": [],
     "name": "MaximumTokenList",
     "outputs": [{
         "name": "",
         "type": "uint256"
     }],
     "payable": false,
     "stateMutability": "view",
     "type": "function"
 }, {
     "constant": false,
     "inputs": [{
         "name": "coinbase",
         "type": "address"
     }],
     "name": "buyRelayer",
     "outputs": [],
     "payable": true,
     "stateMutability": "payable",
     "type": "function"
 }, {
     "constant": false,
     "inputs": [{
         "name": "coinbase",
         "type": "address"
     }],
     "name": "refund",
     "outputs": [],
     "payable": false,
     "stateMutability": "nonpayable",
     "type": "function"
 }, {
     "constant": true,
     "inputs": [],
     "name": "CONTRACT_OWNER",
     "outputs": [{
         "name": "",
         "type": "address"
     }],
     "payable": false,
     "stateMutability": "view",
     "type": "function"
 }, {
     "inputs": [{
         "name": "tomoxListing",
         "type": "address"
     }, {
         "name": "maxRelayers",
         "type": "uint256"
     }, {
         "name": "maxTokenList",
         "type": "uint256"
     }, {
         "name": "minDeposit",
         "type": "uint256"
     }],
     "payable": false,
     "stateMutability": "nonpayable",
     "type": "constructor"
 }, {
     "anonymous": false,
     "inputs": [{
         "indexed": false,
         "name": "max_relayer",
         "type": "uint256"
     }, {
         "indexed": false,
         "name": "max_token",
         "type": "uint256"
     }, {
         "indexed": false,
         "name": "min_deposit",
         "type": "uint256"
     }],
     "name": "ConfigEvent",
     "type": "event"
 }, {
     "anonymous": false,
     "inputs": [{
         "indexed": false,
         "name": "deposit",
         "type": "uint256"
     }, {
         "indexed": false,
         "name": "tradeFee",
         "type": "uint16"
     }, {
         "indexed": false,
         "name": "fromTokens",
         "type": "address[]"
     }, {
         "indexed": false,
         "name": "toTokens",
         "type": "address[]"
     }],
     "name": "RegisterEvent",
     "type": "event"
 }, {
     "anonymous": false,
     "inputs": [{
         "indexed": false,
         "name": "deposit",
         "type": "uint256"
     }, {
         "indexed": false,
         "name": "tradeFee",
         "type": "uint16"
     }, {
         "indexed": false,
         "name": "fromTokens",
         "type": "address[]"
     }, {
         "indexed": false,
         "name": "toTokens",
         "type": "address[]"
     }],
     "name": "UpdateEvent",
     "type": "event"
 }, {
     "anonymous": false,
     "inputs": [{
         "indexed": false,
         "name": "coinbase",
         "type": "address"
     }, {
         "indexed": false,
         "name": "tradeFee",
         "type": "uint16"
     }],
     "name": "UpdateFeeEvent",
     "type": "event"
 }, {
     "anonymous": false,
     "inputs": [{
         "indexed": false,
         "name": "owner",
         "type": "address"
     }, {
         "indexed": false,
         "name": "deposit",
         "type": "uint256"
     }, {
         "indexed": false,
         "name": "tradeFee",
         "type": "uint16"
     }, {
         "indexed": false,
         "name": "fromTokens",
         "type": "address[]"
     }, {
         "indexed": false,
         "name": "toTokens",
         "type": "address[]"
     }],
     "name": "TransferEvent",
     "type": "event"
 }, {
     "anonymous": false,
     "inputs": [{
         "indexed": false,
         "name": "deposit_release_time",
         "type": "uint256"
     }, {
         "indexed": false,
         "name": "deposit_amount",
         "type": "uint256"
     }],
     "name": "ResignEvent",
     "type": "event"
 }, {
     "anonymous": false,
     "inputs": [{
         "indexed": false,
         "name": "success",
         "type": "bool"
     }, {
         "indexed": false,
         "name": "remaining_time",
         "type": "uint256"
     }, {
         "indexed": false,
         "name": "deposit_amount",
         "type": "uint256"
     }],
     "name": "RefundEvent",
     "type": "event"
 }, {
     "anonymous": false,
     "inputs": [{
         "indexed": false,
         "name": "is_on_sale",
         "type": "bool"
     }, {
         "indexed": false,
         "name": "coinbase",
         "type": "address"
     }, {
         "indexed": false,
         "name": "price",
         "type": "uint256"
     }],
     "name": "SellEvent",
     "type": "event"
 }, {
     "anonymous": false,
     "inputs": [{
         "indexed": false,
         "name": "success",
         "type": "bool"
     }, {
         "indexed": false,
         "name": "coinbase",
         "type": "address"
     }, {
         "indexed": false,
         "name": "price",
         "type": "uint256"
     }],
     "name": "BuyEvent",
     "type": "event"
 }]

 let contract;
 if (web3 !== undefined) {
     contract = new web3.eth.Contract(abi, address);
 }
 module.exports = contract
