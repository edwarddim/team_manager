import React from 'react'
import RowComponent from './RowComponent'

const ListComponent = () =>{
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
                <RowComponent />
            </tbody>
        </table>
    )
}
export default ListComponent