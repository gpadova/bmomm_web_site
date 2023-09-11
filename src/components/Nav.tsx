import  { useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import { AiFillLinkedin, AiFillInstagram, AiOutlineWhatsApp } from "react-icons/ai"
import { FaFacebook } from "react-icons/fa6"
import { navItens } from "../helpers/consts";
import { VscThreeBars} from "react-icons/vsc"
import { motion } from "framer-motion";

export default function Nav() {
  const [toggled, setToggled] = useState(false);
  const size = 40
  const matched = useMediaQuery("(min-width: 776px)");

  return (
    <>
      <nav className="flex sm:justify-evenly justify-evenly items-center w-full p-0 sm:p-6 bg-lightBlue h-auto">
        <div className="w-1/2 sm:w-1/6 cursor-pointer  max-h-20">
          <a href="/">
            <img
              src="/logosBMomm/logo-Bea-aplicacoes-01.png"
              className="object-scale-down py-1 max-h-24"
              alt="Logo da empresa BMomm"
            />
          </a>
        </div>
        <div className="flex justify-evenly items-center lg:gap-5 gap-2 text-white font-bold ">
          {matched &&
            navItens.map((element, index) => (
              <a
                key={index}
                className="hover:underline hover:opacity-60 underline-offset-8 antialiased text-lg"
                href={element.path}
              >
                {element.name}
              </a>
            ))}
        </div>
        {matched && (
          <>
            <div className="flex justify-evenly gap-3 text-white  cursor-pointer">
              <AiFillLinkedin size={size}/>
              <AiOutlineWhatsApp size={size}/>
              <FaFacebook size={size}/>
              <AiFillInstagram size={size}/>
            </div>
          </>
        )}
        {!matched && !toggled && (
          <>
            <VscThreeBars size={30} onClick={() => setToggled(!toggled)} className="text-white"/>
          </>
        )}
        {!matched && toggled && (
          <motion.div 
          animate={{opacity: 1, x: 0}}
          initial={{opacity: 0, x: 25}}
          transition={{duration: 0.75}}
          className="fixed bg-lightBlue left-0 bottom-0 w-full h-screen flex justify-center items-center z-10">
            <div className="flex justify-center items-center flex-col gap-7">
              {navItens.map((element, index) => (
                <a
                  key={index}
                  className="hover:underline underline-offset-8 antialiased  text-white"
                  href={element.path}
                >
                  {element.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </nav>
    </>
  );
}


