import {
  LazyMotion,
  domAnimation,
  AnimatePresence,
  useCycle,
} from "framer-motion";
import { useEffect, useRef } from "react";

function Partners() {
  const logos = [
    "/logosBia/logo MK.jpeg",
    "/logosBia/Flyer_A4_Fabrica-(1)-(1).png",
    "/logosBia/Comthá-Logo-06.png",
    "/logosBia/Grupo-Novo-Brasil_logo-site.jpg",
    "/logosBia/Logo kore fundo branco.png",
  ];

  // Duplicate the logos array for seamless looping
  const doubledLogos = [...logos, ...logos];

  const [currentLogoIndex, cycleLogos] = useCycle(...doubledLogos);

  const containerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      cycleLogos();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentLogoIndex]);

  return (
    <LazyMotion features={domAnimation}>
      <div className="bg-white w-full flex justify-center items-center">
        <div className=" flex justify-center items-center mt-5 flex-col pb-10">
          <h2 className="text-slate-900 text-3xl font-barlow font-extrabold pb-5">
            CLIENTES
          </h2>
          <div
            className="flex flex-wrap justify-start gap-10 w-30 p-4 hover:cursor-pointer"
            style={{ overflow: "hidden" }}
          >
            <div
              className="scrolling-container"
              style={{
                display: "flex",
                animation: `scrollRight 40s linear infinite`,
                width: "100%",
                gap: 60,
              }}
              ref={containerRef}
            >
              {doubledLogos.map((logo, index) => (
                <img
                  key={index}
                  className="object-fit max-h-20"
                  src={logo}
                  alt=""
                />
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <a href="/clientes">
              <button className="font-barlow my-10 font-semibold text-lg py-3 px-6 rounded-3xl bg-slate-900 text-white hover:bg-purple-dark transition duration-300 ease-in-out">
              Veja quem faz parte da nossa história
              </button>
            </a>
          </div>
        </div>
      </div>
      <style>
        {`
          @keyframes scrollRight {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}
      </style>
    </LazyMotion>
  );
}

export default Partners;
