import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import SpongeBobCard from "./components/SpongeBobCard";
import SquidwardCard from "./components/SquidwardCard";
import MrKrabsCard from "./components/MrKrabsCard";
// import friends from "./friends.json.js";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      cardsShuffled: false,
      location: ''
    };
    this.state.cards = [<SpongeBobCard location={this.state.location} />, <MrKrabsCard />, <SquidwardCard /> ];

    this.shuffleButtonClick = this.shuffleButtonClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  shuffleCards() {
    let cards = [...this.state.cards]
    let shuffledCards = [];
    while (cards.length) {
      const randomIndex = Math.floor(Math.random() * cards.length);
      shuffledCards.push(cards.splice(randomIndex, 1));
    }
    
    this.setState({
      cards: shuffledCards,
      cardsShuffled: true
    })
  }
  
  shuffleButtonClick() {
    this.shuffleCards()
  }

  handleInputChange(event) {
    const text = event.target.value;
    this.setState({location: text});
  }

  render() {
    if (!this.state.cardsShuffled) {
      this.shuffleCards();
    }
    const favoriteNumber = 4;
    function sum(num1, num2) { return num1 + num2;}
    return (
      <Wrapper>
      <Title>Friends List</Title>
      
      {this.state.cards}
      
      <button onClick={this.shuffleButtonClick}>Shuffle cards here!</button>
      
      <h1>My favorite number is {favoriteNumber}!</h1>
       <p>2 + 2 = {sum(2, 2)}</p>
       <input onChange={this.handleInputChange} ></input>
    </Wrapper>
    );
  }
}

export default App;