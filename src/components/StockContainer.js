import React from "react";
import Stock from "./Stock";

function StockContainer({stockList}) {


  if( !stockList){
    return <h2>Loading...</h2>
  }
  return (
    <div>
      <h2>Stocks</h2>
      {stockList.map( stockItem => <Stock stock={stockItem} key={stockItem.ticker} />)}
    </div>
  );
}

export default StockContainer;
