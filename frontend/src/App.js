import { BrowserRouter, Link, Route } from "react-router-dom";
import HomePage from "./Component/HomePage";
import ProductPage from "./Component/ProductPage";

function App(props) {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  };
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand-name">
            <button onClick={openMenu}>&#9776;</button>
            <Link to="/">E-commerce</Link>
          </div>
          <div className="header-links">
            <Link to="/cart/">Cart</Link>
            <Link to="/sign_in/">Sign in</Link>
          </div>
        </header>

        <aside className="sidebar">
          <div className="back-button">
            <button onClick={closeMenu}>&#8249; BACK</button>
          </div>
          <ul>
            <li>
              <Link to="/">Products</Link>
            </li>
            <li>
              <Link to="/">categories</Link>
            </li>
          </ul>
        </aside>
        <main className="main">
          <div className="content">
            <Route path="/products/:_id" component={ProductPage} />
            <Route path="/" exact={true} component={HomePage} />
          </div>
        </main>

        {/* footnotes */}
        <footer className="footer">All rights reserved.</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
