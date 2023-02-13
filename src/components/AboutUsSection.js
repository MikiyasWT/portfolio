import home1 from "../img/home1.png"
import {About,Description,Hide,Image} from "../styles/style"
import {motion} from "framer-motion"
import Wave from "./Wave"
import { scrollReveal } from "../animation"
import { ScrollToTop } from "./ScrollToTop"
import { useLocation,useNavigate } from "react-router-dom"

const AboutUsSection = () => {

    const navigate = useNavigate()

    const titleAnim =  {
        hidden:{opacity:0},
        show:{opacity:1,transition:{duration:5}}
    }

    const containerAnim ={
        hidden:{opacity:0},
        show:{opacity:1,transition:{duration:2,ease:'easeOut',staggerChildren:1}}
    }

    const imageAnim  = {
        hidden:{x:300,scale:1.5,opacity:0},
        show:{
            x:0,
            scale:1,
            opacity:1,
            transition:{
                ease:'easeOut',
                duration:3}
            }
    }


    const fade = {
        hidden:{opacity:0},
        show:{opacity:1,transition:{duration:5}}
    }

 

    return(
        
        <About>
            <ScrollToTop />
           <Description>
            <motion.div variants={containerAnim} initial="hidden" animate="show" className="title">
               <Hide>
                    <motion.h2 variants={titleAnim} ><span>#Opentowork</span></motion.h2>
                </Hide>
                <Hide>
                    <motion.h2 variants={titleAnim} >I work to make</motion.h2>
                </Hide>
                <Hide>
                    <motion.h2 variants={titleAnim}>your <span>dreams</span> come</motion.h2>
                </Hide>
                <Hide>
                    <motion.h2 variants={titleAnim}>true</motion.h2>
                </Hide>
            </motion.div>
             <motion.p variants={scrollReveal} >Contact me, I am stuffed with realworld industry expertise & level skills capable of getting your project up and running real fast.<span>#Opentowork</span></motion.p>
             <motion.button 
                  variants={scrollReveal} 
                  initial="hidden" 
                  animate="show" onClick={()=>navigate('/contact')}
            >
                Contact Me</motion.button>           
          </Description>

        <Image>
          <motion.img variants={imageAnim} initial="hidden" animate="show" src={home1} alt="a guy with camera" />
        </Image>
        <Wave />
      </About>
    )
}


export default AboutUsSection;


