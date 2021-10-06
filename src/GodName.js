import styled from "styled-components"

function GodName({god, describedGod}){
    return (
        <GodNameItems onClick={()=>describedGod(god)}>
            {god.name}
        </GodNameItems>

    )
}
export default GodName
const GodNameItems = styled.li `
    font-family: ubuntu;
    list-style-type: none;
    border-style: solid;
    border-width: 1px;
    border-radius: 20px;
    margin: 10px;
    padding: 10px;

  
`