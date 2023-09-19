import { useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import {
  AiFillLinkedin,
  AiFillInstagram,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { FaFacebook } from "react-icons/fa6";
import { navItens } from "../helpers/consts";
import { VscThreeBars } from "react-icons/vsc";
import { motion } from "framer-motion";

export default function Nav() {
  const [toggled, setToggled] = useState(false);
  const size = 40;
  const matched = useMediaQuery("(min-width: 776px)");

  return (
    <div className="relative">
      <img src="/backImage.png" className="w-full" alt="" />
      <nav className="absolute top-0 left-0 w-full  sm:p-6 bg-transparent h-auto">
        <div className="flex justify-between items-center p-5">
          <div className="w-1/2 sm:w-1/6 cursor-pointer  max-h-20">
            <a href="/">
              <img
                src="/logosBMomm/logo-Bea-aplicacoes-01.png"
                className="object-scale-down py-1 max-h-20"
                alt="Logo da empresa BMomm"
              />
            </a>
          </div>
          <div className="flex justify-evenly items-center lg:gap-5 gap-2 text-white font-bold ">
            {matched &&
              navItens.map((element, index) => (
                <a
                  key={index}
                  className="hover:underline hover:opacity-60 underline-offset-8 antialiased text-md"
                  href={element.path}
                >
                  {element.name}
                </a>
              ))}
          </div>
          {matched && (
            <>
              <div className="flex justify-evenly gap-3 text-white  cursor-pointer">
                <a target="_blank" href="">
                  <AiOutlineWhatsApp size={size} />
                </a>
                <a
                  target="_blank"
                  href="https://www.instagram.com/bmommcomunicacao/"
                >
                  <AiFillInstagram size={size} />
                </a>
                <a
                  target="_blank"
                  href="https://www.facebook.com/bmommcomunicacao/"
                >
                  <FaFacebook size={size} />
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/company/bmomm-comunica%C3%A7%C3%A3o/"
                >
                  <AiFillLinkedin size={size} />
                </a>
              </div>
            </>
          )}
          {!matched && !toggled && (
            <>
              <VscThreeBars
                size={30}
                onClick={() => setToggled(!toggled)}
                className="text-white"
              />
            </>
          )}
          {!matched && toggled && (
            <motion.div
              animate={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 25 }}
              transition={{ duration: 0.75 }}
              className="fixed bg-lightBlue left-0 bottom-0 w-full h-screen flex justify-center items-center z-10"
            >
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
        </div>
      </nav>
    </div>
  );
}
