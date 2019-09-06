import React, { Component } from 'react';
import Wrapper from "./wrapper";
import Counter from "./counter";
import Counter1 from "./counter1";
import Counter2 from "./counter2";
import Counter3 from "./counter3";
import Counter4 from "./counter4";
import Counter5 from "./counter5";


class Counters extends Component {
    constructor(props) {
        super(props);
        this.state = {
          scores: [
            {id: 1, value: 0},
          ],   
          cards: [],      
          cardsShuffled: false,
          location: ''
        };
        this.state.cards = [<counter1 location={this.state.location} />, <counter2 />, <counter3 /> ];

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
    
    counterOnButtonClick = () => {
        let countingClick = this.setState({count: this.state.counter + 4});
        console.log(countingClick, this.setState({count: this.state.counter + 1}));
    }
      
    shuffleButtonClick() {
        this.shuffleCards()
        this.counterOnButtonClick()
    }  
    
    render() {
        if (!this.state.cardsShuffled) {
            this.shuffleCards();
        }

               
        return (
            <div className="container-background">

                <Wrapper>

                    <div className="images">

                        
                            {this.state.scores.map(counter => (
                                <Counter key={counter.id} value={counter.value} id={counter.id}/>
                            ))}
                            {this.state.scores.map(counter1 => (
                                <Counter1 key={counter1.id} value={counter1.value} id={counter1.id}/>
                                
                            ))}
                            {this.state.scores.map(counter2 => (
                                <Counter2 key={counter2.id} value={counter2.value} id={counter2.id}/>
                            ))}
                            {this.state.scores.map(counter3 => (
                                <Counter3 key={counter3.id} value={counter3.value} id={counter3.id}/>
                            ))}
                            {this.state.scores.map(counter4 => (
                                <Counter4 key={counter4.id} value={counter4.value} id={counter4.id}/>
                            ))}
                            {this.state.scores.map(counter5 => (
                                <Counter5 key={counter5.id} value={counter5.value} id={counter5.id}/>
                            ))}
                        
                    </div>
                    
                </Wrapper>
            </div>
        );
    }
}

export default Counters;