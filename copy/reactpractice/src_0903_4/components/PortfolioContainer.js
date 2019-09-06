import React, { Component } from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

class PortfolioContainer extends Component {
  state = {
    currentPage: "Home"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  getCurrentComponent = () => {
    switch(this.state.currentPage){
      case "About":
        return (<About/>);
      case "Blog":
        return (<Blog/>);
      case "Contact":
        return (<Contact/>);
      default:
        return (<Home/>);
    }
  }

  render() {
    return (
      <div>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.getCurrentComponent()}
      </div>
    );
  }
}

export default PortfolioContainer;
