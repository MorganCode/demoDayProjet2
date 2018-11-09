import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './EndingGame.css';


class EndingGame extends Component {
    constructor(props) {
        super(props)
        this.winner = this.props.location.state.winner;
        this.deathPlayers = this.props.location.state.deathPlayers;
        this.playerRanking = [];
    }


    render() {
        //Classement des Players et inversion du tableau deathPlayers
        this.playerRanking = this.deathPlayers.reverse()

        return (
            <div className="victory">
                <div className="ranking">
                    <h1 className="first">1. {this.winner.name}, you win !</h1>
                    <br/>
                    <h1 className="second">2. {this.playerRanking[0]}</h1>
                    <br/>
                    <h1 className="third">3. {this.playerRanking[1]}</h1>
                    <br/>
                    <h1 className="fourth">4. {this.playerRanking[2]}</h1>
                </div>
                <div className="buttonLink">
                    <Link style={{outline:'none !important', textDecoration:'none'}}exact to="/">
                        <div className="button-EG">
                            New Game
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}

export default EndingGame