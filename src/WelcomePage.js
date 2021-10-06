import styled from "styled-components"

function WelcomePage(){
    return (
        <GodDiv>
            <p>Welcome</p>
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