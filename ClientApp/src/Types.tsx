

export interface Coin {
    askPrice: string,
    at: number,
    baseAsset: string,
    bidPrice: string,
    highPrice: string,
    lastPrice: string,
    lowPrice: string,
    openPrice: string,
    quoteAsset: string,
    symbol: string,
    volume: string
  }

export interface Asset {
    id: number,
    purchasePrice: string,
    purchaseDate: string,
    sold: boolean
}