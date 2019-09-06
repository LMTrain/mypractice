import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";

class Search extends Component {
  state = {
    search: "",      
    results: [],
    error: ""
  };

  // When the component mounts, get a list of all available base  and update this.state.
  
  // componentDidMount() {
  //   this.searchForBooks("Destruction")    
  // }

  searchForBooks = query => {
    API.search(query)
      .then(res => this.setState({ results: res.data.items }))
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchForBooks(this.state.search);      
  };
  
  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <h1 className="text-center">Search For Books</h1>
          
          <SearchForm
            search={this.state.search}
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}            
          />
          <SearchResults results={this.state.results} />
        </Container>
      </div>
    );
  }
}

export default Search;
