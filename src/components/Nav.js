import styled from "styled-components";
import {Link,BrowserRouter as Router} from "react-router-dom"
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Nav = () => {
    const {pathname} = useLocation();
    return(
        <NavBar>
            
            <Link to="/" id="logo">momona</Link>
         
                    
                
            <ul>
                
                <li>
                  <Link to="/">About Me</Link>
                  <Line
                  transition={{duration:0.75}}
                  initial={{width:'0%'}}
                  animate={{width:pathname === '/' ? '50%' :'0%'}}
                  />
                </li>
                
                <li>
                  <Link to="/work">My Works</Link>
                  <Line
                  transition={{duration:0.75}}
                  initial={{width:'0%'}}
                  animate={{width:pathname === '/work' ? '50%' :'0%'}}
                  />
                </li>
                
                <li>
                   <Link to="/contact">Contact Me</Link>
                   <Line
                  transition={{duration:0.75}}
                  initial={{width:'0%'}}
                  animate={{width:pathname === '/contact' ? '50%' :'0%'}}
                  />
                </li>
            </ul>
        
        </NavBar>
    )
}


export default Nav;

const NavBar  = styled.nav`
position:sticky;
z-index:10;
top:0;
min-height:10vh;
width:100%;
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
    font-size:2rem;
    font-family: 'Lobster', cursive;
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

@media (max-width:1300px) {
flex-direction:column;
padding:2rem 0rem;


ul {
    padding:1rem 5rem 0rem 0rem; 
    justify-content:space-around;
    width:100%;
}

#logo {
    padding-left:22rem;
}
}
`;


const Line = styled(motion.div)`
height:0.3rem;
background:#23d997;
width:0;
position:absolute;
bottom:-70%;
left:55%;
`;