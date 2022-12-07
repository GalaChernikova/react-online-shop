import AllItems from "../Items/AllItems";
import Nav from "../Nav";
import Category from "./Category";
import Search from "./Search";

function Shop(){
    return(
        <div>
            <Nav />
            <Search />
            <Category />
            <AllItems />
        </div>
    )
}

export default Shop;