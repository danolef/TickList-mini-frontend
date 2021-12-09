import {useState} from 'react'

function AddClimb ({postClimb}) {
    
    const[formData, setFormData] = useState({
        name: "",
        grade: "",
        climb_type: "",
        location: "",
        mt_project_link: ""
    })
    
    function handleChange(e) {
        setFormData({...formData, [e.target.name]:e.target.value})
    }

    function handleSubmit (e) {
        e.preventDefault()
        postClimb(formData)
        setFormData({name: "",
        grade: "",
        climb_type: "",
        location: "",
        mt_project_link: ""
        })
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type= "text" name="name" value={formData.name} placeholder="name" onChange= {handleChange}/>
                <input type= "text" name="grade" value={formData.grade} placeholder="grade" onChange= {handleChange}/>
                <input type= "text" name="climb_type" value={formData.climb_type} placeholder="climb type" onChange= {handleChange}/>
                <input type= "text" name="location" value={formData.location} placeholder="location" onChange= {handleChange}/>
                <input type= "text" name="mt_project_link" value={formData.mt_project_link} placeholder="Mt Project Link" onChange= {handleChange}/>
                <input type= "submit" value="Submit"/>
            </form>
        </div>
        
    )
}

export default AddClimb