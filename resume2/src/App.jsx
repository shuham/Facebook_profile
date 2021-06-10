import React from 'react';
import Heading from './Heading';
import List from './List';
import Para from './Para';
import './App.css';



function App(){
  return(
    
       <div className="cont">
      <Heading />
      
      <div className="iner">
      <Para/>
      <List/>
      </div>

      </div>


    
  )
}
export default App;