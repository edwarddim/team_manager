import React, {useEffect,useState} from 'react'
import axios from 'axios'

const RowItem = (item,i) => {
    return(
        <tr key={i}>
            <td>{item.name}</td>
            <td>{item.preferred_position}</td>
            <td>DELETE</td>
        </tr>
    )
}

const ListComponent = () =>{
    const [listState, setListState] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:8000/api/players")
            .then(res => {
                setListState(res.data)
            })
            .catch(err => console.log(err))
    },[])

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
                {listState.map((item,i)=>{
                    return(
                        RowItem(item, i)
                    )
                })}
            </tbody>
        </table>
    )
}
export default ListComponent