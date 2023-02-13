import {useAnimation} from "framer-motion"
import { useEffect } from "react"
import {useInView} from "react-intersection-observer"

// custom hook for revealing elemts on scroll with animation
export const useScroll = ()=> {
    const controls = useAnimation()
    const [element,view] = useInView({threshold:0.5})

    if(view){
        controls.start("show")
    }
    else{
        controls.start("hidden")
    }


    return [element,controls]

}



export const useScrollHook = ()=>{

    const controls = useAnimation()
    const [element,view] = useInView({threshold:0.3})
  
   useEffect(()=>{
      if(view){
        controls.start("show")
    }
    else{
        controls.start("hidden")
    }
  
    },[element,view])

    return [element,controls]
}