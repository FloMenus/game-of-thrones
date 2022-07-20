import React from "react";
import '../styles/character.css'

class Character extends React.Component {
  render() {
    return (
      <div className="character-case">
        <div className="character-content">
        <img src={this.props.image}></img>
        <p className="name">{this.props.name}</p>
        <p>{this.props.title}</p>
        </div>
        <button className="favorite-button" onClick={this.props.onClick}>Favoris</button>
      </div>
    );
  }
}

export default Character;
