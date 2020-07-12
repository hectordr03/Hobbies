import React from 'react';
import './App.css';
import Hobby from './Components/Hobby';

function App() {
  return (
    <div className="App">
      <h2>My favorite hobbies are: </h2>
      <Hobby 
        name='Cooking'
        desc= "I cook a lot because I am vegan, it's really fun to do, and it's better for your health and your wallet."
        img="/Assets/Images/cook.jpg" />
      <Hobby
        name='Soccer'
        desc="Soccer is fun with people, and people from all over the world love soccer. It's also a very a.ctive and creative sport that can be enjoyable for everyone"
        img="/Assets/Images/soccer.jpg" />
      <Hobby
        name='Video Games'
        desc="I've been playing video games for as long as I can remember. They excited me as a kid and expanded my creativity. Video games are like a 'brain workout' and help build good dexterity."
        img="/Assets/Images/videogame.jpg" />
    </div>
  );
}

export default App;
