import React, {Component} from "react";

class Card extends Component {
  render() {
    return (
      <div className="card mb-4">
        <div className="card-body">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Card;