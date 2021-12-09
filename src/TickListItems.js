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
       <div>
            <p>Name: {item.climb.name}</p>
            {details ? <div> <p>Grade: {item.climb.grade}</p> 
            <p>Type of climb: {item.climb.climb_type}</p>
            <p>Location: {item.climb.location}</p>
            <p>Mountain Project Link: {item.climb.mt_project_link}</p> 
            <p>My Beta: {item.beta}</p>
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