import React from "react";
import CharacterList from "./CharacterList";
import "./App.css";
import CharacterMovies from "./CharacterMovies";
const App = () => (
    <div>
        <div className="App">
            <CharacterList />
            <CharacterMovies />
        </div>
    </div>
);

export default App;
