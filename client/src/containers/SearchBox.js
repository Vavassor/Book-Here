import React, {useState} from "react";
import Api from "../utilities/Api";

function SearchBox(props) {
  const form = React.createRef();

  const [wasValidated, setWasValidated] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const passedValidation = form.current.checkValidity();
    setWasValidated(true);
    
    if (passedValidation) {
      Api
        .search(searchQuery)
        .then((response) => {
          setWasValidated(false);
          const results = response.data || [];
          for (const volume of results.items) {
            if (!volume.volumeInfo.authors) {
              volume.volumeInfo.authors = ["Missing Author"];
            }
          }
          props.handleResultsChange(results);
        })
        .catch(error => console.error(error));
    }
  }

  return (
    <div className="card">
      <div className="card-body">
        <form id="search"
          onSubmit={handleFormSubmit}
          className={wasValidated ? "was-validated" : ""}
          ref={form}
          noValidate
        >
          <div className="form-group">
            <label htmlFor="search">Find Books</label>
            <input
              id="search-query"
              className="form-control"
              type="text"
              value={searchQuery}
              onChange={event => setSearchQuery(event.target.value)}
              required
            />
            <div className="invalid-feedback">Please enter a query.</div>
          </div>

          <button type="submit" className="btn btn-primary">Search</button>
        </form>
      </div>
    </div>
  );
}

export default SearchBox;