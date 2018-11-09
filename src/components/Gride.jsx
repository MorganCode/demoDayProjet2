// Gride.jsx
import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import './Gride.css';
import Cell from './Cell';
import Player from './Player';
import { Redirect } from 'react-router-dom'

class Gride extends Component {
  constructor(props) {
    super(props)
    this.state = {
      players: this.props.players,
      playerNum: 2,
      turnNum: 0,
      currentPlayer: 0,
      ndGame: false,
      InfoAttack: false,
      InfoHeal: false,
      InfoAttack: false,
      deathPlayers: [],

      players: this.props.players,

      //Position des cells dites "obstacles" où le player ne peut pas se rendre

      obstacle: [
        "key 00",
        "key 01",
        "key 02",
        "key 07",
        "key 08",
        "key 09",
        "key 010",
        
        "key 10",
        "key 11",
        "key 12",
        "key 13",
        "key 14",
        "key 16",
        "key 17",
        "key 18",
        "key 19",
        "key 110",

        "key 20",
        "key 21",
        "key 22",
        "key 23",
        "key 28",
        "key 29",

        "key 30",
        "key 31",
        "key 32",
        "key 33",
        "key 39",
        
        "key 40",
        "key 41",
        "key 42",

        "key 50",
        "key 51",
        "key 52",
      ],

      // Zone du déplacement
      whiteZone: { minX: -1, maxX: -1, minY: -1, maxY: -1 },
      // Zone des sorts      
      whiteZoneAttack: { minX: -1, maxX: -1, minY: -1, maxY: -1 },
      whiteZoneHeal: { minX: -1, maxX: -1, minY: -1, maxY: -1 },
      whiteZoneEntrave: { minX: -1, maxX: -1, minY: -1, maxY: -1 },
      //Compteur des tours des players
      countDownTour: 540,
    }
    //Fin de this.state 

    setInterval(() => {
      if (this.state.countDownTour === 0) {
        this.setState({
          countDownTour: 540,
        })
        this.nextPlayer()
      } else
        this.setState({
          countDownTour: this.state.countDownTour - 10
        })
    }, 500)
  }
  //Fin des objets de la class

  //-------------------------------Function Déplacement------------------------------//
  componentDidMount() {
    this.setState({
      whiteZone: this.setWhiteZone(this.state.players[this.state.currentPlayer])
    })
  }
  //Fonction qui défini la zone de déplacement du currentPlayer
  setWhiteZone(player) {

    return {
      minX: player.x - 1,
      maxX: player.x + 1,
      minY: player.y - 1,
      maxY: player.y + 1,
    }
  }

  //Fonction qui permet de vérifier que la cell ou on souhaite ce déplacer fais parti de la whithZone du currentPlayer

  isWhiteZone = (x, y) => {
    let cell = 'key ' + x + y
    // console.log(cell)
    // console.log(this.state.obstacle)

    if (this.state.obstacle.indexOf(cell) !== -1)
      return false
    if ((x >= this.state.whiteZone.minX && x <= this.state.whiteZone.maxX)
      && (y >= this.state.whiteZone.minY && y <= this.state.whiteZone.maxY)) {
      return true
    }
    else {
      return false
    }
  }

  //Fonction qui déclenche le déplacement au moyen du clic de la souris et affiche la zone verte du déplacement tous en désactivant les autres zones (spell) si ils sont activé

  handleMoveClick = () => {
    this.setState({
      whiteZone: this.setWhiteZone(this.state.players[this.state.currentPlayer]),
      whiteZoneHeal: {
        minX: -1,
        maxX: -1,
        minY: -1,
        maxY: -1,
      },
      whiteZoneEntrave: {
        minX: -1,
        maxX: -1,
        minY: -1,
        maxY: -1,
      },
      whiteZoneAttack: {
        minX: -1,
        maxX: -1,
        minY: -1,
        maxY: -1,
      },
    }
    )
  }

  //-------------------------------Fin de Déplacement------------------------------//

  //-------------------------------Sort-------------------------------------------//

  handleAttackClick = () => {
    this.setWhiteZoneAttack();
    this.setState({
      whiteZone: {
        minX: -1,
        maxX: -1,
        minY: -1,
        maxY: -1,
      },
      whiteZoneHeal: {
        minX: -1,
        maxX: -1,
        minY: -1,
        maxY: -1,
      },
      whiteZoneEntrave: {
        minX: -1,
        maxX: -1,
        minY: -1,
        maxY: -1,
      },


    })
  }

  handleHealClick = () => {
    this.setWhiteZoneHeal();
    this.setState({
      whiteZone: {
        minX: -1,
        maxX: -1,
        minY: -1,
        maxY: -1,
      },
      whiteZoneAttack: {
        minX: -1,
        maxX: -1,
        minY: -1,
        maxY: -1,
      },
      whiteZoneEntrave: {
        minX: -1,
        maxX: -1,
        minY: -1,
        maxY: -1,
      },

    })
  }

  handleEntraveClick = () => {
    
    this.setWhiteZoneEntrave();
    this.setState({

      whiteZone: {
        minX: -1,
        maxX: -1,
        minY: -1,
        maxY: -1,
      },
      whiteZoneAttack: {
        minX: -1,
        maxX: -1,
        minY: -1,
        maxY: -1,
      },
      whiteZoneHeal: {
        minX: -1,
        maxX: -1,
        minY: -1,
        maxY: -1,
      },

    })
  }

  showInfoAttack() {
    this.setState({
      InfoAttack: true,
    })
  }

  hiddenInfoAttack() {
    this.setState({
      InfoAttack: false,
    })
  }

  showInfoHeal() {
    this.setState({
      InfoHeal: true,
    })
  }

  hiddenInfoHeal() {
    this.setState({
      InfoHeal: false,
    })
  }

  showInfoEntrave() {
    this.setState({
      InfoEntrave: true,
    })
  }

  hiddenInfoEntrave() {
    this.setState({
      InfoEntrave: false,
    })
  }

  checkVictory = (playersArray) => {
    console.log("someone is dead !");
    let playersAlive = playersArray.filter((player) => (player.isDead === false))
    console.log("these players are alive : ", playersAlive);
    if (playersAlive.length === 1) {
      console.log("a player won !");
      this.setState({
        ...this.state,
        showEndGame: true
      })
    }
  }

  nextPlayer = () => {
    const playersTmp = this.state.players
    playersTmp[this.state.currentPlayer].pa = 10
    playersTmp[this.state.currentPlayer].pm = 3

    let nbPlayersToSkip = 1
    while (playersTmp[(this.state.currentPlayer + nbPlayersToSkip) % this.state.players.length].isDead) {
      nbPlayersToSkip += 1
    }
    const indexNPlus1 = (this.state.currentPlayer + nbPlayersToSkip) % this.state.players.length
    this.setState({
      turnNum: this.state.turnNum + 1,
      currentPlayer: indexNPlus1,
      countDownTour: 540,
      players: playersTmp,
      whiteZone: this.setWhiteZone(this.state.players[indexNPlus1]),
      whiteZoneAttack: {
        minX: -1,
        maxX: -1,
        minY: -1,
        maxY: -1,
      },

      whiteZoneHeal: {
        minX: -1,
        maxX: -1,
        minY: -1,
        maxY: -1,
      },
      whiteZoneEntrave: {
        minX: -1,
        maxX: -1,
        minY: -1,
        maxY: -1,
      }


    });
  }

  setWhiteZoneHeal = () => {
    let playersTmp = this.state.players[this.state.currentPlayer]
    const whiteZoneHeal = {
      minX: playersTmp.x - 0,
      maxX: playersTmp.x + 0,
      minY: playersTmp.y - 0,
      maxY: playersTmp.y + 0,
    }
    this.setState({
      whiteZoneHeal
    })
  }

  setWhiteZoneAttack = () => {
    let playersTmp = this.state.players[this.state.currentPlayer]
    const whiteZoneAttack = {
      minX: playersTmp.x - 2,
      maxX: playersTmp.x + 2,
      minY: playersTmp.y - 2,
      maxY: playersTmp.y + 2,
    }
    this.setState({
      whiteZoneAttack
    })
  }

  setWhiteZoneEntrave = () => {
    let playersTmp = this.state.players[this.state.currentPlayer]
    const whiteZoneEntrave = {
      minX: playersTmp.x - 0,
      maxX: playersTmp.x + 0,
      minY: playersTmp.y - 4,
      maxY: playersTmp.y + 4,
    }
    this.setState({
      whiteZoneEntrave
    })
  }

  isWhiteZoneAttack = (x, y) => {


    if ((x >= this.state.whiteZoneAttack.minX && x <= this.state.whiteZoneAttack.maxX)
      && (y >= this.state.whiteZoneAttack.minY && y <= this.state.whiteZoneAttack.maxY))
      return true
    else
      return false
  }
  isWhiteZoneHeal = (x, y) => {
    if ((x >= this.state.whiteZoneHeal.minX && x <= this.state.whiteZoneHeal.maxX)
      && (y >= this.state.whiteZoneHeal.minY && y <= this.state.whiteZoneHeal.maxY))
      return true
    else
      return false
  }
  isWhiteZoneEntrave = (x, y) => {
    if ((x >= this.state.whiteZoneEntrave.minX && x <= this.state.whiteZoneEntrave.maxX)
      && (y >= this.state.whiteZoneEntrave.minY && y <= this.state.whiteZoneEntrave.maxY))
      return true
    else
      return false
  }

  playerAttacked = (index, damage, usePa) => {

    if (this.state.players[this.state.currentPlayer].pa < 5) return;

    if (this.state.currentPlayer === index) {
      return
    }

    let playersTmp = this.state.players;
    let deathPlayersTmp = this.state.deathPlayers;
    playersTmp[index].pv -= damage;
    if (playersTmp[index].pv <= 0) {
      playersTmp[index].isDead = true;
      this.checkVictory(playersTmp)
      deathPlayersTmp.push(playersTmp[index].name)

    }

    this.state.players[this.state.currentPlayer].pa -= usePa;

    if (playersTmp)
      this.setState({
        deathPlayers: deathPlayersTmp,
        players: playersTmp
      });
    this.setState({
      whiteZoneAttack: {
        minX: -1,
        maxX: -1,
        minY: -1,
        maxY: -1,
      }
    })

  }
  playerEntrave = (index, damage, usePa, entrave) => {

    console.log('r')

    if (this.state.players[this.state.currentPlayer].pa < 8) return

    if (this.state.currentPlayer === index) {
      return
    }

    let playersTmp = this.state.players;
    let deathPlayersTmp = this.state.deathPlayers;
    playersTmp[index].pv -= damage
    playersTmp[index].pa -= entrave
    if (playersTmp[index].pv <= 0) {
      playersTmp[index].isDead = true;
      this.checkVictory(playersTmp)
      deathPlayersTmp.push(playersTmp[index].name)
    }

    this.state.players[this.state.currentPlayer].pa -= usePa

    this.setState({
      ...this.state,
      players: playersTmp,
      deathPlayers: deathPlayersTmp

    });
    this.setState({
      whiteZoneEntrave: {
        minX: -1,
        maxX: -1,
        minY: -1,
        maxY: -1,
      }
    })

  }

  playerHeal = (index, heal, usePa) => {

    if (this.state.players[this.state.currentPlayer].pa < 4) return

    let playersTmp = this.state.players;
    playersTmp[index].pv += heal
    this.state.players[this.state.currentPlayer].pa -= usePa

    this.setState({
      ...this.state,
      players: playersTmp,

    });
    this.setState({
      whiteZoneHeal: {
        minX: -1,
        maxX: -1,
        minY: -1,
        maxY: -1,
      }

    })

  }

  setPlayerPostion = (x, y, useMove) => {

    if (this.state.players[this.state.currentPlayer].pm < 1) return

    let playersTmp = this.state.players;
    playersTmp[this.state.currentPlayer].x = x
    playersTmp[this.state.currentPlayer].y = y
    playersTmp[this.state.currentPlayer].pm = playersTmp[this.state.currentPlayer].pm - useMove
    this.setState({
      whiteZone: this.setWhiteZone(playersTmp[this.state.currentPlayer]),
      players: playersTmp
    })

  }
  createGrid(gridrow, gridcol) {
    let arr = []
    for (let i = 0; i < gridrow; i++) {
      for (let j = 0; j < gridcol; j++) {
        arr.push(<Cell key={"key " + i + " " + j} y={j} x={i} setPlayerPostion={this.setPlayerPostion} isMovable={this.isWhiteZone(i, j)} isAttackable={this.isWhiteZoneAttack(i, j)} isHeal={this.isWhiteZoneHeal(i, j)} isEntrave={this.isWhiteZoneEntrave(i, j)} />)
      }
    }

    return arr
  }

  render() {

    if (this.state.showEndGame) {
      return <Redirect push to={{
        pathname: "/EndingGame",
        state: {
          winner: this.state.players[this.state.currentPlayer],
          deathPlayers: this.state.deathPlayers
        }
      }} />
    }

    const { players, } = this.state

    return (
      
      <div className="Gride">

        {
          this.createGrid(6, 13)
        }

        {
          players.map(
            (player, index) => {
              if (player.isDead === false) {
                return <Player index={index}
                  x={player.x} y={player.y}
                  avatar={player.avatar}
                  avatarPlayer={player.avatarPlayer}
                  avatarDamage={player.avatarDamage}
                  avatarHeal={player.avatarHeal}
                  avatarEnd={player.avatarEnd}
                  isCurrentPlayer={index === this.state.currentPlayer}
                  pv={player.pv}
                  isAttackable={this.isWhiteZoneAttack(player.x, player.y)}
                  isHeal={this.isWhiteZoneHeal(player.x, player.y)}
                  isEntrave={this.isWhiteZoneEntrave(player.x, player.y)}
                  playerAttacked={this.playerAttacked}
                  playerHeal={this.playerHeal}
                  playerEntrave={this.playerEntrave}
                  pa={player.pa}
                />
              }
              else { return }
            }
          )
        }
        <div className='menus'>
        
       
        <Container className='infoPlayer'>
        <Col><img className='blason' src={this.state.players[this.state.currentPlayer].houseBanner} alt={this.state.players[this.state.currentPlayer].name}></img></Col>
        <Col><div className='pseudoPlayer'>{this.state.players[this.state.currentPlayer].pseudoPlayer}</div></Col>
        </Container>

        <Container className='infoPointsPlayers'>
        <Row>
        <Col ><div className='healtBarre'>{this.state.players[this.state.currentPlayer].pv} PV</div></Col>
        </Row>
        <Row>
          <Col sm={{ size: 'auto', offset: 0 }}><div className='pa'>{this.state.players[this.state.currentPlayer].pa} PA</div></Col>
          <Col sm={{ size: 'auto', offset: 0 }}><div className='pm'>{this.state.players[this.state.currentPlayer].pm} PM</div></Col>
        </Row>
        </Container>

        <Container className='movePlayer'>
        <Col><div className='buttonMove' onClick={() => this.handleMoveClick()} >Move (-1PM)</div></Col>
        </Container>

        <Container className='spellPlayer'>
        <Row>
          <Col sm={{ size: 'auto', offset: 0 }}><div className="attack" onClick={() => this.handleAttackClick()} onMouseOver={() => this.showInfoAttack()} onMouseOut={() => this.hiddenInfoAttack()} >Boule de feu<br />(-5PA)</div>
      {this.state.InfoAttack ? <div className="infoAttack" style={{ color: 'black', fontWeight: 'bold', height: '50Opx', width: '350px', backgroundColor: 'rgba(255,255,255,0.7)', borderRadius: '3px', textAlign: 'center', zIndex: '50', position: 'fixed', bottom: '15vh', left: '50vw', padding: '10px' }}>L'adversaire perd 50 points de vie.<br /><br />Portée : Zone Rouge<br />Coût : 5 points d'action.</div> : null}</Col>
          <Col sm={{ size: 'auto', offset: 0 }}><div className="heal" onClick={() => this.handleHealClick()} onMouseOver={() => this.showInfoHeal()} onMouseOut={() => this.hiddenInfoHeal()}>Soin<br />(-4PA)</div>
      {this.state.InfoHeal ? <div className="infoAttack" style={{ color: 'black', fontWeight: 'bold', height: '50Opx', width: '400px', backgroundColor: 'rgba(255,255,255,0.7)', borderRadius: '3px', textAlign: 'center', zIndex: '50', position: 'fixed', bottom: '15vh', left: '50vw', padding: '10px' }}>Le joueur ciblé gagne 25 points de vie.<br /><br />Portée : Zone Orange<br />Coût : 4 points d'action.</div> : null}</Col>
          <Col sm={{ size: 'auto', offset: 0 }}><div className="entrave" onClick={() => this.handleEntraveClick()} onMouseOver={() => this.showInfoEntrave()} onMouseOut={() => this.hiddenInfoEntrave()}>Entrave<br />(-8PA)</div>
      {this.state.InfoEntrave ? <div className="infoAttack" style={{ color: 'black', fontWeight: 'bold', height: '50Opx', width: '450px', backgroundColor: 'rgba(255,255,255,0.7)', borderRadius: '3px', textAlign: 'center', zIndex: '50', position: 'fixed', bottom: '15vh', left: '50vw', padding: '10px' }}>L'adversaire perd 15 points de vie <br />et 2 points d'action à son prochain tour.<br /><br />Portée : Zone Violette<br />Coût : 8 points d'action.</div> : null}</Col>
        </Row>
        <br/>
        <Row>
          <Col>
          <div style={{ width: this.state.countDownTour, height: '30px', backgroundColor: 'cornsilk',  zIndex: '10',position: 'fixed', borderRadius: '10px' }}></div>
          <div style={{ width: '540px', height: '30px', backgroundColor: '#201e1e', zIndex: '0',position: 'fixed', borderRadius: '10px' }}></div>
          </Col>
        </Row>

        </Container>

        <Container className='endPlay'>
        <Col><div className="ButtonNextPlayers" onClick={() => this.nextPlayer()}>End Of Turn</div></Col>
        </Container>
    
        </div>

      </div>

    );
  }
}

export default Gride;