import {motion} from "framer-motion"
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import {animation,titleAnim,containerAnim} from "../animation"


const ContactMe = () => {
     const navigate=  useNavigate()
    return(
        <ContactStyle
        variants={animation}
        initial="hidden"
        animate="show"
        exit="exit"
        style={{background:"#fff"}}
        >
        

        <Title>
            <Hide>
            <motion.h2 variants={titleAnim}>Contact me</motion.h2>
            </Hide>
        </Title>
        <motion.div variants={containerAnim} initial="hidden" animate="show">
            <Social variants={titleAnim}>
                <Circle/>
                <h4>LinkedIn</h4>
            </Social>

            <Social variants={titleAnim}>
                <Circle/>
                <h4>Email</h4>
            </Social>

            <Social variants={titleAnim}>
                <Circle/>
                <h4 onClick={()=>navigate('https://t.me/Tewelde27')}>Telegram</h4>
            </Social>
           
            <Social variants={titleAnim}>
                <Circle/>
                <h4>Whatsapp</h4>
            </Social>
        </motion.div>
       </ContactStyle>
    )
}


export default ContactMe;

const ContactStyle = styled(motion.div)`
padding:5rem 10rem;
color:#353535;
min-height:90vh;

@media (max-width:1500px){
    padding:2rem;
    font-size:1rem;
}
`;

const Title = styled.div`
margin-bottom:2rem;
color:black;
`;


const Hide = styled.div`
overflow:hidden;
`;

const Circle = styled.div`
border-radius:50%;
height:3rem;
width:3rem;
background:#353535;
`;

const Social = styled(motion.div)`
display:flex;
align-items:center;
h4 {
    margin:1rem;
}
`;
