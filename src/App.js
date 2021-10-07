import NavBar from './NavBar';
import { useState} from "react"
import GodList from './GodList';
import GodDescription from './GodDescription';
import {Route, Switch} from "react-router-dom"
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
          <div className="welcome">  
            <WelcomePage></WelcomePage>
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;



