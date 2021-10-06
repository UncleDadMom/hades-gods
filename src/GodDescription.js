import styled from "styled-components"
import { useParams } from "react-router"
import { useState } from "react"

function GodDescription({featuredGod}){
    const {category} = useParams()
    const [buttonLiked, setButtonLiked] = useState(false)
    function FavoriteButton(){
        fetch(`http://localhost:5000/${category}/${featuredGod.id}`,{
          method:'PATCH',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify({favorited: !featuredGod.favorited})
        })
        .then(res => res.json())
        .then(()=>setButtonLiked(!buttonLiked))
    
        }
    if (featuredGod.length === 0) {
        console.log("empty array")
        switch(category) {
            case "Olympian": 
                return (<div className="div3">
                    <p>Olympians #1</p>
                </div>)
                break;
            case "Chthonic": 
                return (<div className="div3">
                    <p>Fuck the Olympians</p>
                </div>)
                
                break;
            case "Other": 
                 return (<div className="div3">
                    <p>I'm just tryna live</p>
                </div>)
                
                break;
    }}
    return (
        <GodDiv>
            <h2>{featuredGod.name}</h2>
            <h3>{featuredGod.title}</h3>
            <img src={featuredGod.image} alt={featuredGod.name}/>
            <p>{featuredGod.description}</p>
            <button onClick={FavoriteButton}>{buttonLiked?"♥️":"♡"}</button>
        </GodDiv>
       
    )}

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
