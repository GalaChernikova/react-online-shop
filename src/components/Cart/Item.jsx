import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios'
import Counter from "./Counter";

function Item(){
    const [item, setItem] = useState('')

    useEffect(() => {
        axios
            .get('https://fakestoreapi.com/products/15')
            .then(res => setItem(res.data))
    }, [])

    console.log(item)

    return(
        <div className="flex justify-between items-center w-full shadow p-10">
            <img src={item.image} className="block w-40"/>
            <h2 className="text-2xl w-60">{item.title}</h2>
            <p className="text-3xl">{item.price} USD</p>

            <Counter />
        </div>
    )
}

export default Item;