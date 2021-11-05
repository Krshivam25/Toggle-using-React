import React, { useState } from 'react';
import './App.css';
import {Switch} from 'antd';

const App= () => {
  const [toggle, setToggle] = useState(false);
  const toggler = () => {
    toggle ? setToggle(false) : setToggle(true);
  }
  return (
    <div className="App">
       
       <Switch onClick={toggler}/>
       {toggle ? <span>True</span> : <span>False</span>}
    </div>
  );
}

export default App;
