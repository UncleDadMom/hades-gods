import GodName from "./GodName"
import { useParams } from "react-router"
import { useState, useEffect } from "react"
import styled from "styled-components"


function GodList({ setFeaturedGod, setButtonLiked}){

    const baseURL = "http://localhost:5000/"
    const [godCategory, setGodCategory] = useState([])
    const {category} = useParams()
    const [favesOnly, setFavesOnly] = useState()


    
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

    
    
        const fave = godCategory.filter(god => god.favorited === true)
        const unfave = godCategory.filter(god => god.favorited === false)
        console.log(fave)
        console.log(unfave)

        function showFaves (e) {
            console.log(e)
            setFavesOnly(!favesOnly)

        }
            





    return (
        <div className="div2">
     
     {favesOnly ? fave.map(god=> <GodName setButtonLiked={setButtonLiked} setFeaturedGod={setFeaturedGod}  god={god} key={god.id}/>) : godCategory.map(god=> <GodName setButtonLiked={setButtonLiked} setFeaturedGod={setFeaturedGod}  god={god} key={god.id}/>)}
        
        <FavesOnly onClick={showFaves}>show/hides faves</FavesOnly>



        </div>
    )

}

export default GodList

const FavesOnly = styled.button `
border: none;
width: 150px;
padding: 15px;
text-align: left;
text-decoration: none;
font-size: 16px;
& div {
    float: left
}
`

