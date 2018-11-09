//App.jsx
import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, } from 'react-router-dom';
import './App.css';
import GameZone from './components/GameZone';
import MainMenu from './components/MainMenu';
import ChoicePlayers from './components/ChoicePlayers';
import EndingGame from './components/EndingGame';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Switch>
      <Route exact path= {process.env.PUBLIC_URL + '/'} component = {MainMenu} />
      <Route exact path= {process.env.PUBLIC_URL + '/ChoicePlayers'} component = {ChoicePlayers}/>
      <Route exact path= {process.env.PUBLIC_URL + '/GameZone'} component = {GameZone} />
      <Route exact path= {process.env.PUBLIC_URL + '/EndingGame'} component = {EndingGame}/>
      </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
