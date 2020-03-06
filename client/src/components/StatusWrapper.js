import React, {useEffect,useState} from 'react'
import {Router, Link} from "@reach/router"
import axios from 'axios'

import styles from "../module.css/StatusComponent.module.css"

import StatusPage from './StatusPage'


const StatusWrapper = () =>{

    const [listState, setListState] = useState([])
    
    useEffect(()=>{
        axios.get("http://localhost:8000/api/players")
            .then(res => {
                setListState(res.data)
            })
            .catch(err => console.log(err))
    },[])

    return (
        <div id={styles.wrapper}>
            <div id={styles.links}>
                <Link to="game/1" >Game 1</Link> |
                <Link to="game/2" >Game 2</Link> |
                <Link to="game/3" >Game 3</Link> 
            </div>
            <Router>
                <StatusPage items={listState} path="game/:id" />
            </Router>
        </div>
    )
}
export default StatusWrapper