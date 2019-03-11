const WebSocket = require('ws');

const baseUrl = "wss://testnet-dex.binance.org/api/ws/$all@blockheight";
//const baseUrl = "wss://testnet-dex.binance.org/api/ws";
//const baseUrl = "wss://testnet-dex.binance.org/api/ws/ETH.B-261@marketDepth";
//const baseUrl = "wss://testnet-dex.binance.org/api/ws/bnc1hp7cves62dzj8n4z8ckna0d3t6zd7z2zcj6gtq"

var ws = new WebSocket(baseUrl)
ws.on('open', function() {
    console.log('open');
    ws.send(JSON.stringify({ method: "subscribe", topic: "blockheight", symbols: ["$all"] }));  
    //ws.send(JSON.stringify({ method: "subscribe", topic: "marketDepth", symbols: ["$all"] }));
    //ws.send(JSON.stringify({ method: "subscribe", topic: "orders", userAddress: "bnc1hp7cves62dzj8n4z8ckna0d3t6zd7z2zcj6gtq" }));
})

ws.on('message', function incoming(data) {
    //console.log(1);
    //console.log(data);
    process_data(JSON.parse(data))
});


let process_data = function(data){
  console.log(data)
}

