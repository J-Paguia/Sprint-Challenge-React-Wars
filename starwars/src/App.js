import React from 'react';
import './App.css';
import CharacterList from './components/CharacterList'
import StyledHeader from './components/Container'



const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <img src = "https://upload.wikimedia.org/wikipedia/en/c/c8/Rick_and_Morty_logo.png" />
      <StyledHeader>.: Characters :.</StyledHeader>
      <CharacterList />
    </div>
  );
}

export default App;
