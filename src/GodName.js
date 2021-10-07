import { useParams } from "react-router"
import styled from "styled-components"

function GodName({god, setFeaturedGod, setButtonLiked}){
    const {category}=useParams()
    function describedGod(god){
        fetch(`http://localhost:5000/${category}/${god.id}`)
        .then(r=>r.json())
        .then((god)=>{
            setFeaturedGod(god)
            setButtonLiked(god.favorited)
        })
        
    }
    return (
        <GodNameItems onClick={()=>describedGod(god)}>
            {god.name}
        </GodNameItems>
    //click on god name, need to re-render button component
    )
}
export default GodName
const GodNameItems = styled.li `
    font-family: ubuntu;
    list-style-type: none;You 
    border-style: solid;
    border-width: 1px;
    border-radius: 20px;
    margin: 10px;
    padding: 10px;
    &:hover {
        background: #D3D3D3;
    }
    

  
`