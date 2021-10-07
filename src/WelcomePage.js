import styled from "styled-components"

function WelcomePage(){
    return (
        <GodDiv>
            <h1>Hello, Underworld!</h1>
            <h3> Welcome to our attempt at replicating the codex from the 2021 game of the year, Hades</h3>
            <img src="https://images.squarespace-cdn.com/content/v1/5a67750480bd5e2d33afa823/1605028418107-5AOZ2LSLWBJC460UFIDB/20201110120156_1.jpg" alt="The actual codex in the game"/>
        </GodDiv>
    )
}
export default WelcomePage

const GodDiv = styled.div `
font-family: ubuntu;
& img {
    float: left; 
    margin: 20px;
    width: 100%;
    box-shadow: 10px 10px 5px grey;
}
  h2 {
      font-size: 50px;
  }  
  h3 {
    font-size: 25px;
}  
p {
    font-size: 20px;
}  

`