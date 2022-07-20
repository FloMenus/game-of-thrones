import React from "react";
import '../styles/continent.css'

class Continent extends React.Component {
  render() {
    return (
      <div className="continent-case">
        <p className="name">{this.props.name}</p>
      </div>
    );
  }
}

export default Continent;
