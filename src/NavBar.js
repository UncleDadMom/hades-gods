import {NavLink} from "react-router-dom"
import styled from "styled-components"

function NavBar(){
    return (
        <Nav>
            <li>
            <NavLink exact to="/">Home</NavLink>
            </li>
            <li>
            <NavLink to="/Olympian">Olympian</NavLink>
            </li>
            <li>
            <NavLink to="/Chthonic">Chthonic</NavLink>
            </li>
            <li><NavLink to="/Other">Other</NavLink></li>
        </Nav>    
    )
}

export default NavBar 
const Nav = styled.ul `
margin: 10px;
height: 10px;
& li {
    display: inline;
    margin: 25px;
    padding: 25px;
    background-color:white;
    & a {
        color: black;
        text-decoration: none;
    }
}
`
