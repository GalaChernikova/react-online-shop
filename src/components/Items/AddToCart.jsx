function AddToCart(props){
    const {item, onAdd, onRemove} = props;

    return(
        <div>
            <button type="submit" className="block text-2xl py-2.5 px-10 bg-violet-200 rounded-xl"
                onClick={() => onAdd(item)}
            >Add to cart</button>
        </div>
    )
}

export default AddToCart;