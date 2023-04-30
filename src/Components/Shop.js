import Card from "./Card";
const Shop = (props) => {
  const toys = props.cartDetail;

  return (
    <div>
      <div className="products">
          {toys.map((toy) => {
            return (
              <Card
                toy_src={toy.src}
                toy_id={toy.id}
                toy_name={toy.name}
                toy_price={toy.price}
                setCartNum={props.setCartNum}
                cartNum={props.cartNum}
                cartDetail={props.cartDetail}
                setCartDetail={props.setCartDetail}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Shop;
