import {easeOut, motion} from "framer-motion"

export const animation = {
    hidden:{
      opacity:0,
      y:300
    },
    show:{
      opacity:1,
      y:0,
      transition:{
        duration:1
      },
    },
    exit:{
        opacity:0,
        y:300,
        transition:{
            duration:1
          },
    }
}

export  const imageAnim  = {
    hidden:{scale:1.5,opacity:0},
    show:{
        scale:1,
        opacity:1,
        transition:{
            ease:'easeOut',
            duration:3}
        }
}

export const lineAnim =  {
    hidden:{ width:"0%" },
    show:{
        width:"100%",
        transition:{ duration:3},
    },
}


export const titleAnim = {
  hidden: { y: 200 },
  show: {
    y: 0,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};


export  const containerAnim ={
  hidden:{opacity:0},
  show:{opacity:1,transition:{duration:2,ease:'easeOut',staggerChildren:1}}
}

// export const sliderAnim = {
//     hidden:{ x:'-10%',skew:'-45deg'},
//     show:{
//         x:'100%',
//         skew:'0deg',
//         transition:{ease:'easeOut',duration:1}
//     }
// }


// export const sliderAnimContainer = {
//     hidden:{ opacity:1},
//     show:{opacity:1,transition:{duration:0.15,ease:'easeOut'}}
// }

export const scrollReveal = {
  hidden:{opacity:0,scale:1.2,transition:{
    duration:0.5
  }},
  show:{
    opacity:1,
    scale:1,
    transition:{
      duration:0.5
    }
  }
}