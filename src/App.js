import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import Shop from './Components/Shop';
import Cart from './Components/Cart';
import Description from './Components/Description';

function App() {
  return (
    <>
    <nav>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/shop">Shop</Link></li>
      <li><Link to="/cart">Cart</Link></li>
    </nav>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/shop/product/:id' element={<Description/>}/>
    </Routes>
    </>
  );
}

export default App;
