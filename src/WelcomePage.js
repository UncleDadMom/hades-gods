import styled from "styled-components"

function WelcomePage(){
    return (
        <GodDiv>
            <h1>Hello, Underworld!</h1>
            <p> Welcome to our attempt at replicating the codex from Hades, the best video game of 2021 </p>
            <img src="https://static.wikia.nocookie.net/hades_gamepedia_en/images/2/23/CodexScreen.png" alt="The actual codex in the game"/>
        </GodDiv>
    )
}
export default WelcomePage

const GodDiv = styled.div `
font-family: ubuntu;
& img {
    float: left; 
    margin: 20px;
    box-shadow: 10px 10px 5px grey;
}
  h2 {
      font-size: 60px;
  }  
  h3 {
    font-size: 30px;
}  
p {
    font-size: 20px;
}  

`