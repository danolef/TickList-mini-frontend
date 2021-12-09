import {useState} from 'react'

function ClimbItems ({climb, addToTickList}) {
    
    const [details, setDetails] = useState(false)

    function handleShowDetails() {
        setDetails(!details)
    }

    function handleAddToTickList(e) {
        let climbId = (e.target.value)
        let newTickListItem = {
            user_id:"",
            climb_id: climbId,
            completed: false,
            beta: ""
        }
        addToTickList(newTickListItem)
    }
    
    return (
      <div id="itemContainer">
       <div class= "item">
            <h3><strong>Name:</strong> {climb.name}</h3>
            {details ? <button onClick={handleShowDetails}>Hide Details</button> : <button onClick={handleShowDetails}>Show Details</button>}
            <button onClick={handleAddToTickList} value={climb.id}>Add to Tick List</button>
        </div> 
        <div>    
            {details ? <> <p><strong>Grade:</strong> {climb.grade}</p> 
            <p><strong>Type of climb:</strong> {climb.climb_type}</p>
            <p><strong>Location:</strong> {climb.location}</p>
            <p><strong>Mountain Project Link:</strong> {climb.mt_project_link}</p> </>
            : null}
        </div>
      </div> 
    )
}

export default ClimbItems