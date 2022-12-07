import { NavLink } from "react-router-dom";
import cart from "./../images/cart.png";

function Nav(props) {
  const {counter} = props;

  return (
    <div className="flex my-14 mx-auto max-w-7xl justify-around shadow-xl rounded-2xl py-4 text-2xl">
      <NavLink to="*">HOME</NavLink>
      <NavLink to="/shop">SHOP</NavLink>
      <NavLink to="/about">ABOUT</NavLink>
      <NavLink to="/delivery">DELIVERY</NavLink>
      <NavLink to="/cart" className="flex">
        <div className="mr-2.5">1</div>
        <img src={cart} className="block w-5" />
      </NavLink>
    </div>
  );
}

export default Nav;
