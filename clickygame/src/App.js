import React, { Component } from 'react';
import Counters from './components/counters';
import './App.css';
import Navbar from "./components/Navbar";
// import Jumbotron from "./components/Jumbotron";
import "./style.css";

class  App extends Component {
    state = { 
      counters: [
          {id: 1, value: 4},
          {id: 2, value: 0},
          {id: 3, value: 0},
          {id: 4, value: 0}
        
      ]
  };

  // constructor() {
  //   super();
  //   console.log('App - Constructor');
  //   this.state = this.props.something;
  // }

  // componentDidMount() {
  //   //Ajax Call
  //   console.log('App - Mounted');
  // }



  handleIncrement = counter => {     
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);               
      counters[index] = {...counter};
      counters[index].value++;        
      this.setState({counters});     

  };

  // handleReset = () => {
  //     const counters = this.state.counters.map(c => {
  //         c.value = 0;
  //         return c;
  //     });
  //     this.setState({counters});
  // };

  // handleDelete = counterId => {
      
  //     const counters = this.state.counters.filter(c => c.id !== counterId);
  //     this.setState({counters});
  // };

  render() {
    console.log('App - Rendered');
    
    return (
      <React.Fragment>
        <Navbar />
        <Jumbotron />
        {/* <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).lenght}/> */}
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />

        </main>
      </React.Fragment>

    );
  }
}
 
export default App;

