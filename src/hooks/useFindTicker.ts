import Decimal from 'decimal.js-light';
import { useState } from 'react';

Decimal.set({
  precision: 20,
  rounding: Decimal.ROUND_HALF_UP,
  toExpNeg: -7,
  toExpPos: 21,
});

export const useFindTicker = () => {
  const [price, setPrice] = useState('');

  const [timestamp, setTimestamp] = useState('');

  return {
    price,
    timestamp,
    getPrice: async () => {
      try {
        // Fetch ticker data from Bitstamp API
        const response_bitstamp = await fetch('/api/bitstamp_price');

        const response_bitfinex = await fetch('/api/bitfinex_price');

        const response_coinbase = await fetch('/api/coinbase_price');

        const res_bitstamp = await response_bitstamp.json();
        const res_bitfinex = await response_bitfinex.json();
        const res_coinbase = await response_coinbase.json();

        // Set ticker data to state
        const bitstamp_value = new Decimal(res_bitstamp.last);
        const bitfinex_value = new Decimal(res_bitfinex[0][1]);
        const coinbase_value = new Decimal(res_coinbase.data.rates.USD);

        const sumValue = bitstamp_value
          .plus(bitfinex_value)
          .plus(coinbase_value);
        const averageValue = sumValue.dividedBy(3).toFixed(5);

        setTimestamp(res_bitstamp.timestamp);
        setPrice(averageValue.toString());

        // IF any errors, set error to state

        return;
      } catch (error) {
        console.log(error);
      }
    },
  };
};
