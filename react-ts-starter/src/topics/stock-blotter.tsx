import React, { useState, useEffect } from 'react';

export const StockBlotter = () => {
    const [stockPrices, setStockPrices] = useState([] as any[]);

    useEffect(() => {
        const fetchStockPrices = async () => {
            // Make an API call to the server to fetch the current stock prices
            const { data } = await (await fetch('https://example.com/stockprices')).json();
            setStockPrices(data);
        };
        fetchStockPrices();
        // set up an interval to fetch the stock prices every 5 seconds
        const intervalId = setInterval(fetchStockPrices, 5000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <table>
            <thead>
                <tr>
                    <th>Stock Symbol</th>
                    <th>Price</th>
                    <th>Change</th>
                </tr>
            </thead>
            <tbody>
                {stockPrices.map((stock) => (
                    <tr key={stock.symbol}>
                        <td>{stock.symbol}</td>
                        <td>{stock.price}</td>
                        <td>{stock.change}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
