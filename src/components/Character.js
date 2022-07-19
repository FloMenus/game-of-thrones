import React from "react";

class Character extends React.Component {
  render() {
    return (
      <>
        <p>{this.props.name}</p>
        <p>{this.props.title}</p>
        <img src={this.props.image}></img>
      </>
    );
  }
}

export default Character;
