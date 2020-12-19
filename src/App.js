import './css/App.css';
import React from 'react';
import Cardd from './components/Cardd'
import GuessCount from './components/GuessCount'
class App extends React.Component {
    render() {
        return (
            <div className="memory">
                <GuessCount guesses={10} />
                <Cardd card="😀" feedback="hidden" />
                <Cardd card="🎉" feedback="justMatched" />
                <Cardd card="💖" feedback="justMismatched" />
                <Cardd card="🎩" feedback="visible" />
                <Cardd card="🐶" feedback="hidden" />
                <Cardd card="🐱" feedback="justMatched" />
            </div>
        )
    }
}
export default App;
