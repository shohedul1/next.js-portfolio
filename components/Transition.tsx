'use client';
import {motion} from "framer-motion";

const TransitionVariants = {
    initial:{
        y: "100%",
        height: "100%"
    },
    animate:{
        y: "100%",
        height: "100%"
    },
    exit:{
        y: ["0%", "100%"],
        height: ["0%", "100%"]
    }
}
const Transition = () => {
  return (
   <div>
     <motion.div
    className="fixed right-0 h-screen w-screen bottom-full z-[30] bg-[#572256]" 
    variants={TransitionVariants}
    initial="initial"
    exit="exit"
    animate="animate"
    transition={{delay: 0.2, duration: 0.6, ease: "easeInOut"}} 
    />
    <motion.div
    className="fixed right-0 h-screen w-screen bottom-full z-[20] bg-[#225738]" 
    variants={TransitionVariants}
    initial="initial"
    exit="exit"
    animate="animate"
    transition={{delay: 0.4, duration: 0.6, ease: "easeInOut"}} 
    />
    <motion.div
    className="fixed right-0 h-screen w-screen bottom-full z-[10] bg-[#d846d6]" 
    variants={TransitionVariants}
    initial="initial"
    exit="exit"
    animate="animate"
    transition={{delay: 0.6, duration: 0.6, ease: "easeInOut"}} 
    />

   </div>

    
  )
}

export default Transition