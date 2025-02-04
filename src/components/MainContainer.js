import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [sortBy, setSortBy] = useState("Alphabetically");
  const [filterBy, setFilterBy] = useState("All");

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then((response) => response.json())
      .then((data) => setStocks(data));
  }, []);

  const handleBuyStock = (stock) => {
    if (!portfolio.some((s) => s.id === stock.id)) {
      setPortfolio([...portfolio, stock]);
    }
  };

  const handleSellStock = (stock) => {
    setPortfolio(portfolio.filter((s) => s.id !== stock.id));
  };

  const handleSortChange = (value) => {
    setSortBy(value);
  };

  const handleFilterChange = (value) => {
    setFilterBy(value);
  };

  const sortedStocks = [...stocks].sort((a, b) => {
    if (sortBy === "Alphabetically") {
      return a.ticker.localeCompare(b.ticker);
    } else {
      return a.price - b.price;
    }
  });

  const filteredStocks = sortedStocks.filter(
    (stock) => filterBy === "All" || stock.type === filterBy
  );

  return (
    <div>
      <SearchBar
        onSortChange={handleSortChange}
        onFilterChange={handleFilterChange}
      />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={filteredStocks} onBuyStock={handleBuyStock} />
        </div>
        <div className="col-4">
          <PortfolioContainer
            portfolio={portfolio}
            onSellStock={handleSellStock}
          />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;