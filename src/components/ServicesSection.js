import clock from "../img/clock.svg"
import teamwork from "../img/teamwork.svg"
import money from "../img/money.svg"
import diaphragm from "../img/diaphragm.svg"
import home2 from "../img/home2.png"
import { About,Description,Image,Hide } from "../styles/style";
import styled from "styled-components"
import {useScroll,useScrollHook} from "./useScroll"
import {scrollReveal} from "../animation"
import { useEffect } from "react"
import { useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"


const ServicesSection = () => {
  // const controls = useAnimation()
  // const [element,view] = useInView({threshold:0.5})


  // useEffect(()=>{
  //   if(view){
  //     controls.start("show")
  // }
  // else{
  //     controls.start("hidden")
  // }

  // },[element,view])


  const [element,controls] = useScrollHook()
    
    return (
        <Services 
             variants={scrollReveal}
             animate={controls} 
             initial="hiddens"
             ref={element}  >
          <Description>
            <h2>High <span>quality</span> services</h2>
            
            <Cards>

             <Card>
               <div className="icon">
                  <img src={clock} alt="clock icon"/>
                  <h3>Efficient</h3>
                </div>
                <p>lorem ipsum  dolor sit amet</p>
             </Card>

             <Card>
               <div className="icon">
                  <img src={teamwork} alt="teamwork icon"/>
                  <h3>Teamwork</h3>
                </div>
                <p>lorem ipsum  dolor sit amet</p>
             </Card>

             <Card>
               <div className="icon">
                  <img src={diaphragm} alt="diaphragm icon"/>
                  <h3>Automation </h3>
                </div>
                <p>lorem ipsum  dolor sit amet</p>
             </Card>

             <Card>
               <div className="icon">
                  <img src={money} alt="money icon"/>
                  <h3>Affordable</h3>
                </div>
                <p>lorem ipsum  dolor sit amet</p>
             </Card>             
            </Cards>

          </Description>

          <Image>
            <img src={home2} alt="" />
          </Image>
          </Services>

        
    )
}

export default ServicesSection;


const Services = styled(About)`
h2 {
  padding-bottom:5rem;
}

p {
  width:70%;
  padding:2rem 0rem 4rem 0rem;
}


`;

const Cards = styled.div`
display:flex;
flex-wrap:wrap;

@media (max-width:1300px) {
  justify-content:center;
  }
`;

const Card = styled.div`
flex-basis:18rem;

.icon {
  display:flex;
  align-items:center;
  h3 {
    margin-left:1rem;
    background:white;
    color:black;
    padding:1rem;
  }
}
`;