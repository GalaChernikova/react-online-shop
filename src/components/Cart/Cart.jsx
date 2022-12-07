import Item from "./Item";
import Nav from "../Nav";
import Total from "./Total";

function Cart(){
    return(
        <div>
            <Nav />

            <div className="flex flex-col my-14 mx-auto max-w-7xl justify-around shadow-xl rounded-2xl p-10">
                <Item />
                <Total />
            </div>
            
        </div>
    )
}

export default Cart;