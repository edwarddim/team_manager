import React from 'react';
import {Router, Link} from "@reach/router"

import styles from "./module.css/AppComponent.module.css"

import PlayerWrapper from './components/PlayerWrapper';
import StatusWrapper from './components/StatusWrapper';




function App() {
  return (
    <div className="container p-1 border border-dark mt-1" id={styles.wrapper}>
      <Link to="players/list" >Manaage Players</Link> |
      <Link to="status" >Manaage Players Status</Link>
      <Router>
        <PlayerWrapper path="players/*"/>
        <StatusWrapper path="status" />
      </Router>
    </div>
  );
}

export default App;
