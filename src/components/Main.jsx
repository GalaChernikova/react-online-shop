import main from "./../images/main.png";
import { NavLink } from "react-router-dom";
import Nav from "./Nav";

function Main() {
  return (
    <div>
      <Nav />

      <div className="flex my-14 mx-auto max-w-7xl justify-around shadow-xl rounded-2xl p-10">
        <img src={main} alt="main" className="block w-6/12" />
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-5xl mb-10">Online shopping app</h1>
          <NavLink
            to="/shop"
            className="block text-3xl py-2.5 px-10 bg-violet-200 rounded-xl"
          >
            GO!
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Main;
