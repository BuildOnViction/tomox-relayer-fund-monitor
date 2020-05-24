# tomox-relayer-fund-monitor
To run a DEX on TomoX, it requires TOMO to pay service fee. If the fee fund runs out, DEX will stop. This help to monitor and send alerts to slack/telegram about DEXs which are going stop due to lack of fee fund


### Install
```
npm i
```

### Usage
setup cronjob to run this command
```
node index.js
```

Example output
```
The following relayers need to deposit more fee:
Coinbase: 0xdE8Bb39eC2DAC88d3F87B62E18CC3A89E298xxxx Owner: 0xdBD09C24A86f5475871F95b0fBc7fA5D1822xxxx Available fund: 24953.8841 TOMO,
Coinbase: 0x83C7399D01e3E1c20e5FFD7957C8666D73c1xxxx Owner: 0xE5dC63992d3e8251292C54a5B73936286b2fxxxx Available fund: 24999.9418 TOMO,
Coinbase: 0x05A2c6488A23782C78Ef29326D3e2aa1C9E8xxxx Owner: 0xf5A698Fd5F85E0a0a410629F654f651fA9Adxxxx Available fund: 24999.998 TOMO
```
