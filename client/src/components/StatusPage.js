import React from 'react'
import axios from 'axios'


const Button = ({item,gameNum,updateStatus }) => {

    const {status} = item[gameNum]
    const {_id:playerId} = item

    switch(status){
        case 0:
            return(
                <td>
                    <button onClick={()=>updateStatus(1,gameNum,playerId)} type="button" className="btn btn-outline-primary">Playing</button>
                    <button onClick={()=>updateStatus(2,gameNum,playerId)} type="button" className="btn btn-outline-secondary">Not Playing</button>
                    <button onClick={()=>updateStatus(0,gameNum,playerId)} type="button" className="btn btn-danger">Undecided</button>
                </td>
            )
        case 1:
            return(
                <td>
                    <button onClick={()=>updateStatus(1,gameNum,playerId)} type="button" className="btn btn-primary">Playing</button>
                    <button onClick={()=>updateStatus(2,gameNum,playerId)} type="button" className="btn btn-outline-secondary">Not Playing</button>
                    <button onClick={()=>updateStatus(0,gameNum,playerId)} type="button" className="btn btn-outline-danger">Undecided</button>
                </td>
            )
        case 2:
            return(
                <td>
                    <button onClick={()=>updateStatus(1,gameNum,playerId)} type="button" className="btn btn-outline-primary">Playing</button>
                    <button onClick={()=>updateStatus(2,gameNum,playerId)} type="button" className="btn btn-secondary">Not Playing</button>
                    <button onClick={()=>updateStatus(0,gameNum,playerId)} type="button" className="btn btn-outline-danger">Undecided</button>
                </td>
            )
        default:
            return null;
    }
}


const Row = ({item, gameNum, updateStatus}) =>{
    const {name} = item
    return (
        <tr>
            <td>
                {name}
            </td>
            <Button updateStatus={updateStatus} gameNum={gameNum} item={item} />
        </tr>
    )
}


const StatusPage = ({gameNum, items, reloadState, setReloadState}) =>{
    var game_num = "game_" + gameNum

    const updateStatus = (status, gameId, playerId) => {
        const body = {
            status:status,
            gameId:gameId
        }
        axios.put(`http://localhost:8000/api/players/${playerId}`,body)
            .then(res => setReloadState(!reloadState))
            .catch(err => console.log("ERROR FROM UPDATE: ", err))
    }

    return (
        <table className="table table-dark">
            <thead>
                <tr>
                    <td>Player Name</td>
                    <td>Actions</td>
                </tr>
            </thead>
            <tbody>
                {items.map((item,i) => {
                    return(
                        <Row key={i} updateStatus={updateStatus} item={item} gameNum={game_num} />
                    )
                })}
            </tbody>
        </table>
    )
}
export default StatusPage;