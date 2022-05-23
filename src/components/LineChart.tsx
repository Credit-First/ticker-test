import { useState, useEffect } from 'react';
import { ResponsiveLine } from '@nivo/line';
import { useFindTicker } from '@/hooks/useFindTicker';

function LineChart() {
  const {
    getPrice,
    price,
    timestamp,
  }: { getPrice: () => void; price: string; timestamp: string } =
    useFindTicker();
  const [averageTickerValue, setAverageTickerValue] = useState<any>({
    id: 'average_price',
    color: 'hsl(70, 70%, 50%)',
    data: [],
  });

  useEffect(() => {
    getPrice();
    setInterval(() => {
      getPrice();
    }, 2 * 1000);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (price == '0') return;

    const date = new Date(Number(timestamp) * 1000);
    const hours = date.getHours();
    const minutes = '0' + date.getMinutes();
    const seconds = '0' + date.getSeconds();
    const formattedTime =
      hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

    averageTickerValue.data.push({
      x: formattedTime,
      y: price,
    });

    if (averageTickerValue.data.length > 15) {
      averageTickerValue.data = averageTickerValue.data.slice(1);
    }
  }, [price, timestamp]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div style={{ height: 400, maxWidth: '100%' }}>
      <div className='mt-4 w-full text-center text-2xl font-bold'>
        BTC/USD: {price}
      </div>
      {averageTickerValue.data.length > 0 && (
        <ResponsiveLine
          data={[averageTickerValue]}
          margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
          enableArea={false}
          theme={{ textColor: 'white' }}
          pointLabelYOffset={0}
          xScale={{ type: 'point' }}
          yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
          }}
          yFormat=' >-.2f'
          axisTop={null}
          axisRight={null}
          pointSize={10}
          useMesh={true}
          colors={['#028ee6', '#774dd7']}
          pointColor='white'
          pointBorderWidth={2}
          pointBorderColor={{ from: 'serieColor' }}
          enablePointLabel={true}
          enableSlices='x'
          legends={[
            {
              anchor: 'bottom',
              direction: 'row',
              justify: false,
              translateX: 100,
              translateY: 0,
              itemsSpacing: 0,
              itemDirection: 'left-to-right',
              itemWidth: 80,
              itemHeight: 20,
              itemOpacity: 0.75,
              symbolSize: 12,
              symbolShape: 'circle',
              symbolBorderColor: 'rgba(0, 0, 0, .5)',
              effects: [
                {
                  on: 'hover',
                  style: {
                    itemBackground: 'rgba(0, 0, 0, .03)',
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
        />
      )}
    </div>
  );
}
export default LineChart;
