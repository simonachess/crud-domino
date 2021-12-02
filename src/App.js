
import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Header from './components/Header';
import Create from './components/Create';
import Bag from './components/Bag';

function App() {

  const [plates, setPlates] = useState([]);

  const [updated, setUpdated] = useState(Date.now());

  ///////CRUD

  const createPlate = (plate) => {
    axios.post('http://localhost:3003/dominos/add', plate)
      .then(res => {
        setUpdated(Date.now())
      })
  }

  useEffect(() => {
    axios.get('http://localhost:3003/dominos')
      .then(res => {
        setPlates(res.data.dominos.map(p => ({ id: p.id, left: p.left_side, right: p.right_side })))
      })
  }, [updated]);


  return (
    <div className="App col top domino">
      <div className="domino__wrap">
        <Header />
        <Create createPlate={createPlate} />
        <Bag plates={plates} />
      </div>
    </div>
  );
}

export default App;
