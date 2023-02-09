import styled from "styled-components"
import {Link} from 'react-router-dom'
import athlete from '../img/athlete-small.png'
import theracer from '../img/theracer-small.png'
import goodtimes from '../img/goodtimes-small.png'



const MyWork= () => {

    return(
    <Work>
       <Movie>
         <h2>The Racer</h2>
         <div className="line"></div>
         <Link to="/">
           <img src={theracer} alt="racer" />
         </Link>
       </Movie>

       <Movie>
         <h2>Athlete</h2>
         <div className="line"></div>
         <Link to="/">
           <img src={athlete} alt="athlete" />
         </Link>
       </Movie>

       <Movie>
         <h2>goodtimes</h2>
         <div className="line"></div>
         <Link to="/">
           <img src={goodtimes} alt="good times" />
         </Link>
       </Movie>
      </Work> 
    )
}


export default MyWork;

const Work = styled.div`
min-height:100vh;
overflow:hidden;
padding:5rem 10rem;

h2{
  padding:1rem 2rem;
}
`;

const Movie = styled.div`
padding-bottom:10rem;
.line {
  height:0.5rem;
  background:#cccccc;
  margin-bottom:3rem;
}

img {
  width:100%;
  height:70vh;
  object-fit:cover;
}
`;