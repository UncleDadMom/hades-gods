import { useState } from "react"
import styled from "styled-components"
export default function Button({button, favoriteButton}){
    
        return (
    <FaveButton onClick={favoriteButton}>
        {button?"❤️ favorited":"🤍 make a fave"}
    </FaveButton>)
}

const FaveButton = styled.button `
background: linear-gradient(to top, #BF953F, #FCF6BA, #AA771C);
border: none;
width: 200px;
padding: 15px;
text-align: center;
text-decoration: none;
font-size: 16px;
border-radius: 10px;
`
