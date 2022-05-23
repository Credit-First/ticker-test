import clsx from 'clsx';
import { useEffect, useState } from 'react';

import { httpGet } from '@/utils/http.util';
import { pairProps } from '@/utils/types.util';

const TickerPairList = () => {
  const [selectedPair, setSelectedPair] = useState('');
  const [tickerPairList, setTickerPairList] = useState([]);

  const handleSelectPair = (name: string) => async () => {
    setSelectedPair(name);
  };

  useEffect(() => {
    httpGet('/api/bitstamp_ticker_pairs').then((res) => {
      setTickerPairList(res);
      handleSelectPair(res[0].url_symbol)();
    });
  }, []);

  return (
    <div className='flex flex-col items-start justify-center'>
      <div className='max-h-[400px] w-full overflow-y-scroll rounded-xl bg-zinc-800 p-2'>
        {tickerPairList.length === 0 ? (
          <>No pairs</>
        ) : (
          <div className='grid grid-cols-2 gap-2 sm:grid-cols-3 xl:grid-cols-5'>
            {tickerPairList.map((item: pairProps, key: number) => (
              <button
                key={key}
                className={clsx(
                  'rounded-lg p-2 hover:bg-zinc-600',
                  selectedPair === item.name
                    ? 'bg-zinc-400 text-white'
                    : ' bg-zinc-700'
                )}
                onClick={handleSelectPair(item.url_symbol)}
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </div>
      <div className='mt-12 flex min-h-[300px] w-full flex-1 items-center justify-center rounded-xl bg-zinc-800 p-2'></div>
    </div>
  );
};

export default TickerPairList;
