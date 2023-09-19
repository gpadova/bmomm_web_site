import { useMediaQuery } from "usehooks-ts";
import { FaFacebook } from "react-icons/fa6";
import {
  AiFillLinkedin,
  AiFillInstagram
} from "react-icons/ai";

function Conect() {
  const matched = useMediaQuery("(min-width: 778px)");
  const size = matched ? 90 : 50;

  return (
    <div className="w-full flex justify-center pb-10">
      <div className="w-5/6 flex justify-center items-center flex-col ">
        <h3 className="text-slate-900 text-3xl font-barlow font-extrabold pb-10">
          Conecte-se
        </h3>
        <div className="flex justify-between items-center gap-8 sm:gap-10">
          <a target="_blank"
            href="https://www.instagram.com/bmommcomunicacao/"
            className="icon-link text-purple hover:scale-110 hover:cursor-pointer"
          >
            <AiFillInstagram size={size} />
          </a>
          <a target="_blank"
            href="https://www.facebook.com/bmommcomunicacao/"
            className="icon-link text-purple hover:scale-110 hover:cursor-pointer"
          >
            <FaFacebook size={size} />
          </a>
          <a target="_blank"
            href="https://www.linkedin.com/company/bmomm-comunica%C3%A7%C3%A3o/"
            className="icon-link text-purple hover:scale-110 hover:cursor-pointer"
          >
            <AiFillLinkedin size={size} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Conect;
