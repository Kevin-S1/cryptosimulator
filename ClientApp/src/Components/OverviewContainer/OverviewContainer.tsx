import React, {useEffect, useState} from 'react';
import internal from 'stream';
import { Coin, Asset } from '../../Types';
import './overviewContainer.css';


function OverviewContainer({coin, totalHoldings, getProfit} : any) {

  return (
    <div className='overview-container'>
        <h4>Overview: </h4>
        <div className='overview-container_sub'>
            <div className='overview-items'>
                <h5>Symbol:</h5>
                <h5>Total holdings:</h5>
                <h5>Total profit:</h5>
                <h5>Volume:</h5>
                <h5>Low:</h5>
                <h5>High:</h5>
            </div>
            <div className='overview-items'>
                <h5>{coin.symbol}</h5>
                <h5>${totalHoldings}</h5>
                <h5>${getProfit}</h5>
                <h5>{coin.volume}</h5>
                <h5>${coin.lowPrice}</h5>
                <h5>${coin.highPrice}</h5>
            </div>
        </div>
    </div>
  );
}

export default OverviewContainer;
