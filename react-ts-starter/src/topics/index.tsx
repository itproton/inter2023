import * as React from 'react';
import { LoginForm } from './login-form';

export const Ticker = () => {
    React.useEffect(() => {
        const socket = new WebSocket(`wss://ws.finnhub.io?token=${process.env.FINHUB_TOKEN}`);

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

    });

    return <div>Tick</div>;
}

export const TopicsDashboard = () => {
    return <div>
        Dashboard
        <Ticker />
        <LoginForm />
    </div>;
}