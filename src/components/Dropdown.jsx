import React from "react";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import logo from "../img/logo.webp";
import { BsArrowRight } from "react-icons/bs";

function Dropdown({ isOpen, setIsOpen }) {
  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#services" },
    { name: "Work", href: "#projects" },
    { name: "Contact", href: "#footer" },
  ];

  return (
    <div className="absolute top-0 bg-[#0B0B0B] w-full font-light lg:hidden z-20">
      {isOpen ? (
        <>
          <div className="flex item-center justify-between">
            <div className="flex">
              <img src={logo} className="lg:w-[17%] md:w-[40%] lg:h-[10%] w-[60%] lg:-ml-10 -ml-4" alt="LOGO" />
              {/* <h1 className="my-5 font-[Cinzel]  font-thin tracking-[0.2em] text-[25px] text-[#AA7C11] lg:text-[30px] md:text-3xl lg:mt-7 mt-7 ">
                H.E.L.P.S
              </h1> */}
            </div>
            <RxCross1
              size={30}
              color="gray"
              className="w-[50%] md:w-[30%] my-5 mx-3 mb-5 md:mx-10 lg:hidden cursor-pointer"
              onClick={() => {
                setIsOpen(false);
              }}
            />
          </div>
          <div className="w-full ">
            {navLinks.map((links, id) => (
              <div>
                <div
                  className="navlink w-full pl-20 my-10 text-2xl text-[#AA7C11] hover:text-[#D4A017] transition-all duration-300"
                  key={id}
                >
                  <a href={links.href}>{links.name}</a>
                </div>
              </div>
            ))}
          </div>
          <div className="w-80 h-[1.2px] ml-8 rounded-xl "></div>
          <a href="#contact">
            <button
              className="
                      flex
                      items-center
                      justify-center
                      gap-2
                      mt-2
                      border
                     border-[#D4A017]
                      text-[#D4A017]
                      transition-all
                      duration-300
                      rounded-lg
                      text-lg
                      font-light
                      lg:my-8
                      py-3 px-5 ml-20 my-5
                  "
            >
              Let's Talk
              <BsArrowRight className="text-lg font-medium" />
            </button>
          </a>{" "}
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Dropdown;
