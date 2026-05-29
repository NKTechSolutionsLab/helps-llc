import React from "react";
import logo from "../img/logo.webp";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsArrowRight } from "react-icons/bs";
import { useState } from "react";
import Dropdown from "../components/Dropdown.jsx";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="flex items-center justify-between ">

        <img src={logo} className="lg:w-[17%] md:w-[30%] lg:h-[10%] w-[50%] md:-ml-8 -ml-4 mb-5 " alt="LOGO" />
        {/* <h1 className="my-5 font-[Cinzel]  font-thin tracking-[0.2em] text-[25px] text-[#AA7C11] lg:text-4xl md:text-3xl mt-7 lg:mt-11">
            H.E.L.P.S
          </h1> */}

        <div className="hidden lg:flex items-center gap-20 mx-[19%] text-xl ">
          <a
            href="#service"
            className="text-[#AA7C11] font-[Cinzel] hover:text-[#142F17] transition-all duration-300 text-2xl"
          >
            Service
          </a>
          <a
            href="#projects"
            className="text-[#AA7C11] font-[Cinzel] hover:text-[#142F17] transition-all duration-300 text-2xl"
          >
            Work
          </a>
          <a
            href="#contact"
            className="text-[#AA7C11] font-[Cinzel] hover:text-[#142F17] transition-all duration-300 text-2xl"
          >
            Contact
          </a>
        </div>
        <a href="#contact">
          <button
            className="
                    lg:flex
                    hidden
                      items-center
                      justify-center
                      gap-2
                      mt-5
                      border border-[#D4A017]
                  bg-[#0A0A0A]
                  text-[#D4A017]
                  hover:bg-[#D4A017]
                  hover:text-black
                      transition-all
                      duration-300
                      rounded-lg
                      text-lg
                      lg:text-xl
                      font-thin
                      font-[Cinzel]
                      lg:my-8
                       py-3 px-5 ml-16 mr-2 my-5
  "
          >
            Book A Call
            <BsArrowRight className="text-base" />
          </button>
        </a>
        <RxHamburgerMenu
          size={36}
          color="#D4A017"
          className="mb-5  mx-3 md:mx-10 lg:hidden cursor-pointer"
          onClick={() => setIsOpen(true)}
        />
        <Dropdown isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </>
  );
}

export default Navbar;
