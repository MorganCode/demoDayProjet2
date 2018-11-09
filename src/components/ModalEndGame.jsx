//ModalEndGame.jsx
import React, { Component} from 'react';


class ModalEndGame extends Component {

render(){
  return(


    <div className="ModalEndGame" style={{ borderRadius:'5%',height: "200px", width: "300px", backgroundColor:'white', margin:'40px 0 0 300px', padding:'10px'}} >
    <h1>You win the game !</h1>
    <a href='/'><button  style={{width : '100px', height : '40px', backgroundColor : '#9b1515', color: 'white', borderRadius: '5px', borderColor: '#9b1515' }}>New Game</button></a>
    </div>
  )
}


}

export default ModalEndGame;
