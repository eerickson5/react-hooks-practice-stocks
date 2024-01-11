import React from "react";
import Stock from "./Stock";

function PortfolioContainer({stocks, onRemoveStock}) {
  return (
    <div>
      <h2>My Portfolio</h2>
      {
        stocks.map( stockItem => <Stock stock={stockItem} key={stockItem.ticker} onStockClick={onRemoveStock}/>)
      }
    </div>
  );
}

export default PortfolioContainer;
