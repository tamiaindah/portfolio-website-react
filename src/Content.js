import { useState, useEffect } from "react";
import PortfolioList from "./PortfolioList";

const Content = () => {
  const [portfolios, setPortfolios] = useState(null);

  const handleDelete = (id) => {
    const newPortfolios = portfolios.filter((portfolio) => portfolio.id !== id);
    setPortfolios(newPortfolios);
  };

  useEffect(() => {
    fetch("http://localhost:3000/portfolios")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  }, []);

  // nampilin card
  return (
    <div className="content">
      <div className="container">
        <div className="col-1">
          {portfolios && (
            <PortfolioList
              portfolios={portfolios}
              title="Portfolios"
              handleDelete={handleDelete}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Content;
