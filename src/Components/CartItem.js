import { React, useState, useEffect } from "react";
const CartItem = (props) => {
  const { cartDetail, setCartDetail, cartNum, setCartNum, item } = props;
  const [count, setCount] = useState(item.count);

  const updateCart = (id, count) => {
    const newArray = [...cartDetail];
    const productIndex = cartDetail.findIndex((item) => item.id === id);
    if (count === 0) {
      newArray[productIndex].bought = false;
      newArray[productIndex].count = count;
    } else {
      newArray[productIndex].count = count;
    }
    setCartDetail(newArray);
  };

  useEffect(() => {
    updateCart(item.id, count);
  }, [count]);

  const handleIncrement = () => {
    setCount(count + 1);
    setCartNum(cartNum + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
    setCartNum(cartNum - 1);
  };

  const handleRemoval = () => {
    setCartNum(cartNum - count);
    setCount(0);
  };
  return (
    <li className="cartItem" key={item.id}>
      <img src={process.env.PUBLIC_URL + item.src} alt={item.name} />
      <div className="eachItem">
        <p className="cart-product-name">{item.name}</p>
        <p className="cart-product-price">{"$" + (item.price * item.count).toFixed(2)}</p>
        <p className="cart-count">
          <button onClick={handleDecrement} className="cart-count-icon">
          ➖
          </button>
          {item.count}
          <button onClick={handleIncrement} className="cart-count-icon">
          ➕
          </button>
        </p>
        <img
          src={process.env.PUBLIC_URL + "./img/delete.svg"}
          alt="deletion cart icon"
          onClick={handleRemoval}
          className="cart-product-removal"
        />
      </div>
    </li>
  );
};

export default CartItem;
