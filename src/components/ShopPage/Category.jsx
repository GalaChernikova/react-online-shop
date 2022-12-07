import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function Category() {
  const [category, setCategory] = useState("");

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((res) => setCategory(res.data));
  }, []);


  return (
    <div className="flex my-14 mx-auto max-w-7xl justify-around shadow-xl rounded-2xl py-10 text-2xl">
      {Array.from(category).map((cat) => {
        return (
          <div key={cat}>
            <button type="submit">{cat} &#9660;   </button>
          </div>
        );
      })}
    </div>
  );
}

export default Category;
