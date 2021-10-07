import titlePhoto from "./CodexOfTheUnderworld.png"
import NavBar from './NavBar';
import { useState} from "react"
import GodList from './GodList';

import GodDescription from './GodDescription';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import styled from "styled-components"
import WelcomePage from "./WelcomePage"

function App() {
  const [featuredGod, setFeaturedGod] = useState([])
  const [buttonLiked, setButtonLiked] = useState([])


  return (
 <BrowserRouter>

  <img src={titlePhoto} width="100%" alt="codex"/>
  <Parent>
    <div className="top"> 
     <NavBar setFeaturedGod={setFeaturedGod}/>
    </div>

    <Switch>
      <Route path="/:category">
    <div className="div2"> 
      <GodList setButtonLiked={setButtonLiked} setFeaturedGod={setFeaturedGod}></GodList>
    </div>
    <div className="div3">  
      <GodDescription button={buttonLiked} setButton={setButtonLiked} setFeaturedGod={setFeaturedGod} featuredGod={featuredGod}></GodDescription>
    </div>
      </Route>

      <Route path="/">
      <div className="div3">  
        <WelcomePage></WelcomePage>
      </div>
      </Route>
    </Switch>

          
</Parent>

    </BrowserRouter>
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



