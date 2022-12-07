import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import AddToCart from "./AddToCart";

function AllItems() {
  const [items, setItems] = useState("");

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products?limit=12")
      .then((res) => setItems(res.data));
  }, []);


  return (
    <div className="flex flex-wrap max-w-7xl my-14 mx-auto justify-between">
      {Array.from(items).map((it) => {
        return (
          <div
            key={it.id}
            className="flex flex-col mb-10 w-96 justify-between items-center shadow-xl rounded-2xl p-10"
          >
            <img src={it.image} className="block w-40 mb-10" />
            <h3 className="text-3xl mb-10 text-center">{it.title}</h3>
            <div className="flex w-full justify-between mb-5 items-center">
              <p className="text-xl">RATE: {it.rating.rate}</p>
              <h2 className="text-4xl">{it.price} USD</h2>
            </div>
            <AddToCart />
          </div>
        );
      })}
    </div>
  );
}

export default AllItems;
