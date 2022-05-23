export interface pairProps {
  trading: string;
  base_decimals: string;
  url_symbol: string;
  name: string;
  instant_and_market_orders: string;
  minimum_order: string;
  counter_decimals: string;
  description: string;
}
export interface pairDataProps {
  high: number;
  last: number;
  timestamp: number;
  bid: number;
  vwap: number;
  volume: number;
  low: number;
  ask: number;
  open: number;
}
