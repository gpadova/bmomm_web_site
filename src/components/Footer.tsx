import { useMediaQuery } from "usehooks-ts";
import { navItens } from "../helpers/consts";
import { MdPlace } from "react-icons/md";
import {
  AiFillPhone,
  AiFillMail,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { FaFacebook } from "react-icons/fa6"

function Footer() {
  const matched = useMediaQuery("(min-width:780px)");
  const size = 20;
  const size2 = 20;
  return (
    <footer className="w-screen h-58 bg-purple flex justify-center flex-col items-center">
      <div className="w-5/6 h-100 border-y-[0.1px] mb-5 mt-10 p-5 border-white flex justify-between items-center flex-col sm:flex-row">
        <div className="w-full sm:w-1/2 h-100 text-white">
          <div className="flex justify-start gap-10 pb-2">
            <MdPlace size={size} />
            <p>Florianópolis, Santa Catarina</p>
          </div>
          <div className="flex justify-start gap-10 pb-2">
            <AiFillPhone size={size} />
            <p>(48) 98806-6446</p>
          </div>
          <div className="flex justify-start gap-10 pb-2">
            <AiFillMail size={size} />
            <p>contato@bmomm.com.br</p>
          </div>
        </div>
        {!matched && (
          <div className="w-full flex justify-start gap-3 items-center text-white">
            <AiFillLinkedin size={size2} />
            <AiOutlineWhatsApp size={size2} />
            <FaFacebook size={size2} />
            <AiFillInstagram size={size2} />
          </div>
        )}
        {matched && (
          <div className="w-1/6 fill-white">
            <img
              src="/logosBMomm/logo-Bea-aplicacoes-01.png"
              className="text-white"
              alt="Logo da empresa BMomm"
            />
          </div>
        )}
      </div>
      <div className="flex justify-between w-5/6 pb-10">
        <div className="flex gap-3 sm:gap-5 text-white">
          {navItens.map((element, index) => (
            <a
              key={index}
              className="hover:underline underline-offset-8 antialiased text-xs"
              href={element.path}
            >
              {element.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
