import GodName from "./GodName"
import { useParams } from "react-router"
import { useState, useEffect } from "react"


function GodList({ setFeaturedGod, setButtonLiked}){
    const baseURL = "http://localhost:5000/"
    const [godCategory, setGodCategory] = useState([])
    const {category} = useParams()
    
    useEffect(()=> {
        switch(category) {
        case "Olympian": 
            fetch(baseURL+category)
            .then(r=>r.json())
            .then(gods=>setGodCategory(gods))
            break;
        case "Chthonic": 
            fetch(baseURL+category)
            .then(r=>r.json())
            .then(gods=>setGodCategory(gods))
            break;
        case "Other": 
            fetch(baseURL+category)
            .then(r=>r.json())
            .then(gods=>setGodCategory(gods))
            break;
        default: 
            console.log("default GodList")
        }},[category])

    
    return (
        <div className="div2">
           {godCategory.map(god=> <GodName setButtonLiked={setButtonLiked} setFeaturedGod={setFeaturedGod}  god={god} key={god.id} />)} 
        </div>
    )
}

export default GodList
