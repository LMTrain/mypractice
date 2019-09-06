import React from "react";
import Wrapper from "./components/Wrapper";
import Bugatti1Card from "./components/Bugatti1Card";
import Bugatti2Card from "./components/Bugatti2Card";
import Bugatti3Card from "./components/Bugatti3Card";
import Bugatti4Card from "./components/Bugatti4Card";
import Bugatti5Card from "./components/Bugatti5Card";
import Bugatti6Card from "./components/Bugatti6Card";
import Bugatti7Card from "./components/Bugatti7Card";
import Bugatti8Card from "./components/Bugatti8Card";
import Bugatti9Card from "./components/Bugatti9Card";
import Bugatti10Card from "./components/Bugatti10Card";
import Bugatti11Card from "./components/Bugatti11Card";
import Bugatti12Card from "./components/Bugatti12Card";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import "./style.css";


var score = 0
var imageClick = 0
var topScore = 0
var randomPick = 0
var randomNumber = 0
var message = "Click an Image to begin!"
class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {     
      cards: [],      
      cardsShuffled: false,
      location: ''
    };
    
    this.state.cards = [<Bugatti10Card location={this.state.location} />, <Bugatti1Card />, <Bugatti2Card />, <Bugatti3Card />, <Bugatti4Card />, <Bugatti5Card />, <Bugatti6Card />, <Bugatti7Card />, <Bugatti8Card />, <Bugatti9Card />, <Bugatti11Card />, <Bugatti12Card /> ];

    this.shuffleButtonClick = this.shuffleButtonClick.bind(this);
   
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
  randomClicks = () => {
    let cards = [...this.state.cards]
    randomNumber = cards[Math.floor(Math.random() * cards.length)];
    randomPick = cards.indexOf(randomNumber);
    
  }
    
  imageClickScore = () => {
    
    score = score + 1
     
    imageClick = 1 + 1
   
    if (12 - randomPick + imageClick <= 7) {           
        message = "You guessed incorrectly!";
        score = 0;         
        
        console.log(message);
    }
    else if (12 - randomPick - imageClick >= 5) {
        message = "You guessed correctly!";
        topScore = topScore + 1  
        console.log(message);
    }
  };

  
  shuffleButtonClick() {
    this.shuffleCards()
    this.imageClickScore()
    this.randomClicks()
    document.getElementById("top-scores").textContent = score;
    document.getElementById("top-scoress").textContent = topScore;
    document.getElementById("click-message").textContent = message;
    console.log(randomPick);
 
    
  }  

  render() {    
  
    if (!this.state.cardsShuffled) {
      this.shuffleCards();
    }
    
    
    
    return (
      
      <div className="container-background">
        <Navbar id="top-scores" /> 
        <Jumbotron />

        <Wrapper>
          <div className="images">
            
            <button
              onClick={this.shuffleButtonClick}
              >
              {this.state.cards[0]}
            </button>
            <button
              onClick={this.shuffleButtonClick}
              >
              {this.state.cards[1]}
            </button>
            <button
              onClick={this.shuffleButtonClick}
              >
              {this.state.cards[2]}
            </button>
            <button
              onClick={this.shuffleButtonClick}
              >
              {this.state.cards[3]}
            </button>
            <button
              onClick={this.shuffleButtonClick}
              >
              {this.state.cards[4]}
            </button>
            <button
              onClick={this.shuffleButtonClick}
              >
              {this.state.cards[5]}
            </button>
            <button
              onClick={this.shuffleButtonClick}
              >
              {this.state.cards[6]}
            </button>
            <button
              onClick={this.shuffleButtonClick}
              >
              {this.state.cards[7]}
            </button>
            <button
              onClick={this.shuffleButtonClick}
              >
              {this.state.cards[8]}
            </button>
            <button
              onClick={this.shuffleButtonClick}
              >
              {this.state.cards[9]}
            </button>
            <button
              onClick={this.shuffleButtonClick}
              >
              {this.state.cards[10]}
            </button>
            <button
              onClick={this.shuffleButtonClick}
              >
              {this.state.cards[11]}
            </button>
          </div>         
          
        </Wrapper>
                 

      </div>
      
    );
  }
}

export default App;