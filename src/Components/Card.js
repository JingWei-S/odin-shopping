import "../App.css";

const Card = (props) => {
  const { toy_src, toy_id, toy_name, toy_price, setCartNum, cartNum, cartDetail, setCartDetail } = props;
  const addToCart = (e) => {
    // display the cart icon
    setCartNum(cartNum + 1);
    console.log("add to cart");
    const toy_name = e.target.previousSibling.previousSibling.textContent;
    retrieveToy(toy_name);
    console.log(cartDetail);
  };

  const retrieveToy = (toy_name) => {
    const matchedToyIndex = cartDetail.findIndex((item) => item.name === toy_name);
    const newDetail = [...cartDetail];
    newDetail[matchedToyIndex].bought = true;
    newDetail[matchedToyIndex].count += 1;
    setCartDetail(newDetail);
  }

  return (
    <div className="product-display">
      <img
        key={toy_id}
        src={process.env.PUBLIC_URL + toy_src}
        alt="A plush toy"
      />
      <p className="toy-name">{toy_name}</p>
      <p className="toy-price">{"$" + toy_price}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

export default Card;
