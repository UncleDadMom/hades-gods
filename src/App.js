import titlePhoto from "./CodexOfTheUnderworld.png"
import NavBar from './NavBar';
import { useState, useEffect } from "react"
import GodList from './GodList';
import NoGod from './404';
import GodDescription from './Description';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import styled from "styled-components"

function App() {
  const [featuredGod, setFeaturedGod] = useState([])

  function describedGod(god){
    setFeaturedGod(god)
  }


  return (
 <BrowserRouter>

  <img src={titlePhoto} width="100%"/>
  <Parent>
    <div className="top"> 
    <NavBar />
    </div>

    <div className="div2"> 
    <Switch>
      <Route path="/:category">
      <GodList describedGod={describedGod}></GodList>
      </Route>
    </Switch>
    </div>



<div className="div3">  
  <Switch>
        <Route>
          <GodDescription featuredGod={featuredGod}></GodDescription>
        </Route>
        <Route path="*">
          <NoGod></NoGod>
        </Route>
  </Switch></div>
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
  .div2 { grid-area: 2 / 1 / 6 / 2; }
  .div3 { grid-area: 2 / 2 / 5 / 6; }
`



