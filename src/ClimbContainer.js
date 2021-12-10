
import AddClimb from "./AddClimb"
import ClimbFilter from "./ClimbFilter"
import ClimbItems from "./ClimbItems"
import {useState, useEffect} from "react"
import NavBar from './NavBar'

function ClimbContainer ({allTickList, setAllTickList}) {
    
    const [allClimbs, setAllClimbs] = useState([])
    
    useEffect(() => {
        fetch("http://localhost:9292/climbs")
        .then(res => res.json())
        .then(setAllClimbs)
    }, [])

    function postClimb(climbObj) {
            fetch("http://localhost:9292/climbs", {
            method: "POST",
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(climbObj)
        })
        .then(res => res.json())
        .then(newClimb => {
            setAllClimbs([newClimb, ...allClimbs])
        })
    }

    function addToTickList (tickListObj) {
        fetch("http://localhost:9292/ticklist", {
            method: "POST",
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(tickListObj)
        })
        .then(res => res.json())
        .then(newTickList => {
            setAllTickList([newTickList, ...allTickList])
        })
        
    }

    
    const climb = allClimbs.map ((climb) => <ClimbItems climb={climb} key={climb.id} addToTickList= {addToTickList}/>)
    
    return (
       <div id= "climbCont"> 
        <h3>Climbs</h3>
        <NavBar />
        <AddClimb postClimb={postClimb}/>
        <ClimbFilter/>
        {climb}
       </div>
    )
}

export default ClimbContainer