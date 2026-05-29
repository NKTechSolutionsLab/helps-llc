import React from 'react'
import founder from '../img/founder.webp'

function Founder() {
  return (
    <section id='founder' className="w-full bg-[#0B0B0B] md:py-28  overflow-hidden">
      <div className="max-w-7xl mx-5 lg:mx-14 px-6 md:px-10 lg:px-16">

        <div className="md:flex md:gap-20 lg:gap-28">

          {/* LEFT IMAGE */}
          <div className="relative -ml-5">

            <div className=" border border-[#D4A017]/20 rounded-3xl translate-x-4 translate-y-4 mb-10 " >

              <img
                src={founder}
                alt="Founder"
                className="relative rounded-3xl object-cover w-full  p-2"
              />
            </div>

          </div>

          {/* RIGHT CONTENT */}
          <div className='lg:mt-7 mt-5'>

            <p className="text-[#D4A017] uppercase tracking-[0.3em] text-sm md:text-base mb-6 font-light">
              Founder
            </p>

            <h2 className="text-white font-[Cinzel] leading-[1.1] font-light text-[clamp(2.5rem,5vw,5rem)] mb-8">
              Built On
              <span className="text-[#D4A017] block mt-2">
                Legacy & Purpose
              </span>
            </h2>

            <div className="space-y-6">

              <p className="text-[#B8B8B8] text-[clamp(1rem,2vw,1.15rem)] leading-relaxed font-light">
                H.E.L.P.S. LLC is built on a legacy that began in 2001,
                when my grandmother and I developed the vision behind
                H.E.L.P.S. and its commitment to serving others.
              </p>

              <p className="text-[#8A8A8A] text-[clamp(0.95rem,2vw,1rem)] leading-relaxed">
                H.E.L.P.S. stands for Heritage, Evolving, Legacy,
                Purpose, and Success — the values that continue to
                guide our work today.
              </p>

              <p className="text-[#8A8A8A] text-[clamp(0.95rem,2vw,1rem)] leading-relaxed">
                With nearly 18 years of experience in operations
                management, customer service leadership, logistics
                coordination, and workforce supervision, H.E.L.P.S.
                LLC was founded to combine those lifelong values
                with professional expertise.
              </p>

              <p className="text-[#8A8A8A] text-[clamp(0.95rem,2vw,1rem)] leading-relaxed">
                Today, we help businesses stay organized,
                communicate effectively, and operate with confidence
                through administrative support, operational
                coordination, and property logistics services.
              </p>

            </div>

            {/* SIGNATURE AREA */}
            <div className="mt-12">

              <div className="w-20  bg-[#D4A017] mb-6"></div>

              <h3 className="text-white font-[Cinzel] text-2xl tracking-[0.08em] font-light">
                Salicia Rose
              </h3>

              <p className="text-[#AA7C11] mt-2 tracking-[0.2em] uppercase text-sm">
                Founder, H.E.L.P.S. LLC
              </p>

            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Founder
