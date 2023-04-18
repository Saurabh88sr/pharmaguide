const SearchBar = () => {
  return (
    <div className="p-5 bg-light">
      <h3 className="">Search for your Medicine</h3>
       <div className="input-group ">
  <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
  <button type="button" className="btn btn-outline-primary">Search</button>
</div>
      
    </div>
  );
};

export default SearchBar;
