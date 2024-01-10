import React, {useState, useEffect} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {


  const [stockList, setStockList] = useState()
  const [filter, setFilter] = useState()
  const [sort, setSort] = useState()

  useEffect( () => {
    fetch("http://localhost:3001/stocks")
    .then( res => res.json())
    .then(data => setStockList(data))
  }, [])

  useEffect( () => {
    if(sort === "Price"){
      console.log(sort)
      setStockList(stockList.sort( (a, b) => a.name.localeCompare(b.name)))
    } else if (sort === "Alphabetically"){
      console.log(sort)
      setStockList(stockList.sort( (a, b) => a.price - b.price))
    }
  }, [sort, stockList])

  return (
    <div>
      <SearchBar filter={filter} onChangeFilter={setFilter} sort={sort} onChangeSort={setSort}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stockList={stockList}/>
        </div>
        <div className="col-4">
          <PortfolioContainer />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
