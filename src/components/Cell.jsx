 // Cell.jsx
 import React, {Component} from 'react';
 import './Cell.css';



 class Cell extends Component {
   constructor(props) {
     super(props)
     //commentaire d'Ysa : Initialisation du state de la cell (Cela nous permet aussi de différencier les cases où l'on peut se déplacer et celles où l'on peut attaquer)
     //commentaire d'Ysa : Ici j'indique pour le test que mes 2 joueurs occupent les cases 1/1 et 1/7 avec taken=true
     this.state = {
       taken: (props.x === 1 && (props.y === 1 || props.y === 7)) ? true : false,
       // commentaire d'Anaële : création de l'état au click (au onMouseover) en true
      
     };
   }
   setClickPosition() {
     if (this.props.isMovable) {
       this.props.setPlayerPostion(this.props.x, this.props.y, 1)
     }
   }

    // commentaire d'Anaële : création de la fonction qui active la cellule en fonction de l'état
    // 
    handleMouveOver = () => {
      console.log("YOUHYOUH",this.props.isMovable) 
      if (this.props.isMovable){
        // this.props.showCell(this.props.x, this.props.y)
      }
      
    }
    

   // commentaire d'Ysa : création de la fonction qui récupère l'event du click
   handleClick = () => {
     console.log(this.props.x, this.props.y);
   }

   render() {

     let color = "rgba(0, 0, 0, 0.4)"
     if (this.props.isMovable) {
       color = "rgba(10, 126, 49, 0.72)"
     } else if (this.props.isAttackable) {
       color = "rgba(174, 0, 1, 0.72)"
     } else if (this.props.isHeal) {
       color = 'rgba(160, 78, 0, 0.72'
     } else if (this.props.isEntrave) {
       color = 'rgba(136, 7, 129, 0.72'
     }

     return ( 
       <div className = "Cell CellClick"
       onClick = {() => this.setClickPosition()}
       onMouseOver = {() => this.handleMouveOver()}
       style = {
         {
           top: this.props.x * 100,
           left: this.props.y * 100,
           backgroundColor: color
         }
       } >
       </div>
     );
   }
   // commentaires pour test github

 }


 export default Cell;