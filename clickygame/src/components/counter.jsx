import React, { Component } from 'react';

class Counter extends Component {
    state = {
        score: this.props.value
    };

    handleIncrement = () => {
        this.setState({score: this.state.score + 1});
        let imageClick = this.state.score + 1
        console.log(imageClick);
        if (imageClick >= 2) {           
            let message = "You guessed incorrectly!";            
            document.getElementById("click-message").textContent = message;
        }
        else if (imageClick === 1) {
            let message = "You guessed correctly!";           
            document.getElementById("click-message").textContent = message;
        }
    };
     
    render() {                
        return (
            <div>
                <p id="click-message"></p>               
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button 
                   
                    onClick={this.handleIncrement}
                    className="btn btn-secondary btn-sm"
                >
                    Increment
                </button>
                {/* <button 
                    onClick={() => this.props.onDelete(this.props.counter.id)}
                    className="btn btn-danger btn-sm m-2"
                >
                    Delete
                </button> */}
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.score === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const {score} = this.state;
       return score === 0 ? 'Zero' : score;
    }
}
 
export default Counter;