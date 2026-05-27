import React from "react";
import hero from "../img/heroimg.png";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";

function Hero() {
  const container = {
    hidden: {},

    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };

  const fadeUp1 = {
    hidden: {
      opacity: 0,
      y: 12,
    },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <>
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="md:flex items-center"
      >
        {/* LEFT CONTENT */}
        <div className="md:w-[55%] w-[88%] lg:ml-28 md:ml-20 ml-10">
          <motion.h1
            variants={fadeUp1}
            className="text-white font-[Cinzel] text-[40px] md:text-5xl lg:text-8xl font-light "
          >
            We Handle{" "}
          </motion.h1>

          <motion.h1
            variants={fadeUp1}
            className="text-[#D4A017] font-[Cinzel] lg:text-8xl md:text-5xl text-[2.6rem] font-light md:my-3 my-1"
          >
            The Coordination
          </motion.h1>

          <motion.h1
            variants={fadeUp1}
            className="text-white font-[Cinzel] lg:text-6xl md:text-5xl text-2xl font-light md:my-3"
          >
            Your Focus On The Work
          </motion.h1>

          <motion.p
            variants={fadeUp1}
            className="text-[#D4A017] md:text-2xl hidden md:block"
          >
            PROPERTY LOGISTICS & PROJECT CONCIERGE
          </motion.p>

          <motion.div variants={fadeUp1} className="my-3 md:hidden">
            <p className="text-[#D4A017] text-lg">PROPERTY LOGISTICS &</p>

            <p className="text-[#D4A017] text-lg">PROJECT CONCIERGE</p>
          </motion.div>
          <div className="md:flex items-center gap-5">
            <a href="#contact" className="">
              <button
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  p-3
                  mt-5
                  border border-[#D4A017]
                  bg-[#0A0A0A]
                  text-[#D4A017]
                  hover:bg-[#D4A017]
                  hover:text-black
                  hover:translate-y-[2px]
                  transition-all
                  duration-300
                  rounded-lg
                  text-md
                  lg:text-xl
                  lg:my-8
                  cursor-pointer
              "
              >
                Shedule a call
                <BsArrowRight className="text-base " />
              </button>
            </a>
            <a href="#founder" className="hidden md:flex ">
              <button
                className="
                cursor-pointer
                  flex
                  items-center
                  justify-center
                  gap-2 
                  p-3
                  mt-5
                  border border-[#D4A017]
                  bg-[#0A0A0A]
                  text-[#D4A017]
                  
                  hover:-translate-y-[2px]
                  transition-all
                  duration-300
                  rounded-lg
                  text-lg
                  lg:text-xl
                  
                  lg:my-8
              "
              >
                Learn more
              </button>
            </a>
          </div>
        </div>

        {/* HERO IMAGE */}
        <motion.img
          src={hero}
          alt="hero img"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            delay: 0.7,
            ease: [0.3, 0.1, 0.3, 1],
          }}
          className="md:w-[45%] lg:w-[47%] w-[80%] my-10 mx-8 rounded-2xl will-change-transform "
        />
      </motion.div>
    </>
  );
}

export default Hero;
