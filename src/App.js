import React, { Component } from 'react'
import shuffle from 'lodash.shuffle'
import './css/App.css'
import Cardd from './components/Cardd'
import GuessCount from './components/GuessCount'
import AppTitle from "./components/AppTitle"

const SIDE = 6
const SYMBOLS = '😀🎉💖🎩🐶🐱🦄🐬🌍🌛🌞💫🍎🍌🍓🍐🍟🍿'

class App extends Component {

    titleTuto(){
        return "Tuto React OpenClassRoom"
    }
    cards = this.generateCards()

    generateCards() {
        const result = []
        const size = SIDE * SIDE
        const candidates = shuffle(SYMBOLS)
        while (result.length < size) {
            const card = candidates.pop()
            result.push(card, card)
        }
        return shuffle(result)
    }

    handleCardClick(card) {
        console.log(card, 'clicked')
    }

    render() {
        const won = new Date().getSeconds() % 2 === 0
        return (
            <div className="memory">
                <AppTitle title={this.titleTuto()} />
                <GuessCount guesses={0} />
                <Cardd card="😀" feedback="hidden" onClick={this.handleCardClick} />
                <Cardd card="🎉" feedback="justMatched" onClick={this.handleCardClick} />
                <Cardd
                    card="💖"
                    feedback="justMismatched"
                    onClick={this.handleCardClick}
                />
                <Cardd card="🎩" feedback="visible" onClick={this.handleCardClick} />
                <Cardd card="🐶" feedback="hidden" onClick={this.handleCardClick} />
                <Cardd card="🐱" feedback="justMatched" onClick={this.handleCardClick} />
                {won && <p>GAGNÉ !</p>}
            </div>
        )
    }
}

export default App
