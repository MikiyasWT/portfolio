import AboutUsSection from "../components/AboutUsSection";
import FaqSection from "../components/FaqSection";
import ServicesSection from "../components/ServicesSection";
import {motion} from "framer-motion"
import {animation} from "../animation"

const AboutUs = () => {

    return(
        <motion.div
        variants={animation}
        initial="hidden"
        animate="show"
        exit="exit"
        >
            <AboutUsSection />
            <ServicesSection />
            <FaqSection />
        </motion.div>
    )
}


export default AboutUs;