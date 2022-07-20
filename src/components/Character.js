import React from "react";
import "../styles/character.css";

class Character extends React.Component {
  render() {
    return (
      <div className="character-case">
        <div className="character-content">
          <img src={this.props.image}></img>
          <h2 className="name">{this.props.name}</h2>
          <p>{this.props.title}</p>
        </div>
        {this.props.addToFavorites && (
        <button className="favorite-button" onClick={this.props.addToFavorites}>
          <p>Favoris</p>
        </button>
        )}
      </div>
    );
  }
}

export default Character;
