import axios from 'axios'
import React from 'react'

function StatusItem(props) {
    const deleteStatusHandler = (name) => {
    axios.delete(`http://localhost:8000/api/status/${name}`)
        .then(res => console.log(res.data)) }
  
    return (
        <div>
            <p>
                <span style={{ fontWeight: 'bold, underline' }}> Site Name : {props.status.name} </span> <br/> Site URL : {props.status.url} <br/> Site Status : {props.status.status} <br/>
                To Delete Site : <button onClick={() => deleteStatusHandler(props.status.name)} className="btn btn-outline-danger my-2 mx-2" style={{'borderRadius':'15px',}}>X</button>
                <hr></hr>
            </p>
        </div>
    )
}

export default StatusItem;