import React from "react";
import Stock from "./Stock";

function StockContainer({stockList, onAddStock}) {

  if( !stockList){
    return <h2>Loading...</h2>
  }
  return (
    <div>
      <h2>Stocks</h2>
      {stockList.map( stockItem => <Stock stock={stockItem} key={stockItem.ticker} onStockClick={onAddStock}/>)}
    </div>
  );
}

export default StockContainer;
