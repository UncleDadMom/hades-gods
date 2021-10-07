import styled from "styled-components"
import { useParams } from "react-router"
import NoGod from './404';
import Button from "./Button";
import ModalImage from "react-modal-image";


function GodDescription({featuredGod, setFeaturedGod, button, setButton}){
    const {category} = useParams()
        //landing pages for each category
        if (featuredGod.length ===0) {
            switch(category) {
            case "Olympian": 
                return <GodDiv>
                    <p>The Olympians are a group gods who ruled after the overthow of the Titans. All the Olympians are related in some way. They are named after their dwelling place Mount Olympus.
</p>
                </GodDiv>
                break;
            case "Chthonic": 
                return (<GodDiv>
                    <p>These deities or gods are related to the subterranean underworld, where souls of the dead go. They are also associated with sacrificial rituals, when the cults made offerings to the gods in or beneath the earth itself by throwing animals into the underground pit and pouring liquids into it.</p>
                </GodDiv>)
                
                break;
            case "Other": 
                 return (<GodDiv>
                    <p>You can't put these gods in a box!</p>
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
            <ModalImage small={featuredGod.image} large={featuredGod.image} alt={featuredGod.name}/>
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
