import Navbar from "./Navbar";
import Banner from "./Banner";
import EmailSection from "./Email";
import Content from "./Content";
import PortfoGallery from "./PortfolioGallery";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Banner />
        <EmailSection />
        <PortfoGallery />
        <Content />
      </div>
    </div>
  );
}

export default App;
