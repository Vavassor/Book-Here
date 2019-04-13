import React, {Component} from "react";
import Api from "../utilities/Api";

class SearchBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: "",
      wasValidated: false,
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

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
      Api
        .search(this.state.searchQuery)
        .then((response) => {
          this.setState({
            wasValidated: false,
          });
          const results = response.data || [];
          for (const volume of results.items) {
            if (!volume.volumeInfo.authors) {
              volume.volumeInfo.authors = ["Missing Author"];
            }
          }
          this.props.handleResultsChange(results);
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
    );
  }
}

export default SearchBox;