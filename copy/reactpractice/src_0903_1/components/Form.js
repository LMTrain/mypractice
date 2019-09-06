import React, { Component } from "react";

  

class Form extends Component {
  // Setting the initial values of this.state.username and this.state.password

  // constructor(props) {
  //   super(props);
  //   this.state = {value: ''};

  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  // handleChange(event) {
  //   this.setState({value: event.target.value});
  // }

  // handleSubmit(event) {
  //   alert('A name was submitted: ' + this.state.value);
  //   event.preventDefault();
  // }
  state = {
    username: "",
    password: ""
  };
  handleInput = e => {
    console.log('handleInput', e.target);
    const {name, value} = e.target;
    this.setState({
      [name]:value
    })
  }

  handleSubmit = e => {
    alert('Username: ${this.state.username} Password:${this.state.password}');
    event.preventDefault();
  }

  render() {
    return (
      <form>
        <p>Username: {this.state.username}</p>
        <p>Password: {this.state.password}</p>
        <input
          type="text"
          name = "username"
          placeholder="Username"
          onChange={this.handleInput}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={this.handleInput}
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default Form;
