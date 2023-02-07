import styled from "styled-components";
import {Link,BrowserRouter as Router} from "react-router-dom"

const Nav = () => {

    return(
        <NavBar>
            
            <Link to="/" id="logo">Capture</Link>

            <ul>
                
                <li>
                  <Link to="/">1. About Me</Link>
                </li>
                
                <li>
                  <Link to="/work">2. My Works</Link>
                </li>
                
                <li>
                   <Link to="/contact">3. Contact Me</Link>
                </li>
            </ul>
        
        </NavBar>
    )
}


export default Nav;

const NavBar  = styled.nav`
min-height:10vh;
background-color:#222222;
display:flex;
justify-content:space-between;
align-items:center;
padding:1rem 10rem;

a{
    text-decoration:none;
    color:white;
    
}

#logo {
    font-size:1.5rem;
    font-family:"Lobster",cursive;
    font-weight:lighter;
}
ul {
    display:flex;
    list-style:none;
}

li {
    padding-left:5rem;
    position:relative;

    
}
`;