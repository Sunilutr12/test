import React from "react";
import {Welcome} from './Welcome'
import {Greeting} from './Greeting'

function App() {
  return (
    <div className="App">
    <center>
     <h1> Helloe React</h1>
     <Welcome/>
     <Greeting name ={"sunilkumar"} state={"TS"} dist={"ADB"}/>
      </center>
      
    </div>
  );
}

export default App;
