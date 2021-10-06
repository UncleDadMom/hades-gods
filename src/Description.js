import styled from "styled-components"

function GodDescription({featuredGod}){
    return (
        <GodDiv>
            <h2>{featuredGod.name}</h2>
            <h3>{featuredGod.title}</h3>
            <img src={featuredGod.image} alt={featuredGod.name}/>
            <p>{featuredGod.description}</p>
            <p><button>♥️</button></p>
        </GodDiv>
       
    )
}
export default GodDescription


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
