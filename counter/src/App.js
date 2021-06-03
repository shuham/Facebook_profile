
import React from 'react';
import './App.css';
import { Count } from './component/Count';


export function App(args){
  console.log('Props is ',args);
  return (<div>
    <Count/>

  </div>
    
  )
}

export default App;
