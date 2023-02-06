import home1 from "../img/home1.png"
import {About,Description,Hide,Image} from "../styles/style"

const AboutUsSection = () => {

    return(
        <About>
           <Description>
            <div className="title">
                <Hide>
                    <h2>We work to make</h2>
                </Hide>
                <Hide>
                    <h2>your <span>dreams</span> come</h2>
                </Hide>
                <Hide>
                    <h2>true</h2>
                </Hide>
            </div>
             <p>Contact us, we are stuffed with professionals capable of getting your project up and running real fast</p>
             <button>Contact Us</button>           
          </Description>

        <Image>
          <img src={home1} alt="a guy with camera" />
        </Image>
      </About>
    )
}


export default AboutUsSection;


