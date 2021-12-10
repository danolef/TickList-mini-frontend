import TickListFilter from "./TickListFilter"
import TickListItems from "./TickListItems"
import {useEffect} from 'react'
import NavBar from './NavBar'

function TickListContainer ({allTickList, setAllTickList}) {
    
    // const [allTickList, setAllTickList]= useState([])

    useEffect(() => {
        fetch("http://localhost:9292/ticklist")
        .then(res => res.json())
        .then(setAllTickList)
    }, [])

    function handleDelete(id) {
        fetch(`http://localhost:9292/ticklist/${id}`, {
            method: "DELETE",
            headers:{'Content-Type' : 'application/json'}
        })
        .then(res => res.json())
        .then(data => {
            setAllTickList(allTickList.filter(p => p.id !== id))
        })
    }   

    function updateBeta (betaObj, item) {
        const betaInfo= betaObj.beta
        fetch(`http://localhost:9292/ticklist/${item.id}`, {
            method: "PATCH",
            headers:{'Content-Type' : 'application/json'},
            body: JSON.stringify({...item, beta:betaInfo})
        })
        .then(res => res.json())
        .then(data => {
            setAllTickList(allTickList.map(p => {
                if(p.id === data.id){
                    return data
                } else {
                    return p
                }
            }))
        })
    }


    const tickList= allTickList.map ((item) => <TickListItems handleDelete= {handleDelete} updateBeta={updateBeta} item={item} key={item.id}/>)

    return (
       <div id="tickListCont"> 
        <h3>My Projects</h3>
        <NavBar/>
        <TickListFilter/>
        {tickList}
       </div>
    )

}
export default TickListContainer