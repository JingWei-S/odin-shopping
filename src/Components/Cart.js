import { useEffect, useState } from "react";
import CartItem from "./CartItem";

const Cart = (props) => {
  const { cartDetail, setCartDetail, cartNum, setCartNum } = props;
  // const findAddedProduct = () => {
  //     const productArray = [];
  //     cartDetail.findIndex((item) => {
  //         if (item.bought) {
  //             productArray.push({
  //                 toy_src: item.src,
  //                 toy_name: item.name,
  //                 toy_price: item.count * item.price,
  //                 toy_count: item.count
  //             });
  //         }
  //     });
  //     return productArray;
  // }

  return (
    <div>
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
    </div>
  );
};

export default Cart;
