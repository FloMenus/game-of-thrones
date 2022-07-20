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
    const responseCharacter = await fetch(
      "https://thronesapi.com/api/v2/Characters"
    );
    const fetchedCharacter = await responseCharacter.json();

    const responseContinent = await fetch(
      "https://thronesapi.com/api/v2/Continents"
    );
    const fetchedContinent = await responseContinent.json();
    this.setState({
      characters: fetchedCharacter,
      continents: fetchedContinent,
    });
  }

  handleFavoriteClick = (character) => {
    const { favorites } = this.state;
    const existingFavorite = favorites.find(
      (favorite) => favorite.id === character.id
    );
    if (!existingFavorite) {
      const cloneFavorites = [...this.state.favorites, character];
      this.setState({
        favorites: cloneFavorites,
      });
      console.log(this.state.favorites);
    }
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
              <label htmlFor="favorite-radio"><p>Afficher les favoris</p></label>
              <p>({this.state.favorites.length})</p>
            </form>
            {!this.state.favoritesEnabled && (
              <div className="characters-wrapper">
                {this.state.characters.map((character) => (
                  <Character
                    key={`${character.fullName}${character.id}`}
                    name={character.fullName}
                    title={character.title}
                    image={character.imageUrl}
                    addToFavorites={() => this.handleFavoriteClick(character)}
                  />
                ))}
              </div>
            )}
            {this.state.favoritesEnabled && (
              <div className="characters-wrapper">
                {this.state.favorites.map((character) => (
                  <Character
                    key={`${character.fullName}${character.id}`}
                    name={character.fullName}
                    title={character.title}
                    image={character.imageUrl}
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
