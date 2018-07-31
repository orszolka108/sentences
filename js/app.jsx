import React from 'react';
import ReactDOM from 'react-dom';

require ("../css/main.css");

//importing sentences database from js file
import sentences from './sentences.js';

//definition of the class component, responsible for displaying sentences letter after letter
class SentenceOne extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //states realted to displaying first sentences
            sentenceOne: sentences[0],
            counterOne: 0,
            freezeOne: false,
            //states related to displaying second sentences
            counterTwo: 0,
            sentenceTwo: sentences[1],
            //cycle counter
            counter: 1,
            //state to change the way of displaying sentenceTwo (once or cycle)
            cycle: false
        }
    }
    //method for displaying first sentences
    componentDidMount() {
        //setting interval for displaying letter by letter
        this.intervalOne = setInterval(() => {
            let freezeOne = false
            if (this.state.counterOne == this.state.sentenceOne.length) {
                freezeOne = true
            }
            this.setState ({
                counterOne: this.state.counterOne + 1,
                freezeOne: freezeOne
            })
        },50)
    }

    handleClick = (e) => {
        this.setState ({
            cycle: !this.state.cycle

        })
}

    startSentence = () => {
        if (this.state.counterTwo == this.state.sentenceTwo.length-1) {
            let counter = this.state.counter + 1
            if ((this.state.cycle) && (counter == sentences.length - 1)){
                counter = 1
            }
            if (this.state.counter < sentences.length - 1) {
                let sentenceTwo = sentences[this.state.counter + 1]

                let counterTwo = 0
                this.setState({
                    counter: counter,
                    counterTwo: counterTwo,
                    sentenceTwo: sentenceTwo
                })
            }
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
                this.intervalTwo = setInterval(this.startSentence, 50)
            }
        }
        //clearing interval for second sentences
        if ((this.state.counter == sentences.length - 1) && (this.state.counterTwo == this.state.sentenceTwo.length - 1)) {
            clearInterval(this.intervalTwo);

        }
        //adding sentences to DOM
        return (
            <div>
                <div>
                    <h1>{this.state.sentenceOne.substr(0, this.state.counterOne)}</h1>
                    <h2>{this.state.sentenceTwo.substr(0, this.state.counterTwo)}</h2>
                </div>
                <button onClick={this.handleClick}>CLICK ME!</button>
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