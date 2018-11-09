//App.jsx
import { Container, Row,  } from 'reactstrap';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MainMenu.css';

class MainMenu extends Component {

  componentDidMount(){
    const audio = new Audio();
    audio.src = "https://ia800805.us.archive.org/4/items/11TheQuidditchMatch/2001%20-%20Harry%20Potter%20and%20The%20Sorcerer%27s%20Stone/02%20-%20Harry%27s%20Wondrous%20World.mp3";
    audio.volume = '0.5';
    audio.play()
  };
       stopAudio(){
         this.audio.pause();

       };

  render() {
    return (

        <div className='fond'>
          <Container className='wrapper'>
            <Row className='line'>Spells Duel</Row>
            <Row className='line'>
              <Link className='lien' onClick='this.stopAudio()'  to={process.env.PUBLIC_URL + '/ChoicePlayers'}> New Game </Link>
            </Row>
          </Container> 
        </div>
    );
  }
}

export default MainMenu;