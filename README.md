# tomox-relayer-fund-monitor
To run a DEX on TomoX, it requires TOMO to pay service fee. If the fee fund runs out, DEX will stop. This help to monitor and send alerts to slack/telegram about DEX which is going stop due to lack of fee fund


### Install
```
npm i
```

### Usage
setup cronjob to run this command
```
node index.js
```
