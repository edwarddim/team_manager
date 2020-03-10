import React, {useEffect,useState} from 'react'
import axios from 'axios'

const ListComponent = () =>{
    const [listState, setListState] = useState([])
    
    useEffect(()=>{
        axios.get("http://localhost:8000/api/players")
            .then(res => {
                setListState(res.data)
            })
            .catch(err => console.log(err))
    },[])

    const deleteHandler = id =>{
        var check = window.confirm("Are you sure?")
        if(check){
            axios.delete("http://localhost:8000/api/players/"+id)
            .then(res =>{
                removeFromDom(id)
            })
            .catch(err => console.log("ERR: ",err))
        }
    }
    const removeFromDom = id =>{
        setListState(listState.filter(player => player._id !== id))
    }
    return (
        <table className="table table-dark">
            <thead>
                <tr>
                    <td>Player Name</td>
                    <td>Preferred Position</td>
                    <td>Actions</td>
                </tr>
            </thead>
            <tbody>
                {listState.map((item,i) => {
                    return(
                        <tr key={i}>
                            <td>{item.name}</td>
                            <td>{item.preferred_position}</td>
                            <td>
                                <button className="btn btn-danger" onClick={()=> deleteHandler(item._id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}
export default ListComponent