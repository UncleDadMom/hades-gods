import styled from "styled-components"
import GodName from "./GodName"
function GodList({godCategory, describedGod}){
    return (
        <List>
           {godCategory.map(god=> <GodName describedGod={describedGod} god={god} key={god.id} />)} 
        </List>
    )
}

export default GodList
const List = styled.div `
//    { grid-area: 1 / 1 / 2 / 6; }
`