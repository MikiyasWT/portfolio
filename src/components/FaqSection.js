import styled from "styled-components";
import {About} from "../styles/style"
import Toggle from "./Toggle"
import {AnimateSharedLayout,motion} from "framer-motion"
import { scrollReveal } from "../animation";
import { useScrollHook } from "./useScroll";

const fade = {
   hidden:{opacity:0},
   show:{opacity:1,transition:{duration:1}},
   exit:{opacity:0,transition:{duration:1}}
}


const FaqSection = () => {
   const [element,controls] = useScrollHook()
    return(
       <Faq
       variants={scrollReveal}
       animate={controls} 
       initial="hiddens"
       ref={element}  >
         <h2>Any Questions? <span>FAQ</span></h2>

       <AnimateSharedLayout>  
         <Toggle title="How do i start?">  
         
              
            <motion.div variants={fade} initial="hidden" animate="show" exit="exit" className="answer">
                <p>Here's how you can start.</p>
                <p>
                 write down your specifications the services you wants me to build for you. 
                </p>

            </motion.div>
       </Toggle>  

       <Toggle title="How do i schedule a meeting?">
         
            
            
           <motion.div variants={fade} initial="hidden" animate="show" exit="exit" className="answer">
                <p>In the contact me section on top</p>
                <p>
                there are links to my accounts and you can choose one of those,you can schedule a meting with me in advance or we can schedule a quick intro video or phone call.
                </p>

            </motion.div>
      </Toggle>   

      <Toggle title="Is it afforadable?">  
         
      
            <motion.div variants={fade} initial="hidden" animate="show" exit="exit" className="answer">
                <p>absolutely affordable and fair price.</p>
                <p>
                I offer my services almost for free, I am sure you will assk to tip more once you see your project done. also i accept different payment methods
                </p>

            </motion.div>
     </Toggle>   

     <Toggle title="what services do you offer?">   
         
            
              <motion.div variants={fade} initial="hidden" animate="show" exit="exit" className="answer">
                <p>FullStack web development services</p>
                <p>
                I am offering a FullStack web development service ranging from landing pages to sophisticated web applications. 
                </p>

            </motion.div>
      </Toggle> 
      </AnimateSharedLayout>   
       </Faq>
    )
}

export default FaqSection;


const Faq = styled(About)`
 display:block;
 span {
    display:block;
 }

 h2 {
    padding-bottom:2rem;
    font-weight:lighter;
    s
 }

 @media (max-width:1500px){
   h2{
      font-size:3rem;
   }
 }

 .faq-line {
    background:#cccccc;
    height:0.2rem;
    margin:2rem 0rem;
    width:100%;
 }

 .answer {
    padding:2rem 0rem;
    p {
        padding:1rem 0rem;
    }
 }
`;