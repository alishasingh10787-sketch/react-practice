
import './App.css';
import AppInteral from './pp.js';
import Exporting , {Username} from './com.js';
import Skill from './skill.js';
import { useState, useEffect } from "react";



function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(0);
  function callonce() {
    console.log("call once");
  }
  function counterfunction() {
    console.log("counter function");
  }


  useEffect(() => {
    counterfunction() 
    callonce();
    
  },[count,data]);
  let dataObject = {
    name: "John",
    age: 30,
    city: "New York"
  }
  return (
    <div >
        {/* <h1 styles={{ color: 'blue' }}> useEffect && useState</h1>
      <button onClick={() => setCount(count + 1)}> Count: {count} </button><br></br>
      <button onClick={() => setData(data + 1)}>data:{data}</button> */}
    
     <AppInteral />
     <Exporting />
     <Username  name={dataObject.name} age={dataObject.age} city={dataObject.city} />
     <Skill />
    </div>
  );
}

export default App;
