const path = require('path')
require('dotenv').config({
    path: path.resolve(__dirname, './.env')
})
const web3 = require("./web3")
const relayerContract = require("./contract.js")
const noti_bot = require('noti_bot')
const notifyTelegram = noti_bot.telegram
const notifySlack = noti_bot.slack
const FUND_THRESHOLD = parseFloat(process.env.FUND_THRESHOLD)

const main = async () => {
    let alertList = []
    // get relayerCount
    let count = await relayerContract.methods.RelayerCount().call()
    for (let i = 0; i < count; i++) {
        let coinbase = await relayerContract.methods.RELAYER_COINBASES(i).call()
        let relayer = await relayerContract.methods.getRelayerByCoinbase(coinbase).call()
        if (web3.utils.fromWei(relayer[2]) < FUND_THRESHOLD) {
            // check if this relayer has resigned
            let resignRequest = await relayerContract.methods.RESIGN_REQUESTS(coinbase).call()
            if (resignRequest == 0) {
                alertList.push("\n\n\nCoinbase: " + coinbase + "\nOwner: " + relayer[1] + "\nAvailable fund: " + web3.utils.fromWei(relayer[2]) + " TOMO")
            }
        }
    }
    if (alertList.length > 0) {
        let msg = "The following relayers need to deposit more fee:" + alertList.toString() + "\n cc <@nguyennguyen>"
        notifyTelegram(msg, process.env.TELEGRAM_TOKEN, process.env.TELEGRAM_CHAT)
        notifySlack(msg, process.env.SLACK_HOOK_KEY, process.env.SLACK_CHANNEL, process.env.SLACK_BOTNAME, process.env.SLACK_ICON)
        console.log(msg)
    }
}

main()
