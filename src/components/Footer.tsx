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
import { FaFacebook } from "react-icons/fa6";

function Footer() {
  const matched = useMediaQuery("(min-width:780px)");
  const size = 25;
  const size2 = 20;
  return (
    <footer className="w-screen h-58 bg-lightBlue flex justify-center flex-col items-center">
      <div className="w-5/6 h-100 border-y-[0.1px] mb-5 mt-10 p-5 border-white flex justify-between items-center flex-col sm:flex-row">
        <div className="w-full sm:w-1/2 h-100 text-white text-lg">
          <div className="flex justify-start gap-10 pb-2">
            <MdPlace size={size} />
            <p>Florianópolis, Santa Catarina</p>
          </div>
          <div className="flex justify-start gap-10 pb-2">
            <AiFillPhone size={size} />
            <p>(48) 98806-6446</p>
          </div>
          <a href="mailto: beatriz@bmomm.com.br">
            <div className="flex justify-start gap-10 pb-2">
              <AiFillMail size={size} />
              <p>contato@bmomm.com.br</p>
            </div>
          </a>
        </div>
        {!matched && (
          <div className="w-full flex justify-start gap-4 items-center text-white">
            <div className="flex justify-evenly gap-3 text-white  cursor-pointer">
              <a target="_blank" href="">
                <AiOutlineWhatsApp size={size2} />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/bmommcomunicacao/"
              >
                <AiFillInstagram size={size2} />
              </a>
              <a
                target="_blank"
                href="https://www.facebook.com/bmommcomunicacao/"
              >
                <FaFacebook size={size2} />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/company/bmomm-comunica%C3%A7%C3%A3o/"
              >
                <AiFillLinkedin size={size2} />
              </a>
            </div>
          </div>
        )}
        {matched && (
          <div className="flex flex-col align-end justify-stretch gap-2">
            <div className="w-full ">
              <img
                src="/logosBMomm/logo-Bea-aplicacoes-01.png"
                className="text-white h-[120px]"
                alt="Logo da empresa BMomm"
              />
            </div>
            <div className="flex justify-center">
              <a href="https://forms.gle/sBvnYZzZT2Umcy687" target="_blank">
                <button className="font-barlow  font-semibold text-sm py-3 px-4 rounded-lg bg-heavyBlue text-white hover:bg-purple-dark transition duration-300 ease-in-out">
                  FAÇA PARTE DO NOSSO MAILING
                </button>
              </a>
            </div>
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
