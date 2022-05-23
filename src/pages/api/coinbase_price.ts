import { NextApiRequest, NextApiResponse } from 'next';

import { httpGet } from '@/utils/http.util';

export default async function getCoinbasePrice(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const result = await httpGet(
    'https://api.coinbase.com/v2/exchange-rates?currency=BTC'
  );
  res.json(result);
}
