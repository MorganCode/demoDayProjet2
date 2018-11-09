import React, { Component } from 'react'
import './ChoicePlayers.css';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { Card, CardImg, CardText, CardBody, CardTitle, Button } from 'reactstrap';

class ChoicePlayers extends Component {

    constructor(props) {
        super(props)
        this.state = {
            playerOneChoice: "",
            playerTwoChoice: "",
            playerThreeChoice: "",
            playerFourChoice: "",

            playerOnePseudo: "",
            playerTwoPseudo: "",
            playerThreePseudo: "",
            playerFourPseudo: "",

            placeholderPseudo: "",
            showButtonHarry: true,
            showButtonNorbert: true,
            showButtonLuna: true,
            showButtonDrago: true,
            players: [

            ],

            player: {
                name: '',
                avatar: '',
                avatarDamage: '',
                avatarHeal: '',
                avatarEnd: '',
                houseBanner: '',
                x: -1,
                y: -1,
                pv: 100,
                pa: 10,
                pm: 3,
                keyPlayer: 1,
                pseudoPlayer: '',

            },

            playersNumber: true,
            colorButtonHarry: 'white',
            colorButtonDrago: 'white',
            colorButtonLuna: 'white',
            colorButtonNorbert: 'white',

            playersSelection: [],
        }
    }




    choiceLuna = (e) => {
        this.setState({
            player: {
                ...this.state.player,
                name: this.state.name = 'Luna',
                //Les différents avatars en fonctionde l'action
                avatar: this.state.avatar = 'https://img.lght.pics/2mpJ.png',
                avatarPlayer: 'https://i.postimg.cc/sDL0vXJz/LunaP.png',
                avatarDamage: this.state.avatarDamage = 'https://i.postimg.cc/G2T9f4Nw/explo2.gif',
                avatarHeal: this.state.avatarHeal = 'https://i.postimg.cc/tJzHKpcq/LunaHeal.png',
                avatarEnd: this.state.avatarEnd = 'https://i.postimg.cc/52wHycpc/explosion.png',
                houseBanner: this.state.houseBanner = 'https://img.lght.pics/2mhN.md.png',
                //Si le joueur est mort ou pas
                isDead: false,
                x: this.state.x = 3,
                y: this.state.y = 11,
                pv: this.state.pv = 100,
                pa: this.state.pa = 10,
                pm: this.state.pm = 3,

            },
            colorButtonHarry: this.colorButtonHarry = 'white',
            colorButtonDrago: this.colorButtonDrago = 'white',
            colorButtonLuna: this.colorButtonLuna = '#9b1515',
            colorButtonNorbert: this.colorButtonNorbert = 'white',
            showButtonLuna: false

        })

    }



    choiceHarry = (e) => {
        this.setState({
            player: {
                ...this.state.player,
                name: this.state.name = 'Harry',
                //Les différents avatars en fonctionde l'action
                avatar: this.state.avatar = 'https://img.lght.pics/2TqC.png',
                avatarPlayer: 'https://i.postimg.cc/NjzYGBK2/harryP.png',
                avatarDamage: this.state.avatarDamage = 'https://i.postimg.cc/G2T9f4Nw/explo2.gif',
                avatarHeal: this.state.avatarHeal = 'https://i.postimg.cc/K88Zy3Fd/harry-Heal.png',
                avatarEnd: this.state.avatarEnd = 'https://i.postimg.cc/52wHycpc/explosion.png',
                houseBanner: this.state.houseBanner = 'https://img.lght.pics/2mTV.png',
                //Si le joueur est mort ou pas
                isDead: false,
                x: this.state.x = 5,
                y: this.state.y = 3,
                pv: this.state.pv = 300,
                pa: this.state.pa = 10,
                pm: this.state.pm = 5,

            },
            colorButtonHarry: this.colorButtonHarry = '#9b1515',
            colorButtonDrago: this.colorButtonDrago = 'white',
            colorButtonLuna: this.colorButtonLuna = 'white',
            colorButtonNorbert: this.colorButtonNorbert = 'white',
            showButtonHarry: false
        })

    }




    choiceDrago = (e) => {
        this.setState({
            player: {
                ...this.state.player,
                name: this.state.name = 'Drago',
                //Les différents avatars en fonctionde l'action
                avatar: this.state.avatar = 'https://img.lght.pics/235X.png',
                avatarPlayer: 'https://i.postimg.cc/W4XchVYP/DragoP.png',
                avatarDamage: this.state.avatarDamage = 'https://i.postimg.cc/G2T9f4Nw/explo2.gif',
                avatarHeal: this.state.avatarHeal = 'https://i.postimg.cc/N0LfR9z1/Drago-Heal.png',
                avatarEnd: this.state.avatarEnd = 'https://i.postimg.cc/52wHycpc/explosion.png',
                houseBanner: this.state.houseBanner = 'https://img.lght.pics/2mTc.png',
                //Si le joueur est mort ou pas
                isDead: false,
                x: this.state.x = 5,
                y: this.state.y = 8,
                pv: this.state.pv = 100,
                pa: this.state.pa = 10,
                pm: this.state.pm = 3,

            },
            colorButtonHarry: this.colorButtonHarry = 'white',
            colorButtonDrago: this.colorButtonDrago = '#9b1515',
            colorButtonLuna: this.colorButtonLuna = 'white',
            colorButtonNorbert: this.colorButtonNorbert = 'white',
            showButtonDrago: false,
        })

    }



    choiceNorbert = (e) => {
        this.setState({
            player: {
                ...this.state.player,
                name: this.state.name = 'Norbert',
                //Les différents avatars en fonctionde l'action
                avatar: this.state.avatar = 'https://img.lght.pics/2mhU.png',
                avatarPlayer: 'https://i.postimg.cc/kgxFqX1f/NorbertP.png',
                avatarDamage: this.state.avatarDamage = 'https://i.postimg.cc/G2T9f4Nw/explo2.gif',
                avatarHeal: this.state.avatarHeal = 'https://i.postimg.cc/TPWvRrsH/Norbert-Heal.png',
                avatarEnd: this.state.avatarEnd = 'https://i.postimg.cc/52wHycpc/explosion.png',
                houseBanner: this.state.houseBanner = 'https://img.lght.pics/2mh0.md.png',
                //Si le joueur est mort ou pas
                isDead: false,
                x: this.state.x = 0,
                y: this.state.y = 5,
                pv: this.state.pv = 100,
                pa: this.state.pa = 10,
                pm: this.state.pm = 3,

            },
            colorButtonHarry: this.colorButtonHarry = 'white',
            colorButtonDrago: this.colorButtonDrago = 'white',
            colorButtonLuna: this.colorButtonLuna = 'white',
            colorButtonNorbert: this.colorButtonNorbert = '#9b1515',
            showButtonNorbert: false
        })

    }




    //-----------------Fonction qui enregistre en state le pseudo du joueur----------------------//
    updatePseudoPlayer = (e) => {

        this.setState({
            player: {
                ...this.state.player,
                pseudoPlayer: e.target.value
            }
        })
    }

    //------------- Crée un objet user avec les informations fournie par le player et change la keyPlayer----------//

    createPlayer = () => {

        let userArray = this.state.players;
        let playerTmp = this.state.player;


        if (this.state.player.keyPlayer <= 4 && this.state.player.pseudoPlayer != "") {
            this.setState({
                player: {
                    ...this.state.player,
                    keyPlayer: this.state.player.keyPlayer + 1
                }
            })

            userArray.push(playerTmp)
      
            this.setState({
                player: {
                    ...this.state.player,
                    pseudoPlayer: ""
                },
                placeholderPseudo: "",
                // playerOnePseudo : this.state.players.pseudoPlayer
            })

            if (this.state.playerOnePseudo == ""){
                this.setState({
                    playerOnePseudo: this.state.players[this.state.players.length-1].pseudoPlayer,
                    playerOneChoice: this.state.players[this.state.players.length-1].name
                })
            return}
            else if (this.state.playerTwoPseudo == "") {
                this.setState({
                    playerTwoPseudo: this.state.players[this.state.players.length-1].pseudoPlayer,
                    playerTwoChoice: this.state.players[this.state.players.length-1].name
                })
            return 
            }
            else if (this.state.playerThreePseudo == "") {
                this.setState({
                    playerThreePseudo: this.state.players[this.state.players.length-1].pseudoPlayer,
                    playerThreeChoice: this.state.players[this.state.players.length-1].name
                })
            return 
            }
            else if (this.state.playerFourPseudo == "") {
                this.setState({
                    playerFourPseudo: this.state.players[this.state.players.length-1].pseudoPlayer,
                    playerFourChoice: this.state.players[this.state.players.length-1].name
                })
            return 
            }
            

        


            console.log("jesuisici" , this.state.players[this.state.players.length-1].name)
            console.log(this.state.players[this.state.players.length-1].pseudoPlayer)

        }
        else {
            this.setState({
                placeholderPseudo: "Merci de rentrer votre pseudo"
            })
        }
    }

    render() {
        return (
            <div className='ChoicePlayers' style={{ width: window.innerWidth + 'px', height: window.outerHeight + 'px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} >
            <Container className='menusValidation1'>
                   <Row>
                   <Col> {this.state.playerOnePseudo}: {this.state.playerOneChoice} </Col> 
                   <Col>{this.state.playerTwoPseudo}: {this.state.playerTwoChoice}</Col>
                   <Col>{this.state.playerThreePseudo}: {this.state.playerThreeChoice}</Col>
                   <Col>{this.state.playerFourPseudo}: {this.state.playerFourChoice}</Col>
                   </Row>
                   </Container>
                <Container className='boulet'>
                    <br />
                    <Row>
                        <Col sm={{ size: '3', offset: 0 }}>
                            <Card>
                                <CardImg top width="100%" src="http://image.noelshack.com/fichiers/2018/45/3/1541598978-harryaccueil.jpg" alt="Card image cap" />
                                <CardBody>
                                    <CardTitle>Harry Potter</CardTitle>
                                    <CardText>Harry est assez timide et plutôt modeste. Il reconnaît très volontiers la difficulté, voire l'incapacité, d'affronter ses peurs et son principal ennemi sans l'aide précieuse de ses amis</CardText>
                                    {this.state.showButtonHarry ? <Button onClick={() => this.choiceHarry()}>Choisir</Button> : null}
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm={{ size: '3', offset: 0 }}>
                            <Card>
                                <CardImg top width="100%" src="http://image.noelshack.com/fichiers/2018/45/3/1541598971-dragoaccueil.jpg" alt="Card image cap" />
                                <CardBody>
                                    <CardTitle>Drago Malfoy</CardTitle>
                                    <CardText>Drago est très prétentieux et se moque de toute personne n'étant pas de son avis ou de sa condition. Il est convaincu de la supériorité des sorciers de sang pur et voue une grande admiration à son père.</CardText>
                                    {this.state.showButtonDrago ? <Button onClick={() => this.choiceDrago()}>Choisir</Button> : null}
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm={{ size: '3', offset: 0 }}>
                            <Card>
                                <CardImg top width="100%" src="http://image.noelshack.com/fichiers/2018/45/3/1541600752-norbertaccueil.jpg" alt="Card image cap" />
                                <CardBody>
                                    <CardTitle>Norbert Dragonneau</CardTitle>
                                    <CardText>Norbert est un sorcier excentrique passionné de magizoologie qui se sent plus à l'aise lorsqu'il est entouré d'animaux. C'est un homme d'action qui préfère travailler sur le terrain.</CardText>
                                    {this.state.showButtonNorbert ? <Button onClick={() => this.choiceNorbert()}>Choisir</Button> : null}
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm={{ size: '3', offset: 0 }}>
                            <Card>
                                <CardImg top width="100%" src="http://image.noelshack.com/fichiers/2018/45/3/1541598964-lunaaccueil.jpg" alt="Card image cap" />
                                <CardBody>
                                    <CardTitle>Luna Lovegood</CardTitle>
                                    <CardText>Luna est la fille de Xenophilius, le rédacteur en chef du Chicaneur. Excentrique et tête en l’air, les autres sorciers la trouvent étrange. Elle n’en est pas moins une alliée précieuse pour Harry et ses amis.</CardText>
                                    {this.state.showButtonLuna ? <Button onClick={() => this.choiceLuna()}>Choisir</Button> : null}
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <br />
                    </Container>
                    
                    
                    <Container className='menusValidation'>
                    <Row style={{ alignItems: 'center' }}>
                        <Col className='Pseudo' sm={{ size: '5', offset: 1 }} >Pseudo : <input style={{ borderRadius:'20px' ,textAlign: 'center', color: 'black', }} value={this.state.player.pseudoPlayer} onChange={this.updatePseudoPlayer} placeholder={this.state.placeholderPseudo} name='pseudo' id='pseudo' ></input></Col>
                        <Col sm={{ size: '5', offset: 0 }}><div onClick={() => this.createPlayer()} className='ValiderMonChoix'>Valider mon choix</div></Col>
                    </Row>
                    
                    <Row style={{ alignItems: 'center',marginTop:'15px', textDecoration:'none important', outline:'none !important' }}>
                        <Col sm={{ size: '3', offset: 3 }}>{this.state.players.length >= 2 ? (<div><Link className='cursor' to={{ pathname: process.env.PUBLIC_URL + '/GameZone', state: { players: this.state.players } }} >Lancer la partie</Link></div>) : null}</Col>
                        <Col sm={{ size: '3', offset: 1 }}><a className='cursor2' href= {process.env.PUBLIC_URL + '/ChoicePlayers'} style={{ color: 'white', textDecoration: 'none', fontSize: '15px' }}>Reset les choix</a></Col>
                     </Row>
                   </Container>
                   <br/>
                   
            </div>
        );

    }
}


export default ChoicePlayers;