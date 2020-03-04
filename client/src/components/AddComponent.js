import React, {useState, useEffect} from 'react'
import axios from 'axios'

const AddComponent = () =>{

    const [formState, setFormState] = useState({
        name: "",
        preferred_position: ""
    })
    const [errState, setErrState] = useState([])

    const handleChange = (e) =>{
        setFormState({
            ...formState,
            [e.target.name] : e.target.value
        })
    }

    const submitHandler = (e) =>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/players", formState)
            .then(res => console.log(res))
            .catch(err => {
                const {errors} = err.response.data;

                for(const key of Object.keys(errors)){
                    errorArr.push(errors[key].message)
                }

                // const errorArr = []
                // for(const key of Object.keys(errors)){
                //     errorArr.push(errors[key].message)
                // }
                // setErrState(errorArr)
            })
        setFormState({
            name: "",
            preferred_position: ""
        })
    }

    return(
        <form onSubmit={submitHandler}>
            <h1>Add Component</h1>
            <p>
                Name:
                <input name="name" value={formState.name} onChange={handleChange} />
            </p>
            <p>
                Preferred Position:
                <input name="preferred_position" value={formState.preferred_position} onChange={handleChange} />
            </p>
            <button className="btn btn-dark">Create</button>
            {errState.map((err, index) => <p key={index}>{err}</p>) }
        </form>
    )
}
export default AddComponent;