import React from 'react'

const RowComponent = ({items,deleteHandler}) =>{
    return(
        items.map((item,i) => {
            return(
                <tr key={i}>
                    <td>{item.name}</td>
                    <td>{item.preferred_position}</td>
                    <td>
                        <button className="btn btn-danger" onClick={deleteHandler.bind(item._id)}>
                            Delete
                        </button>
                    </td>
                </tr>
            )
        })
    )
}
export default RowComponent;