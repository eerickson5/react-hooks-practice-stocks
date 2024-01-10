import React, { useEffect, useState } from "react";
import Stock from "./Stock";

function StockContainer() {

  const [stockList, setStockList] = useState()

  useEffect( () => {
    fetch("http://localhost:3001/stocks")
    .then( res => res.json())
    .then(data => setStockList(data))
  }, [])

  if( !stockList){
    return <h2>Loading...</h2>
  }
  return (
    <div>
      <h2>Stocks</h2>
      {stockList.map( stockItem => <Stock company={stockItem.name} price={stockItem.price} />)}
    </div>
  );
}

export default StockContainer;
