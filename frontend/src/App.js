import { useSelector } from "react-redux";
import { BrowserRouter, Link, Route } from "react-router-dom";
import Cartpage from "./pages/Cartpage";
import Homepage from "./pages/Homepage";
import ProductPage from "./pages/ProductPage";

function App(props) {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  };
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand-name">
            <button onClick={openMenu}>&#9776;</button>
            <Link to="/">E-commerce</Link>
          </div>
          <div className="header-links">
            <Link to="/cart/">
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
              Cart
            </Link>
            <Link to="/sign_in/">Sign in</Link>
          </div>
        </header>

        {/* aside  */}
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
        {/* aside  */}

        <main className="main">
          <div className="content">
            <Route path="/cart/:id?" component={Cartpage}></Route>
            <Route path="/products/:id" component={ProductPage} />
            <Route path="/" exact={true} component={Homepage} />
          </div>
        </main>

        {/* footnotes */}
        <footer className="footer">All rights reserved.</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
