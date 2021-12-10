import {useState} from 'react'

function TickListItems ({item, handleDelete, updateBeta}) {
  const [details, setDetails] = useState(false)
  const [beta, setBeta] = useState(false)
  const [formData, setFormData] = useState({
    beta:""
  })

    function handleShowDetails() {
        setDetails(!details)
    }

    function handleShowBeta() {
      setBeta(!beta)
    }

    function handleChange(e) {
      setFormData({...formData, [e.target.name]:e.target.value})
  }
    
  function handleSubmit (e, item) {
    e.preventDefault()
    const tickItem= item
    updateBeta(formData, tickItem)
    setFormData({beta: "",
    })
}

    return (
       <div id="tickListItem">
            <h4><strong>Name</strong>: {item.climb.name}</h4>
            {details ? <div> <p><strong>Grade</strong>: {item.climb.grade}</p> 
            <p><strong>Type of climb</strong>: {item.climb.climb_type}</p>
            <p><strong>Location</strong>: {item.climb.location}</p>
            <p><strong>Mountain Project Link</strong>: {item.climb.mt_project_link}</p> 
            <p><strong>My Beta</strong>: {item.beta}</p>
            </div>: null}
            {beta ?               
                <form onSubmit={(e)=> handleSubmit(e, item)}>
                  <input onChange= {handleChange} type="text" name="beta" value={formData.beta} id="betaBox" placeholder="AddBeta"/>
                  <input type="submit" value="Submit"/>
                </form> : null
              
            }
            {details ? <button onClick={handleShowDetails}>Hide Details</button> : <button onClick={handleShowDetails}>Show Details</button>}
            <button onClick= {() => handleDelete(item.id)}>Delete</button>
            {beta ? <button onClick= {handleShowBeta}>Hide Beta Note</button> : <button onClick= {handleShowBeta}>Add Beta Notes</button>}
       </div> 
    )
}
export default TickListItems