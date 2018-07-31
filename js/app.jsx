import React from 'react';
import ReactDOM from 'react-dom';

require ("../css/main.css");

import sentence from './sentences.js';
//
// class SentenceTwo extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             counterOne: props.counter,
//             sentenceOne: props.sentenceOne,
//             freeze: props.freeze,
//             counterTwo: 0,
//             sentenceTwo: "Początek jest najważniejszą częścią pracy."
//         }
//     }
//     componentWillReceiveProps(props) {
//         this.setState({
//             counterOne: props.counter,
//             sentenceOne: props.sentenceOne,
//             freeze: props.freeze
//         })
//     }
//     componentDidMount() {
//             this.interval = setInterval(() => {
//                 this.setState ({
//                     counterTwo: this.state.counterTwo + 1
//                 })
//                 if (this.state.counterTwo >= this.state.sentenceTwo.length) {
//                     clearInterval(this.interval)
//                 }
//             }, 50)
//         }
//
//     componentWillUnmount() {
//         clearInterval(this.interval)
//
//     }
//
//     render() {
//         if (this.state.counterOne == this.state.sentenceOne.length) {
//             return <h1>{this.state.sentenceTwo.substr(0, this.state.counterTwo)}</h1>
//         } else {
//             return null
//         }
//     }
// }


class SentenceOne extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sentenceOne: "Szczęście jest decyzją, nie punktem na mapie.",
            sentenceTwo: "Początek jest najważniejszą częścią pracy.",
            counterOne: 0,
            counterTwo: 0,
            freeze: false
        }
    }

    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState ({
                counterOne: this.state.counterOne + 1
            })
            if (this.state.counterOne == this.state.sentenceOne.length) {
                this.setState ({
                    freeze: true,
                    counter: 0
                })
                clearInterval(this.intervalId)

            }
        }, 50)
    }

    componentWillUnmount() {
        clearInterval(this.intervalId)

    }

    render() {
        if (this.state.freeze != true) {
            return <h1>{this.state.sentenceOne.substr(0, this.state.counterOne)}</h1>
        } else if (this.state.freeze) {
            console.log(this.state.freeze)
            console.log(this.state.counterOne)
            return (
                <div>
                    <h1>{this.state.sentenceOne}</h1>
                    {/*<SentenceTwo counter={this.state.counter}*/}
                                 {/*sentenceOne = {this.state.sentence}*/}
                                 {/*freeze = {this.state.freeze}*/}
                    {/*/>*/}
                    <h2>{this.state.sentenceTwo}</h2>
                </div>
            )
        }
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