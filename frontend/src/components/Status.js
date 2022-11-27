import axios from 'axios'
import React from 'react'

function StatusItem(props) {
    const deleteStatusHandler = (name) => {
    axios.delete(`http://localhost:8000/api/status/${name}`)
        .then(res => console.log(res.data)) }
  
    return (
        <div>
            <p>
                <span style={{ fontWeight: 'bold, underline' }}>{props.status.name} : </span> {props.status.url} : {props.status.status}
                <button onClick={() => deleteStatusHandler(props.status.name)} className="btn btn-outline-danger my-2 mx-2" style={{'borderRadius':'50px',}}>X</button>
                <hr></hr>
            </p>
        </div>
    )
}

export default StatusItem;