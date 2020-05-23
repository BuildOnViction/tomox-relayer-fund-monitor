 const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, './.env') })
 const Web3 = require("web3")
 const web3 = new Web3(new Web3.providers.HttpProvider("https://" + process.env.RPC_ENDPOINT))
 module.exports = web3
