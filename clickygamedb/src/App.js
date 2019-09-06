import React, { Component } from "react";
import CarCard from "./components/CarCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import cars from "./cars.json";
import "./style.css";



var score = 0
var topScore = 0
var randomPick = 0
var randomNumber = 0
var message = "Click an Image to begin!"
var shuffleCar = " "
var shuffledCars = []
class App extends Component {
  // Setting this.state.cars to the cars json array
  state = {
    cars
    
  };
  
  removeCar = (id) => {
    console.log(id, "This is ID");
    let carsArray = [...this.state.cars]

    let cars = carsArray.filter(car => {
      return car.id !== id;
    });

    this.setState({ cars })

}

shuffle = () => {
  let carsArray = [...this.state.cars];
  let carsShuffled = [];
  this.imageClickScore();
  this.randomClicks();
  document.getElementById("top-scores").textContent = score;
  document.getElementById("top-scoress").textContent = topScore;
  document.getElementById("click-message").textContent = message;

  for (var i = 0;  i < this.state.cars.length; i++) {        
        shuffleCar = carsArray.splice(Math.floor(Math.random()*carsArray.length),1);        
        carsShuffled = [...carsShuffled, ...shuffleCar];
                  
      }   
   shuffledCars.push(this.state.cars);

  // Set this.state.cars equal to the new cars array
  this.setState({ cars: carsShuffled });  
};

 
  randomClicks = () => {    
    randomNumber = shuffledCars[Math.floor(Math.random() * shuffledCars.length)];
    randomPick = shuffledCars.indexOf(randomNumber);
    if (randomPick > 12) {
      randomPick = [Math.floor(Math.random() * 12)];
    }    
    
  }
    
  imageClickScore = () => {
    
    score = score + 1   
    if (12 - randomPick <= 6) {           
        message = "You guessed incorrectly!";
        score = 0;
    }
    else if (12 - randomPick >= 6) {
        message = "You guessed correctly!";
        topScore = topScore + 1;
        
    }
  };
  

  render() {
    
    return (
      
      <div className="container-background">
        <Navbar id="top-scores" /> 
        <Jumbotron />

        <Wrapper>
          
            {this.state.cars.map(car => (
             
              <CarCard
              handleRemoveClick={() => this.removeCar(car.id)}
              handleShuffleClick={this.shuffle}
              id={car.id}
              key={car.id}
              name={car.name}
              image={car.image}            
              />
            ))}         
          
          
        </Wrapper>     

      </div>
      
    );
  }
}

export default App;