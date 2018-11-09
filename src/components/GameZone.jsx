//GameZone.jsx
import React, { Component } from 'react';
import Gride from './Gride';
import './GameZone.css'; this






class GameZone extends Component {

  constructor(props) {
    super(props)

    this.state = {
      players: this.props.location.state.players,
    }
    this.audio1 = new Audio();
  }

  componentDidMount() {

    this.audio1.src = "https://ia800805.us.archive.org/4/items/11TheQuidditchMatch/2001%20-%20Harry%20Potter%20and%20The%20Sorcerer%27s%20Stone/08%20-%20Mr.%20Longbottom%20Flies.mp3";
    this.audio1.volume = '0.9';
    this.audio1.play();
  };

  stopAudio1 = () => {
    this.audio1.pause();
  };
  playAudio1 = () => {
    this.audio1.play()
  }


  render() {
    return (
      <div className="App" style={{ width: window.innerWidth + 'px', height: window.outerHeight + 'px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <header className="App-header">
         <button className="buttonSound" onClick={()=>this.playAudio1()}>play audio</button>
         <button className="buttonSoundStop" onClick={()=>this.stopAudio1()}>stop audio</button>
        </header>
        <Gride players={this.state.players} />
        <br />
      </div>
    );
  }
}

export default GameZone;
