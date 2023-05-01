import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div class="intro">
      <h1>Welcome to our Plush Toy Store!</h1>
      <p>
        We offer a wide variety of high-quality plush toys for all ages. From
        cute and cuddly animals to fun and whimsical characters, we have
        something for everyone.
      </p>
      <Link to="/shop"><button className="btn">Shop Now</button></Link>
    </div>
  );
};

export default Home;
