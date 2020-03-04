import React from 'react'
import {Router, Link} from "@reach/router"

import styles from "../module.css/PlayerComponent.module.css"

import ListComponent from "./ListComponent"
import AddComponent from "./AddComponent"



const PlayerWrapper = () =>{
    return(
        <div id={styles.wrapper}>
            <Link to="list" >List</Link> |
            <Link to="status" >Add Player</Link>
            <Router>
                <ListComponent path="list" />
                <AddComponent path="add" />
            </Router>
        </div>
    )
}
export default PlayerWrapper;