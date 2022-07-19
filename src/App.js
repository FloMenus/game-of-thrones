import React from "react";
import Character from "./components/Character";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      characters: [],
    };
  }
  async componentDidMount() {
    const response = await fetch("https://thronesapi.com/api/v2/Characters");
    const fetched = await response.json();

    this.setState({
      characters: fetched,
    });
    console.log(this.state.characters);
  }
  render() {
    return (
      <>
        <h1>Game of thrones</h1>
        {this.state.characters.map(char =>
          <Character 
          name= {char.fullName}
          title={char.title}
          image={char.imageUrl}/>
        )}
        {console.log(this.state)}
      </>
    );
  }
}

export default App;
