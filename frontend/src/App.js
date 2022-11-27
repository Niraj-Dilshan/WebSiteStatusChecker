import React, { useState, useEffect} from 'react';
import './App.css';
import StatusView from './components/StatusListView';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const [statusList, setStatusList] = useState([{}])
  const [name, setName]= useState('') 
  const [url, setUrl] = useState('')
  const [status, setStatus] = useState('')
  
    

  // Read all status
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/status')
      .then(res => {
        setStatusList(res.data)
      })
  });

  // Post a status
  const addStatusHandler = () => {
    axios.post('http://localhost:8000/api/status/', { 'name': name, 'url': url, 'status': status })
      .then(res => console.log(res))
  };

  return (
    <div className="App list-group-item  justify-content-center align-items-center mx-auto" style={{"width":"95%", "backgroundColor":"white", "marginTop":"15px"}} >
    <h1 className="card text-white bg-info mb-1" styleName="max-width: 20rem;">Website Status Checker</h1>
    <h6 className="card text-white bg-info mb-3">FASTAPI - React - MongoDB</h6>
   <div className="card-body">
    <h5 className="card text-white bg-dark mb-3">Add Website</h5>
    <span className="card-text"> 
      <input className="mb-2 form-control nameIn" onChange={event => setName(event.target.value)} placeholder='Name'/> 
      <input className="mb-2 form-control urlIn"  onChange={event => setUrl(event.target.value)} placeholder='Url'/>
      <input className="mb-2 form-control statusIn" onChange={event => setStatus(event.target.value)}  placeholder='Status'/>
    <button className="btn btn-info mx-2 mb-3" style={{'borderRadius':'50px',"font-weight":"bold"}} onClick={addStatusHandler}>Add Website</button>
    </span>
    <h5 className="card text-white bg-dark mb-3">Monitoring Websites</h5>
    <div >
    </div>
    <StatusView StatusList={statusList} />
    </div>
    <h6 className="card text-dark bg-warning py-1 mb-0" >Copyright 2022, All rights reserved &copy;</h6>
  </div>
  );
}

export default App;