import {useEffect, useState} from 'react';
import './App.css';
import TradeViewChart from 'react-crypto-chart';
import AssetsContainer from "./Components/AssetsContainer/AssetsContainer";
import { Coin, Asset } from "./Types";
import OverviewContainer from './Components/OverviewContainer/OverviewContainer';

function App() {

  const [coin, setCoin] = useState<Coin>({
    askPrice: '',
    at: 0,
    baseAsset: '',
    bidPrice: '',
    highPrice: '',
    lastPrice: '',
    lowPrice: '',
    openPrice: '',
    quoteAsset: '',
    symbol: '',
    volume: ''
  });

  const [assets, setAssets] = useState<Asset[]>();
  const [totalHoldings, setTotalHoldings] = useState(0);
  
  const getTotalHoldings = () => {
    let counter = 0;
    assets?.map((a: any) => {
      if(!a.sold) {
        counter += parseFloat(a.purchasePrice);
      }
    })
    setTotalHoldings(counter);
  }
  
  const fetchData = async () => {
    await fetch('https://api.wazirx.com/sapi/v1/ticker/24hr?symbol=btcusdt', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(async (response) => response.status === 200 ? setCoin(await response.json()) : console.log('data fetch failed'))
  }

  const fetchAssets = async () => {
    await fetch('https://localhost:7242/api/Assets', {
      method: 'GET',
      headers: {
        'Accept' : 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
      .then(data => setAssets(data))
  }
  
  const postCoin = async () => {
    await fetch('https://localhost:7242/api/Assets', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(coin)
        })
  }

  useEffect(() => {
    setTimeout(async () => {
      await fetchData();
    }, 60000) 
  }, [coin])

  useEffect( () => {
    fetchData();
    fetchAssets();
    getTotalHoldings();
  }, [])

  useEffect( () => {
    getTotalHoldings();
  }, [assets])
  
  const buyHandler = async (e: any) => {
    e.preventDefault();
    await fetch('https://localhost:7242/api/Assets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(coin)
    })
    fetchAssets();
  }
  
  const sellHandler = async (e: any, id: number) => {
    e.preventDefault();
    await fetch('https://localhost:7242/api/Assets/' + id, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: id.toString()
    })
    fetchAssets();
  }
  
  const getProfit = () => {
    assets?.map(a => a.sold === false).map((a: any) => parseFloat(a.purchasePrice))
        .reduce((a: any, b: any) => (a + b) / assets?.length, 0)
        .toFixed(2)
  }

  return (
    <div className="App">
      <OverviewContainer coin={coin} totalHoldings={totalHoldings} getProfit={getProfit}/>
      <TradeViewChart
        containerStyle={{
          marginTop: '30px',
          minHeight: '500px',
          maxHeight: '500px',
          minWidth: '900px',
          maxWidth: '900px',
          marginBottom: '30px',
        }}
        pair="BTCUSDT" />
      <AssetsContainer totalHoldings={totalHoldings} assets={assets} coin={coin} sellHandler={sellHandler} buyHandler={buyHandler}/>
    </div>
  );
}

export default App;
