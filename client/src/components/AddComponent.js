import React, {useState} from 'react'
import axios from 'axios'
import { navigate } from '@reach/router'

const AddComponent = () =>{

    const [formState, setFormState] = useState({
        name: "",
        preferred_position: ""
    })
    const [errState, setErrState] = useState({})

    const handleChange = (e) =>{
        setFormState({
            ...formState,
            [e.target.name] : e.target.value
        })
    }

    const submitHandler = (e) =>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/players", formState)
            .then(res =>{
                navigate("/players/list")
            })
            .catch(err => {
                const {errors} = err.response.data;
                const errorObj = {}

                for(const key of Object.keys(errors)){
                    errorObj[key] = true;
                }
                setErrState(errorObj)
            })
    };

    return(
        <form onSubmit={submitHandler}>
            <h1>Add Component</h1>
            <p>
                Name:
                <input name="name" value={formState.name} onChange={handleChange} />
                {(errState.name)? <small className="ml-1 text-danger font-weight-bold">WRONG</small>:null}
            </p>
            <p>
                Preferred Position:
                <input name="preferred_position" value={formState.preferred_position} onChange={handleChange} />
                {(errState.preferred_position)? <small className="ml-1 text-danger font-weight-bold">WRONG</small>:null}

            </p>
            <button className="btn btn-dark">Create</button>
        </form>
    )
}
export default AddComponent;