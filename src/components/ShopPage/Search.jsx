function Search() {
  return (
    <div className="flex my-14 mx-auto max-w-7xl justify-around shadow-xl rounded-2xl py-10 text-2xl">
      <form role="search" className="flex w-full mx-20">
        <input type="search" id="search-field" name="search"  placeholder="Search"
                className="w-full mr-10 py-5 px-5 rounded-2xl bg-slate-200"/>
        <button type="submit" className="block text-2xl py-2.5 px-10 bg-violet-200 rounded-xl">SEARCH</button>
      </form>
    </div>
  );
}

export default Search;
