import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import Shop from "./Components/Shop";
import Cart from "./Components/Cart";
import Description from "./Components/Description";
import { useEffect, useState } from "react";

function App() {
  const [cartNum, setCartNum] = useState(0);
  const [cartDetail, setCartDetail] = useState([
    {
      src: "/img/Octupus 1.png",
      id: 1,
      name: "Tentacle Terry",
      price: "19.99",
      bought: false,
      count: 0,
    },
    {
      src: "/img/Octupus 2.png",
      id: 2,
      name: "Octo Oscar",
      price: "19.99",
      bought: false,
      count: 0,
    },
    {
      src: "/img/Cthulhu 1.png",
      id: 3,
      name: "Huggable Horror",
      price: "24.99",
      bought: false,
      count: 0,
    },
    {
      src: "/img/Cthulhu 2.png",
      id: 4,
      name: "Whimsical Whispers",
      price: "24.99",
      bought: false,
      count: 0,
    },
    {
      src: "/img/Cthulhu 3.png",
      id: 5,
      name: "Cozy Kraken",
      price: "24.99",
      bought: false,
      count: 0,
    },
    {
      src: "/img/Owl 1.png",
      id: 6,
      name: "Wise Watchtower",
      price: "21.99",
      bought: false,
      count: 0,
    },
    {
      src: "/img/Owl 2.png",
      id: 7,
      name: "Funny Woodsy",
      price: "21.99",
      bought: false,
      count: 0,
    },
    {
      src: "/img/Owl 3.png",
      id: 8,
      name: "All Nighty",
      price: "22.99",
      bought: false,
      count: 0,
    },
    {
      src: "/img/Rabbit 1.png",
      id: 9,
      name: "Bunny Bonbon",
      price: "16.99",
      bought: false,
      count: 0,
    },
    {
      src: "/img/Rabbit 2.png",
      id: 10,
      name: "Cinnamon Cottontail",
      price: "16.99",
      bought: false,
      count: 0,
    },
    {
      src: "/img/Poodle 1.png",
      id: 11,
      name: "Pom Pom Pup",
      price: "27.99",
      bought: false,
      count: 0,
    },
    {
      src: "/img/Poodle 2.png",
      id: 12,
      name: "Fifi Fluffball",
      price: "19.99",
      bought: false,
      count: 0,
    },
  ]);

  useEffect(() => {
    const cardIconNum = document.querySelector("#product-number");
    if (cartNum > 0) {
      cardIconNum.style.display = "block";
    } else {
      cardIconNum.style.display = "none";
    }
  }, [cartDetail]);

  return (
    <>
      <nav>
        <li>
          <Link to="/odin-shopping/">Home</Link>
        </li>
        <li>
          <Link to="/odin-shopping/shop">Shop</Link>
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
        <Route path="/odin-shopping/" element={<Home />} />
        <Route
          path="/odin-shopping/shop"
          element={
            <Shop
              setCartNum={setCartNum}
              cartNum={cartNum}
              cartDetail={cartDetail}
              setCartDetail={setCartDetail}
            />
          }
        />
        <Route
          path="/odin-shopping/cart"
          element={
            <Cart
              cartDetail={cartDetail}
              setCartDetail={setCartDetail}
              setCartNum={setCartNum}
              cartNum={cartNum}
            />
          }
        />
        <Route
          path="/odin-shopping/shop/product/:id"
          element={
            <Description
              cartDetail={cartDetail}
              setCartDetail={setCartDetail}
              setCartNum={setCartNum}
              cartNum={cartNum}
            />
          }
        />
      </Routes>
      <footer>
        <div class="footer-content">
          <p>Paws and Plushies &copy; 2023</p>
          <ul>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default App;
