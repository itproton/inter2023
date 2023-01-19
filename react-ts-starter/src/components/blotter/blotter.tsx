import React, { useState, useEffect } from "react";
import { fromEvent } from "rxjs";
import { map, filter } from "rxjs/operators";

export const StockBlotter = () => {
  const [stockPrices, setStockPrices] = useState([]);

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:3000');
    const socketObservable = fromEvent(socket, 'message').pipe(
        map(event => JSON.parse(event.data)),
        filter(data => data.type === 'stockPrices'),
        map(data => data.payload)
    );

    const subscription = socketObservable.subscribe(stockPrices => {
        setStockPrices(stockPrices);
    });

    return () => {
      subscription.unsubscribe();
    };
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
