import './App.css';
import TickListContainer from "./TickListContainer"
import ClimbContainer from "./ClimbContainer"
import {useState} from "react"

function App() {
  
  const [allTickList, setAllTickList]= useState([])

  return (
    <div className="App">
      <h1>Tick List</h1>
      <TickListContainer allTickList={allTickList} setAllTickList={setAllTickList}/>
      <ClimbContainer allTickList={allTickList} setAllTickList={setAllTickList}/>
    </div>
  );
}

export default App;
