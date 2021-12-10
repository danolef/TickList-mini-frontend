import './App.css';
import TickListContainer from "./TickListContainer"
import ClimbContainer from "./ClimbContainer"
import {useState} from "react"
import { Switch, Route, NavLink } from 'react-router-dom';
// import NavBar from 'NavBar'
import Home from "./Home"

function App() {
  
  const [allTickList, setAllTickList]= useState([])

  return (
    <div className="App">
      {/* <h1>Tick List</h1> */}
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/tickList">
          <TickListContainer allTickList={allTickList} setAllTickList={setAllTickList}/>
        </Route>
        <Route exact path="/climbs">
          <ClimbContainer allTickList={allTickList} setAllTickList={setAllTickList}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
