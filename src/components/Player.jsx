// Player.jsx
import React, { Component } from 'react';
import './Player.css';

class Player extends Component {
  constructor(props) {
    super(props),
      this.state = {
        infoPlayer: false,
      }
    this.avatarTmp = this.props.avatar
  }

  componentWillUpdate(nextProps) {
    this.avatarTmp = this.goodImage(nextProps.pv)
    this.soundTmp = this.goodSound(nextProps.pv)
  }


 
  showInfoPlayer() {
    this.setState({
      infoPlayer: true,
    })
  }

  hiddenInfoPlayer() {
    this.setState({
      infoPlayer: false,
    })
  }

  handleClick = () => {

    if (this.props.isAttackable) {
      this.props.playerAttacked(this.props.index, 50, 5)
    }
    if (this.props.isHeal) {
      this.props.playerHeal(this.props.index, 25, 4)
    }

    if (this.props.isEntrave) {
      this.props.playerEntrave(this.props.index, 15, 8, 2)
    }
  }

  // Commentaire de Julie : affichage de l'avatar en fonction du state du player
  goodImage = (nextPV) => {
    let avatarTmp = this.props.avatar;
    if (this.props.isCurrentPlayer) {
      avatarTmp = this.props.avatarPlayer
    }
    if (this.props.pv <= 0) {
      avatarTmp = this.props.avatarEnd
    } else if (nextPV < this.props.pv) {
      avatarTmp = this.props.avatarDamage
    }
    if (nextPV > this.props.pv) {
      avatarTmp = this.props.avatarHeal
    }
    return avatarTmp
  }

  // changement de son en fonction du sort utilisé 
  goodSound = (nextPV) => {
    if (nextPV < this.props.pv) {
      const audio = new Audio();
      audio.src = "http://orteil.dashnet.org/cookieclicker/snd/cymbalCrash.mp3";
      audio.play();
    }
    if (nextPV > this.props.pv) {
      const audio = new Audio();
      audio.src = "http://orteil.dashnet.org/cookieclicker/snd/spell.mp3";
      audio.play();
    }   
  }
handleSoundClick = () => {
  return this.soundTmp
}

  render() {
    const { x, y, avatar, pv } = this.props
    return (
      
      <div className="Player"
        onClick={(event) => {
        this.handleClick()
        this.handleSoundClick()}} 
        onMouseOver={() => this.showInfoPlayer()} onMouseOut={() => this.hiddenInfoPlayer()}
        style={{ top: x * 100, left: y * 100, backgroundImage: 'url(' + this.avatarTmp + ')' }}>
        {this.state.infoPlayer ? <div className="infoPlayer" style={{ color: 'white', fontWeight: 'bold', height: '20px', width: '50px', backgroundColor: 'Black', borderRadius: '3px', textAlign: 'center', margin: '-25px 29px' }}>{pv}</div> : null}
      </div>

    );
  }

}


export default Player;
