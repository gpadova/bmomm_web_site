import { useMediaQuery } from "usehooks-ts";
import { FaFacebook } from "react-icons/fa6";
import {
  AiFillLinkedin,
  AiFillInstagram,
  AiOutlineWhatsApp,
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
          <a
            href="#"
            className="icon-link text-purple hover:scale-110 hover:cursor-pointer"
          >
            <AiFillInstagram size={size} />
          </a>
          <a
            href="#"
            className="icon-link text-purple hover:scale-110 hover:cursor-pointer"
          >
            <FaFacebook size={size} />
          </a>
          <a
            href="#"
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
