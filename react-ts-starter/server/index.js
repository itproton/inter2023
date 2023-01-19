
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 3000 });

// Array of currency pairs
const currencyPairs = ['EUR/USD', 'USD/JPY', 'GBP/USD', 'USD/CHF'];

// Helper function to generate random prices
function generatePrices() {
  return currencyPairs.map(pair => {
    return {
      pair: pair,
      bid: (Math.random() * 1).toFixed(4),
      ask: (Math.random() * 1 + 0.0001).toFixed(4)
    }
  });
}

// Send the current prices to all connected clients every 5 seconds
setInterval(() => {
  const prices = generatePrices();
  wss.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify({ type: 'prices', payload: prices }));
    }
  });
}, 5000);

wss.on('connection', ws => {
  console.log('User connected');
});

console.log('Server running on port 3000');


// Array of stock symbols
const stocks = ['AAPL', 'GOOG', 'AMZN', 'TSLA'];

// Helper function to generate random stock prices
function generateStockPrices() {
  return stocks.map(stock => {
    return {
      symbol: stock,
      price: (Math.random() * 1000).toFixed(2),
      change: (Math.random() * 20 - 10).toFixed(2)
    }
  });
}

// Send the current stock prices to all connected clients every 5 seconds
setInterval(() => {
  const stockPrices = generateStockPrices();
  wss.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify({ type: 'stockPrices', payload: stockPrices }));
    }
  });
}, 5000);


console.log('Server running on port 3000');

const express = require('express');
const app = express();