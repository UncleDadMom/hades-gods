import GodName from "./GodName"
import { useParams } from "react-router"
import { useState, useEffect } from "react"


function GodList({ describedGod}){
    const baseURL = "http://localhost:5000/"
    const [godCategory, setGodCategory] = useState([])
    const {category} = useParams()
    
    useEffect(()=> {
        switch(category) {
        case "Olympian": 
            fetch(baseURL+category)
            .then(r=>r.json())
            .then(gods=>setGodCategory(gods))
        case "Chthonic": 
            fetch(baseURL+category)
            .then(r=>r.json())
            .then(gods=>setGodCategory(gods))
        case "Other": 
            fetch(baseURL+category)
            .then(r=>r.json())
            .then(gods=>setGodCategory(gods))
        default:
            console.log("default godList")
        }},[category])

    
    return (
        <div className="div2">
           {godCategory.map(god=> <GodName describedGod={describedGod} god={god} key={god.id} />)} 
        </div>
    )
}

export default GodList
