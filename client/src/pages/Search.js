import React, {Component} from "react";
import SearchResults from "../components/SearchResults";
import SearchBox from "../containers/SearchBox";

class Search extends Component {
  constructor(props) {
    super(props);

    this.handleResultsChange = this.handleResultsChange.bind(this);

    this.state = {
      results: {},
    };
  }

  handleResultsChange(results) {
    this.setState({
      results: results,
    });
  }
  
  render() {
    return (
      <main>
        <div className="row mb-4">
          <div className="col-md-12">
            <SearchBox handleResultsChange={this.handleResultsChange} />
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <SearchResults results={this.state.results} />
          </div>
        </div>
      </main>
    );
  }
}

export default Search;