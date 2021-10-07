import styled from "styled-components"
import { useParams } from "react-router"
import NoGod from './404';
import Button from "./Button";

function GodDescription({featuredGod, setFeaturedGod, button, setButton}){
    const {category} = useParams()
        //landing pages for each category
        if (featuredGod.length ===0) {
            switch(category) {
            case "Olympian": 
                return <GodDiv>
                    <h2>Olympians #1</h2>
                </GodDiv>
                break;
            case "Chthonic": 
                return (<GodDiv>
                    <h2>Fuck the Olympians</h2>
                </GodDiv>)
                
                break;
            case "Other": 
                 return (<GodDiv>
                    <h3>I'm just tryna live</h3>
                </GodDiv>)
                
                break;
            default: 
                return (<NoGod></NoGod>)
    }}
    function favoriteButton(){
        fetch(`http://localhost:5000/${category}/${featuredGod.id}`,{
          method:'PATCH',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify({favorited: !featuredGod.favorited})
        })
        .then(res => res.json())
        .then((god)=>{
            setButton(god.favorited)
            setFeaturedGod(god)
        })
    }
    return (
        <GodDiv>
            <h2 style={nameBackground}>{featuredGod.name}</h2>
            <h3>{featuredGod.title}</h3>
            <img src={featuredGod.image} alt={featuredGod.name}/>
            <p>{featuredGod.description}</p>
            <Button button={button} favoriteButton={favoriteButton}/>
        </GodDiv>
       
    )}

export default GodDescription

const nameBackground = {"background":"linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)"}
const GodDiv = styled.div `
font-family: ubuntu;
& img {
    float: right;
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
