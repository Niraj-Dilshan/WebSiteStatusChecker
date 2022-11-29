import React, { useState, useEffect} from 'react';
import './App.css';
import StatusView from './components/StatusListView';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [statusList, setStatusList] = useState([{}])
  const [name, setName]= useState('') 
  const [url, setUrl] = useState('')
  const status = "Checking"
    
  // Read all status
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/status')
      .then(res => {
        setStatusList(res.data)
      })
  },60000);

  // Post a status
  const addStatusHandler = () => {
    axios.post('http://localhost:8000/api/status/', { 'name': name, 'url': url, 'status': status })
      .then(res => console.log(res))
    //reload page
    window.location.reload(false);
  };

  return (
    <div className="App list-group-item  justify-content-center align-items-center mx-auto" style={{"width":"95%", "backgroundColor":"white", "marginTop":"15px"}} >
      <h1 className="card text-white bg-primary mb-1" styleName="max-width: 20rem;">Website Status Checker</h1>
      <h6 className="card text-white bg-primary mb-3">FASTAPI - React - MongoDB</h6>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5">
            <div className="card-body">
              <h5 className="card text-white bg-dark mb-3">Add Website</h5>
              <span className="card-text"> 
                <input className="mb-2 form-control nameIn" onChange={event => setName(event.target.value)} placeholder='Name'/> 
                <input className="mb-2 form-control urlIn"  onChange={event => setUrl(event.target.value)} placeholder='Url'/>
                <button className="btn btn-primary mx-2 mb-3" style={{'borderRadius':'50px',"font-weight":"bold"}} onClick={addStatusHandler}>Add Website</button>
                <p className='text-danger'>*Status Of WebSites Will Check Every 5 minutes Automatically
                  <img src="https://infini7y.tk/wp-content/uploads/2022/11/temp.png" alt="temp" style={{'width':'100%'}}/>
                </p>
              </span>
            </div>
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h5 className="card text-white bg-dark mb-3">Monitoring Websites</h5>
              <StatusView StatusList={statusList} />
            </div>
          </div>
        </div>
      </div>
      <h6 className="card text-dark fixed-bottom bg-warning py-1 mb-0" >Copyright&copy; {new Date().getFullYear()} To Niraj-Dilshan, All rights reserved </h6>
  </div>
  );
}

export default App;
