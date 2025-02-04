import React from "react";

function Stock({ stock, onBuyStock}) {
  return (
    <div onClick={() => onBuyStock(stock)}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{stock.ticker}</h5>
          <p className="card-text">{stock.price}</p>
          <p className="card-text">{stock.type}</p>

        </div>
      </div>
    </div>
  );
}
export default Stock;
