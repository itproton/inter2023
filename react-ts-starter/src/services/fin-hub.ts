export const socket = new WebSocket('wss://ws.finnhub.io?token=process.env.FINHUB_TOKEN');

// Connection opened -> Subscribe
socket.addEventListener('open', function (event) {
    socket.send(JSON.stringify({ 'type': 'subscribe', 'symbol': 'AAPL' }))
    socket.send(JSON.stringify({ 'type': 'subscribe', 'symbol': 'BINANCE:BTCUSDT' }))
    socket.send(JSON.stringify({ 'type': 'subscribe', 'symbol': 'IC MARKETS:1' }))
});

// Listen for messages
socket.addEventListener('message', function (event) {
    console.log('Message from server ', event.data);
});

// Unsubscribe
export var unsubscribe = function (symbol: string) {
    socket.send(JSON.stringify({ 'type': 'unsubscribe', 'symbol': symbol }))
}
