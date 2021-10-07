import NavBar from './NavBar';
import { useState} from "react"
import GodList from './GodList';
import GodDescription from './GodDescription';
import {Route, Switch} from "react-router-dom"
import styled from "styled-components"
import WelcomePage from "./WelcomePage"

function App() {
  const [featuredGod, setFeaturedGod] = useState([])
  const [buttonLiked, setButtonLiked] = useState([])

  return (
    <div className="parent">
      <div className="top"> 
        <NavBar setFeaturedGod={setFeaturedGod}/>
      </div>
      <Switch>
        <Route path="/:category">
          <div className="list"> 
            <GodList setButtonLiked={setButtonLiked} setFeaturedGod={setFeaturedGod}></GodList>
          </div>
          <div className="featured">  
            <GodDescription button={buttonLiked} setButton={setButtonLiked} setFeaturedGod={setFeaturedGod} featuredGod={featuredGod}></GodDescription>
          </div>
        </Route>
        <Route path="/">
          <div className="featured">  
            <WelcomePage></WelcomePage>
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
const Parent = styled.div `
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  
  .top { grid-area: 1 / 1 / 2 / 6;
  background-color: grey; 
  font-family: ubuntu;
  margin: 5px;
  padding-bottom: 20px;
  padding-top: 20px;
  height: 40px;
  }
  .div2 { grid-area: 2 / 1 / 6 / 2; 
  height: 60px}
   
  .div3 { grid-area: 2 / 2 / 5 / 6; 
  height: 60px}
`



