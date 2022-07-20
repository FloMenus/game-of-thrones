import React from "react";
import Character from "./components/Character";
import Continent from "./components/Continent";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      characters: [],
      favorites: [],
      favoritesEnabled: false,
      continents: [],
      continentsEnabled: false,
    };
  }
  async componentDidMount() {
    const responseChar = await fetch(
      "https://thronesapi.com/api/v2/Characters"
    );
    const fetchedChar = await responseChar.json();
    const responseCont = await fetch(
      "https://thronesapi.com/api/v2/Continents"
    );
    const fetchedCont = await responseCont.json();

    this.setState({
      characters: fetchedChar,
      continents: fetchedCont,
    });
  }

  handleFavoriteClick = (character) => {
    const cloneFavorites = [...this.state.favorites, character];
    this.setState({
      favorites: cloneFavorites,
    });
    console.log(this.state.favorites);
  };

  handleFavoriteDisplay = () => {
    if (this.state.favoritesEnabled == false) {
      this.setState({
        favoritesEnabled: true,
      });
    } else {
      this.setState({
        favoritesEnabled: false,
      });
    }
    console.log(this.state.continents);
  };

  handleContinentsActivate = () => {
    this.setState({
      continentsEnabled: true,
    });
  };
  handleContinentsDesactivate = () => {
    this.setState({
      continentsEnabled: false,
    });
  };
  render() {
    return (
      <>
        <nav>
          <button onClick={this.handleContinentsDesactivate}>Characters</button>
          <button onClick={this.handleContinentsActivate}>Continents</button>
        </nav>
        <h1>Game of Thrones</h1>

        {this.state.continentsEnabled && (
          <div class="continent-wrapper">
            {this.state.continents.map((continent) => (
              <Continent name={continent.name} />
            ))}
          </div>
        )}

        {!this.state.continentsEnabled && (
          <div>
            <form>
              <input
                type="checkbox"
                id="favorite-radio"
                onChange={this.handleFavoriteDisplay}
              />
              <label htmlFor="favorite-radio">Favoris</label>
            </form>
            {!this.state.favoritesEnabled && (
              <div className="characters-wrapper">
                {this.state.characters.map((character) => (
                  <Character
                    name={character.fullName}
                    title={character.title}
                    image={character.imageUrl}
                    onClick={() => this.handleFavoriteClick(character)}
                  />
                ))}
              </div>
            )}
            {this.state.favoritesEnabled && (
              <div className="characters-wrapper">
                {this.state.favorites.map((character) => (
                  <Character
                    name={character.fullName}
                    title={character.title}
                    image={character.imageUrl}
                    onClick={() => this.handleFavoriteClick(character)}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </>
    );
  }
}

export default App;
