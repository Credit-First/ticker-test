import { useEffect } from 'react';

import { useFindTicker } from '@/hooks/useFindTicker';

function LineChart() {
  const { getPrice, data } = useFindTicker();

  useEffect(() => {
    getPrice();
    setInterval(() => {
      getPrice();
    }, 2 * 1000);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div style={{ height: 400, maxWidth: '100%' }}>
      <div className='mt-4 w-full text-center text-2xl font-bold'>
        BTC/USD: {data}
      </div>
    </div>
  );
}
export default LineChart;
