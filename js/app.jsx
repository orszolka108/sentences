import React from 'react';
import ReactDOM from 'react-dom';

require ("../css/main.css");

import sentence from './sentences.js';

class SentenceOne extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sentenceOne: "Szczęście jest decyzją, nie punktem na mapie.",
            sentenceTwo: "Początek jest najważniejszą częścią pracy.",
            counterOne: 0,
            counterTwo: 0,
            counter: 2,
            freezeOne: false,
            freezeTwo: false
        }
    }

    componentDidMount() {
        this.intervalOne = setInterval(() => {
            this.setState ({
                counterOne: this.state.counterOne + 1
            })
            if (this.state.counterOne == this.state.sentenceOne.length) {
                this.setState ({
                    freezeOne: true
                })
            }
        }, 10)
    }

    render() {
        if (this.state.freezeOne) {
            clearInterval(this.intervalOne)
            this.intervalTwo = setInterval(() => {
                this.setState ({
                    freezeOne: false,
                    counterTwo: this.state.counterTwo + 1
                })
                if (this.state.counterTwo == this.state.sentenceTwo.length) {
                    this.setState ({
                        counterTwo: 0,
                        counter: this.state.counter + 1,
                        freezeTwo: (this.state.counter >= sentence.length) ? true : false,
                        sentenceTwo: (this.state.counter == sentence.length-1) ? sentence[sentence.length-1]: sentence[this.state.counter]

                    })
                }
                if (this.state.sentenceTwo) {
                    this.setState({
                        sentenceTwo: sentence[sentence.length-1]
                    })
                }
            }, 10)
        }

        if (this.state.freezeTwo) {
            clearInterval(this.intervalTwo);

        }
        return (
            <div>
                <h1>{this.state.sentenceOne.substr(0, this.state.counterOne)}</h1>
                <h2>{this.state.sentenceTwo.substr(0, this.state.counterTwo)}</h2>
            </div>
        )
    }
}


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