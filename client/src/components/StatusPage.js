import React from 'react'

const clickHandle = event =>{
    console.log(event.target)
    console.log(event.target.className)
}


const Row = ({item, id}) =>{
    let game = "game_" + id
    return (
        <tr>
            <td>{item.name}</td>
            <td>
                {item[game] === "UNDECIDED" &&
                    <button onClick={(event) => clickHandle(event)} type="button" className="btn btn-primary" data-toggle="button" aria-pressed="false" autoComplete="off">
                        {item[game]}
                    </button>
                }
                {item[game] === "PLAYING" &&
                    <button onClick={(event) => clickHandle(event)} type="button" className="btn btn-primary" data-toggle="button" aria-pressed="false" autoComplete="off">
                        {item[game]}
                    </button>
                }
                {item[game] === "NOT_PLAYING" &&
                    <button onClick={(event) => clickHandle(event)} type="button" className="btn btn-primary" data-toggle="button" aria-pressed="false" autoComplete="off">
                        {item[game]}
                    </button>
                }
            </td>
        </tr>
    )
}


const StatusPage = ({id, items}) =>{
    console.log(items)
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
                        <Row key={i} item={item} id={id} />
                    )
                })}
            </tbody>
        </table>
    )
}
export default StatusPage;