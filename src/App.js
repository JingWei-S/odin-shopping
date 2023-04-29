import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import Shop from "./Components/Shop";
import Cart from "./Components/Cart";
import Description from "./Components/Description";
import { useEffect, useState } from "react";

function App() {
  const [cartNum, setCartNum] = useState(0);

  useEffect(() => {
    const cardIconNum = document.querySelector("#product-number");
    if (cartNum > 0) {
      cardIconNum.style.display = "block";
    } else {
      cardIconNum.style.display = "none";
    }
  });


  return (
    <>
      <nav>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/cart">
            <div id="cart">
              <img
                id="cart-icon"
                src={process.env.PUBLIC_URL + "./img/shopping_cart.svg"}
                alt="shopping cart icon"
              />
              <div id="product-number" style={{ display: "none" }}>
                {cartNum}
              </div>
            </div>
          </Link>
        </li>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop setCartNum={setCartNum} cartNum={cartNum}/>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shop/product/:id" element={<Description />} />
      </Routes>
    </>
  );
}

export default App;
