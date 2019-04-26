//imports
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CharCard from './components/CharCard';
import Jumbotron from './components/Jumbotron';
import Characters from './characters.json';
import './App.css';


class App extends Component {
    //initial setup
    state  = {
        characters,
        clickedChara: [],
        score: 0
    };

//click event for when you choose a character

imageClick = event => {
    const currentChara = event.target.alt;
    const charasClickedOn =
    this.state.clickedChara.indexOf(currentChara)> -1;

//reset when you lose
if (charasClickedOn) {
    this.setState({
        characters: this.state.characters.sort(function(a,b){
            return 0.6 - Math.random();
        }),
        clickedChara: [],
        score: 0
    });
    alert("The Realm has Fallen, try again?");

 //add points when you clikc the right ppl
} else {
    this.setState({
        characters: this.state.characters.sort(function(a, b){
            return 0.6 - Math.random();
        }),
        clickedChara: this.state.clickedChara.concat(
            currentChara
        ),
        score: this.state.score +1
    },
    () => {
        if(this.state.score === 12){
            alert("You are the winner of the 7 kingdoms, rejoice!");
            this.setState({
                characters: this.state.characters.sort(function(a,b){
                    return 0.6- Math.random();
                }),
                clickedChara: [],
                score: 0
            });
        }
    }

    );
}


};

//arrangment

render() {
    return(
        <div>
            <Navbar score={this.state.score}
            />
            <Jumbotron />
            <div className="wrapper">
                {this.state.characters.map(characters => (
                    <CharCard
                    imageClick={this.imageClick}
                    id={characters.id}
                    key={characters.id}
                    image={characters.image}
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
}

}

export default App;