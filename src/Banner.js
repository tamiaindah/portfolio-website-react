const Banner = () => {
  let name;
  const handleClick = () => {
    console.log("hello, mia");
  };
  return (
    <div className="banner">
      <div className="container">
        <div className="banner-title">
          <h1>not too geeky - but i code and design</h1>
        </div>
        <span className="banner-hi">hi i’m Mia, nice to meet ya!</span>
        <button onClick={handleClick}>About me</button>
      </div>
    </div>
  );
};

export default Banner;
