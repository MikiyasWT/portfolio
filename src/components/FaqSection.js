import styled from "styled-components";
import {About} from "../styles/style"

const FaqSection = () => {

    return(
       <Faq>
         <h2>Any Questions? <span>FAQ</span></h2>
         
         <div className="question">
            <h4>How do i start?</h4>
            <div className="answer">
                <p>Lorem ipsum dolor sit amet.</p>
                <p>
                Lorem ipsum dolor sit amet consecterur adisplicn necesstatibiys neques 
                </p>

            </div>
            <div className="faq-line "></div>
         </div>

         <div className="question">
            <h4>Daily schedule?</h4>
            <div className="answer">
                <p>Lorem ipsum dolor sit amet.</p>
                <p>
                Lorem ipsum dolor sit amet consecterur adisplicn necesstatibiys neques 
                </p>

            </div>
            <div className="faq-line "></div>
         </div>

         <div className="question">
            <h4>different payment methods</h4>
            <div className="answer">
                <p>Lorem ipsum dolor sit amet.</p>
                <p>
                Lorem ipsum dolor sit amet consecterur adisplicn necesstatibiys neques 
                </p>

            </div>
            <div className="faq-line "></div>
         </div>

         <div className="question">
            <h4>what products do you offer?</h4>
            <div className="answer">
                <p>Lorem ipsum dolor sit amet.</p>
                <p>
                Lorem ipsum dolor sit amet consecterur adisplicn necesstatibiys neques 
                </p>

            </div>
            <div className="faq-line "></div>
         </div>
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