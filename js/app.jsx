import React from 'react';
import ReactDOM from 'react-dom';

require ("../scss/main.scss");

//importing sentences database from js file
import sentences from './sentences.js';

//definition of the class component, responsible for displaying sentences letter after letter
class SentenceOne extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //states related to displaying first sentences
            sentenceOne: sentences[0],
            counterOne: 0,
            freezeOne: false,
            //states related to displaying second sentences
            counterTwo: 0,
            sentenceTwo: sentences[1],
            //cycle counter
            counter: 1,
            //state to change the way of displaying sentenceTwo (once or cycle)
            cycle: true,
        }
    }
    //method for displaying first sentences
    componentDidMount() {
        //setting interval for displaying letter by letter
        this.intervalOne = setInterval(() => {
            let freezeOne = false
            //condition to check if sentence is complete
            if (this.state.counterOne == this.state.sentenceOne.length) {
                freezeOne = true
            }
            //setting state to display letters
            this.setState ({
                counterOne: this.state.counterOne + 1,
                freezeOne: freezeOne
            })
        },80)
    }
    // onClick event on button
    handleClick = (e) => {
        this.setState ({
            cycle: !this.state.cycle

        })
}
    startSentence = () => {
        //checks if are on the end of the sentence
        if (this.state.counterTwo == this.state.sentenceTwo.length-1) {
            let counter = this.state.counter + 1
            //checks if sentences should cycle and checks if it is at the end of sentences array
            if ((this.state.cycle) && (counter == sentences.length - 1)){
                counter = 1
            }
            //checks if there are more sentences to be displayed
            if (this.state.counter < sentences.length - 1) {
                let sentenceTwo = sentences[this.state.counter + 1]
                let counterTwo = 0

                this.setState({
                    counter: counter,
                    counterTwo: counterTwo,
                    sentenceTwo: sentenceTwo
                })
            }
            // or keep counting
        } else {
            let counterTwo = this.state.counterTwo + 1
            this.setState({
                counterTwo: counterTwo
            })
        }
    }

    render() {
        //checking if sentence one is completed
        if (this.state.freezeOne) {
            //clearing interval of the first sentences
            clearInterval(this.intervalOne)
            //setting interval for second sentence displaying letter by letter
            if (this.intervalTwo == null) {
                this.intervalTwo = setInterval(this.startSentence, 80)
            }
        }
        //clearing interval for second sentences
        if ((this.state.counter == sentences.length - 1) && (this.state.counterTwo == this.state.sentenceTwo.length - 1)) {
            clearInterval(this.intervalTwo);

        }
        //adding sentences to DOM
        return (
            <div className = "container">
                <div className = 'sentences'>
                    <h1 className="first-sentence"> {this.state.sentenceOne.substr(0, this.state.counterOne)}</h1>
                    <h2 className="second-sentence">{this.state.sentenceTwo.substr(0, this.state.counterTwo)}</h2>
                </div>
                <button className = "button" onClick={this.handleClick}>DO ONCE!</button>
            </div>
        )
    }
}

// definition of the class component responsible for generating SentenceOne component
class App extends React.Component {
    render() {
        return <SentenceOne/>
    }
}

export {App}
export {SentenceOne}


document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
      <App/>,
        document.getElementById('app')
    );
});