import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Shop from "./components/ShopPage/Shop";
import Cart from "./components/Cart/Cart";
import About from "./components/About";
import Delivery from "./components/Delivery";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<Main />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
