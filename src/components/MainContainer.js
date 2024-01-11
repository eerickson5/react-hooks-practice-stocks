import React, {useState, useEffect} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {


  const [stockList, setStockList] = useState([])
  const [filter, setFilter] = useState()
  const [sort, setSort] = useState()

  useEffect( () => {
    fetch("http://localhost:3001/stocks")
    .then( res => res.json())
    .then(data => setStockList(data))
  }, [])

  const sortProperly = (stocks) => {
    if(sort === "Alphabetically"){
      return stocks.sort( (a,b) => a.ticker.localeCompare(b.ticker))
    } else if(sort === "Price") {
      return stocks.sort( (a,b) => a.price - b.price)
    }
    return stocks
  }


  const filteredStocks = filter ? stockList.filter(stock => stock.type === filter) : stockList

  return (
    <div>
      <SearchBar filter={filter} onChangeFilter={setFilter} sort={sort} onChangeSort={setSort}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stockList={
            sortProperly(filteredStocks)
            }/>
        </div>
        <div className="col-4">
          <PortfolioContainer />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
