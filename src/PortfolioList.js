const PortfolioList = ({ portfolios, title }) => {
  return (
    <div className="portfolios">
      <h2> {title}</h2>
      <div className="portfolio-card">
        {portfolios.map((portfolio) => (
          <div className="portfolio-preview" key={portfolio.id}>
            <h3>{portfolio.title}</h3>
            <p>Category: {portfolio.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioList;
