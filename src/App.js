import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import data from './data'
import { keyboard } from '@testing-library/user-event/dist/keyboard';


function App() {
  const [persons,setPersons]=useState(data)
  
  function display(persons){
    return (
      <div key={persons.id}>
        <h1>{persons.name}</h1>
      </div>
    )
      
    

    
  }

  function clear(){
    setPersons([])
  }
  // let [message,setMessage]=useState("some Random Message")
  // function changedmsg(){
  //   if(message==="some Random Message"){
  //     setMessage("so called new one")
  //   }
  //   else{
  //     setMessage("some Random Message")
  //   }
  // }
  return (
    <div className="App">
      {persons.map(display)}
      {/* <h1>{message}</h1> */}
      
      <div>
      <button onClick={()=>setPersons([])}>Ok Done</button>
      </div>

      <div>
        <button onClick={clear}>new button</button>
      </div>







      
        
      
    </div>
  );
}


export default App;
