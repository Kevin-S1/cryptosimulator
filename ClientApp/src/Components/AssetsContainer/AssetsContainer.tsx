import React, {useEffect, useState} from 'react';
import internal from 'stream';
import './assetsContainer.css';


function AssetsContainer( { totalHoldings, assets , coin , sellHandler, buyHandler } : any) {

    return (
        <div className='assets-container'>
            <button className='button-green' onClick={e => buyHandler(e)}>Buy BTC at current price</button>
            <h4>My Assets:</h4>
            <h5>Total holdings: ${totalHoldings}</h5>
            {assets?.map((a: any) => {
                if(a.sold === false) {
                    return(
                        <>
                            <ul className='asset-description'>
                                <li className='date'>{new Intl.DateTimeFormat('se-SE', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' })
                                    .format(a.purchaseDate)}</li>
                                <li className='price'> ${a.purchasePrice}</li>
                                <li className={((parseFloat(coin.lastPrice) - (parseFloat(a.purchasePrice))) / parseFloat(a.purchasePrice) * 100) > 0 ? 'text-green' : 'text-red'}> {(((parseFloat(coin.lastPrice) - (parseFloat(a.purchasePrice))) / parseFloat(a.purchasePrice)) * 100).toFixed(2)}%</li>
                                <button className='button-red' onClick={e => sellHandler(e, a.id)}>Sell</button>
                            </ul>
                        </>

                    )
                }

            })}
        </div>
    );
}

export default AssetsContainer;
