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
            <NavLink to="/Other">Other</NavLink>
        </Nav>    
    )
}

export default NavBar 
const Nav = styled.ul `
margin: 0;
height: 10px;
& li {
    display: inline;
    margin: 10px;
    padding: 25px;
}
`
