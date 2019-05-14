import React from "react";
import SearchResults from "../containers/SearchResults";
import SearchBox from "../containers/SearchBox";

function Search(props) {
  return (
    <main>
      <div className="row mb-4">
        <div className="col-md-12">
          <SearchBox />
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <SearchResults />
        </div>
      </div>
    </main>
  );
}

export default Search;