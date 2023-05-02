import { useEffect, useState } from "react";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const Cart = (props) => {
  const { cartDetail, setCartDetail, cartNum, setCartNum } = props;
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const calTotal = cartDetail.reduce(
      (accumulator, currentValue) =>
        accumulator + currentValue.count * currentValue.price,
      0
    );
    setTotal(calTotal.toFixed(2));
  }, [cartDetail]);

  const handleClick = (event) => {
    event.preventDefault();
    window.location.reload();
  };

  return (
    <div className="cart-whole">
      <ul>
        {cartDetail.map((toy) => {
          return toy.bought ? (
            <CartItem
              cartDetail={cartDetail}
              setCartDetail={setCartDetail}
              setCartNum={setCartNum}
              cartNum={cartNum}
              item={toy}
            />
          ) : (
            <></>
          );
        })}
      </ul>
      <div className="order-summary">
        <div className="total-sum">
          <p>Total</p>
          <p>{"$" + total}</p>
        </div>
        <p>{total > 65? "Free Shipping 🚀":"Shipping $10"}</p>
      </div>
      <div onClick={handleClick} style={{marginLeft: "auto", marginTop: "2em"}}>
        <Link to="/" id="place-order">Place Order 🔥</Link>
      </div>
    </div>
  );
};

export default Cart;
