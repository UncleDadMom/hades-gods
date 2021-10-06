import styled from "styled-components"
import GodName from "./GodName"
import { useParams } from "react-router"
import { useState, useEffect } from "react"

function GodList({ describedGod}){
    const baseURL = "http://localhost:5000/"
    const [godCategory, setGodCategory] = useState([])
    const {category} = useParams()
    console.log(category)
    useEffect(()=>{
        fetch(baseURL+category)
        .then(r=>r.json())
        .then(gods=>setGodCategory(gods))
      },[category])

    if (godCategory === []) return <List>Loading...</List>
    
    return (
        <div>
           {godCategory.map(god=> <GodName describedGod={describedGod} god={god} key={god.id} />)} 
        </div>
    )
}

export default GodList
const List = styled.div `

   grid-area: 2 / 1 / 6 / 2;
`