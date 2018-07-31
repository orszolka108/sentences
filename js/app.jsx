import React from 'react';
import ReactDOM from 'react-dom';

require ("../css/main.css");

//importing sentences database from js file
import sentence from './sentences.js';

//definition of the class component, responsible for displaying sentences letter after letter
class SentenceOne extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //states realted to displaying first sentence
            sentenceOne: sentence[0],
            counterOne: 0,
            freezeOne: false,
            //states related to displaying second sentence
            counterTwo: 0,
            sentenceTwo: sentence[1],
            freezeTwo: false,
            //cycle counter
            counter: 2
        }
    }
    //method for displaying first sentence
    componentDidMount() {
        //setting interval for displaying letter by letter
        this.intervalOne = setInterval(() => {
            this.setState ({
                counterOne: this.state.counterOne + 1
            })
            //condition to check if sentence one is completed
            if (this.state.counterOne == this.state.sentenceOne.length) {
                this.setState ({
                    freezeOne: true
                })
            }
            //interval time for first sentence
        },10)
    }

    render() {
        //checking if sentence one is completed
        if (this.state.freezeOne) {
            //clearing interval of the first sentence
            clearInterval(this.intervalOne)
            //setting interval for second sentence displaying letter by letter
            this.intervalTwo = setInterval(() => {
                this.setState ({
                    freezeOne: false,
                    counterTwo: this.state.counterTwo + 1
                })
                //condition for swaping sentences from database
                if (this.state.counterTwo == this.state.sentenceTwo.length) {
                    this.setState ({
                        counterTwo: 0,
                        counter: this.state.counter + 1,
                        sentenceTwo: (this.state.counter == sentence.length-1) ? sentence[sentence.length-1]: sentence[this.state.counter],
                        freezeTwo: (this.state.counter == sentence.length) ? true : false,
                    })
                }
            }, 10)
        }
        //clearing interval for second sentence
        if (this.state.freezeTwo) {
            clearInterval(this.intervalTwo);

        }
        //adding sentences to DOM
        return (
            <div>
                <h1>{this.state.sentenceOne.substr(0, this.state.counterOne)}</h1>
                <h2>{this.state.sentenceTwo.substr(0, this.state.counterTwo)}</h2>
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


document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
      <App/>,
        document.getElementById('app')
    );
});