import React, {Component} from "react";
import Api from "../utilities/Api";
import SearchResults from "../components/SearchResults";

class Search extends Component {
  constructor(props) {
    super(props);

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

    this.state = {
      results: [],
      searchQuery: "",
      wasValidated: false,
    };

    this.form = React.createRef();
  }

  handleFormSubmit(event) {
    event.preventDefault();

    const form = this.form.current;
    const passedValidation = form.checkValidity();
    this.setState({
      wasValidated: true,
    });
    
    if (passedValidation) {
      Api.getBooks()
        .then((response) => {
          this.setState({
            results: response.body || [],
            wasValidated: false,
          });
        })
        .catch(error => console.error(error));
    }
  }

  handleInputChange(event) {
    const {name, value} = event.target;
    this.setState({
      [name]: value,
    });
  }
  
  render() {
    return (
      <main>
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <form id="search"
                  onSubmit={this.handleFormSubmit}
                  className={this.state.wasValidated ? "was-validated" : ""}
                  ref={this.form}
                  noValidate
                >
                  <div className="form-group">
                    <label htmlFor="search">Find Books</label>
                    <input
                      id="search-query"
                      className="form-control"
                      type="text"
                      name="searchQuery"
                      value={this.state.searchQuery}
                      onChange={this.handleInputChange}
                      required
                    />
                    <div className="invalid-feedback">Please enter a query.</div>
                  </div>

                  <button type="submit" className="btn btn-primary">Search</button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                Results
              </div>
              <div className="card-body">
                <SearchResults results={this.state.results} />
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Search;