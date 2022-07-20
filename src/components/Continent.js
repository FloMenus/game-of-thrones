import React from "react";
import "../styles/continent.css";

class Continent extends React.Component {
  render() {
    return (
      <div className="continent-case">
        <h2 className="name">{this.props.name}</h2>
      </div>
    );
  }
}

export default Continent;
