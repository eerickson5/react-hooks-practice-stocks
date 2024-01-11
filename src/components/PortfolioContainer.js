import React from "react";
import Stock from "./Stock";

function PortfolioContainer({stocks, onRemoveStock}) {
  return (
    <div>
      <h2>My Portfolio</h2>
      {
        stocks.map( stock => <Stock company={stock.company} price={stock.price}/>)
      }
    </div>
  );
}

export default PortfolioContainer;
