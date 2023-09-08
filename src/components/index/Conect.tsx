
import { useMediaQuery } from "usehooks-ts";
import { FaFacebook } from "react-icons/fa6"
import { AiFillLinkedin, AiFillInstagram, AiOutlineWhatsApp } from "react-icons/ai"

function Conect() {
  const matched = useMediaQuery("(min-width: 778px)");
  const size = !matched ? 90 : 50;

  return (
    <div className="w-full flex justify-center pb-10">
      <div className="w-5/6 flex justify-center items-center flex-col ">
        <h3 className="text-black text-3xl font-barlow font-extrabold pb-10 underline underline-offset-4">
          Conecte-se
        </h3>
        <div className="flex justify-center items-center gap-8">
          <a href="#" className="icon-link">
            <AiFillLinkedin size={size} />
          </a>
          <a href="#" className="icon-link">
            <AiOutlineWhatsApp size={size} />
          </a>
          <a href="#" className="icon-link">
            <FaFacebook size={size} />
          </a>
          <a href="#" className="icon-link">
            <AiFillInstagram size={size} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Conect;

