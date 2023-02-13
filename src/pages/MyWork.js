import styled from "styled-components"
import {Link} from 'react-router-dom'
import athlete from '../img/athlete-small.png'
import theracer from '../img/theracer-small.png'
import goodtimes from '../img/goodtimes-small.png'
import {motion} from "framer-motion"
import {animation,imageAnim,lineAnim, scrollReveal} from "../animation"
import { useScrollHook } from "../components/useScroll"
import { ScrollToTop } from "../components/ScrollToTop"




const MyWork= () => {
  const [element,controls] = useScrollHook()
  const [element2,controls2] = useScrollHook()
  
    return(
    <Work
    variants={animation}
    initial="hidden"
    animate="show"
    exit="exit"
    >
      <ScrollToTop />
 
       <Movie>
         <h2>The Racer</h2>
         <motion.div variants={lineAnim}  className="line"></motion.div>
         <Link to="/work/the-racer">
          <Hide>
            <motion.img variants={imageAnim} src={theracer} alt="racer" />
          </Hide>
         </Link>
       </Movie>

       <Movie
       variants={scrollReveal}
       animate={controls} 
       initial="hidden"
       ref={element}
       >
         <h2>Athlete</h2>
         <motion.div variants={lineAnim} className="line"></motion.div>
         <Link to="/work/the-athlete">
          <Hide>
           <motion.img variants={imageAnim} src={athlete} alt="athlete" />
           </Hide>
         </Link>
       </Movie>

       <Movie
       variants={scrollReveal}
       animate={controls2} 
       initial="hidden"
       ref={element2}
       >
         <h2>goodtimes</h2>
         <motion.div variants={lineAnim} className="line"></motion.div>
         <Link to="/work/good-times">
          <Hide>
           <motion.img variants={imageAnim} src={goodtimes} alt="good times" />
          </Hide>
         </Link>
       </Movie>
      </Work> 
    )
}


export default MyWork;

const Work = styled(motion.div)`
min-height:100vh;
overflow:hidden;
padding:1rem 10rem;

h2{
  padding:1rem 2rem;
  color:white;
}

@media (max-width:1500px){
  padding:1rem 1rem;
 
}
`;

const Movie = styled(motion.div)`
padding-bottom:10rem;
.line {
  height:0.5rem;
  background:#23d997;
  margin-bottom:3rem;
}

img {
  width:100%;
  height:70vh;
  object-fit:cover;
}
`;

const Hide = styled.div`
overflow:hidden;
`;


