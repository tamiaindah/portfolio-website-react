import logo from "./assets/Logo.svg";
import burger from "./assets/burger.svg";

const handleClick = () => {
  console.log("hello, mia");
};

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-section">
          <div className="burger">
            <a href onClick={handleClick}>
              <img src={burger} />
            </a>
          </div>
          <div className="links">
            <a href="mailto: tamiaindah6600@gmail.com">github</a>
            <a href="/">dribbble</a>
            <a href="/create">linkedin</a>
          </div>
          <div className="logo">
            <a href="/">
              <img src={logo} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
