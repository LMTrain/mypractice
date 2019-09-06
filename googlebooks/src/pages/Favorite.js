import React, { Component } from "react";
// import API from "../utils/API";
import Card from "../components/Card";
import favBooks from "../pages/favBooks.json";

var shuffleBook = " "
var shuffledBooks = []
class Favorite extends Component {
  state = {
    favBooks
  };

  // When the component mounts, load the next dog to be displayed
  componentDidMount() {
    this.loadNextBook();
  }  

  loadNextBook = () => {
    let booksArray = [...this.state.favBooks];
    let booksShuffled = [];
    for (var i = 0;  i < this.state.favBooks.length; i++) {        
        shuffleBook = booksArray.splice(Math.floor(Math.random()*booksArray.length),1);        
        booksShuffled = [...booksShuffled, ...shuffleBook];
                
      }   
    shuffledBooks.push(this.state.favBooks);
    
  this.setState({ favBooks: booksShuffled });  
};

  render() {
    return (
      <div>
        <h1 className="text-center">Favorite Books</h1>
        <h3 className="text-center">
          List of my favorite books!
        </h3>
        {this.state.favBooks.map(book => (
             
             <Card             
             id={book.id}
             key={book.id}
             name={book.name}
             image={book.image}            
             />
           ))}         
      </div>
    );
  }
}

export default Favorite;
