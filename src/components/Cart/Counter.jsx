function Counter(){
    return(
        <div className="flex text-3xl items-center">
            <button type="submit" className="bg-violet-200 px-5 py-3 rounded-full"> — </button>
            <div className="mx-10"> 1 </div>
            <button  type="submit" className="bg-violet-200 px-5 py-3 rounded-full"> + </button>
        </div>
    )
}

export default Counter;