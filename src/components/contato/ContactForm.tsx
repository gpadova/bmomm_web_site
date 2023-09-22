import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaFacebook, FaLocationPin } from "react-icons/fa6";
import {
  AiFillLinkedin,
  AiOutlineWhatsApp,
  AiFillInstagram,
} from "react-icons/ai";

function ContactForm() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-5/6 sm:flex mb-5">
        <div className="sm:w-1/2 bg-heavyBlue flex flex-col items-stretch justify-center rounded-md text-white p-10 font-barlow">
          <h3 className="text-2xl mb-10">Informações de contato</h3>
          <div className="flex gap-10">
            <BsTelephoneFill />
            <p className=" text-lg">+55 (48) 98806-6446</p>
          </div>
          <div className="flex gap-10 my-10">
            <MdEmail />
            <p className="underline text-lg">contato@bmomm.com.br</p>
          </div>
          <div className="flex gap-10">
            <FaLocationPin />
            <p className=" text-lg">Florianópolis - Santa Catarina | Brasil</p>
          </div>
          <div className="flex text-4xl mt-7 gap-4">
            <a target="_blank" href="">
              <AiOutlineWhatsApp color="#F6AF05" />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/bmommcomunicacao/"
            >
              <AiFillInstagram />
            </a>
            <a
              target="_blank"
              href="https://www.facebook.com/bmommcomunicacao/"
            >
              <FaFacebook color="#F6AF05" />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/company/bmomm-comunica%C3%A7%C3%A3o/"
            >
              <AiFillLinkedin />
            </a>
          </div>
        </div>
        <div className="sm:w-1/2 flex flex-col items-center justify-center">
          <form
            className="w-full flex justify-center items-center flex-col my-5 sm:mb-0 "
            action=""
          >
            <div className="flex flex-col mb-5 w-[300px] ">
              <label htmlFor="" className="mb-1 font-barlow">
                Nome
              </label>
              <input type="text" className="border-b-[1px] text-zinc-700" />
            </div>
            <div className="flex flex-col mb-5 w-[300px] ">
              <label htmlFor="" className="mb-1 font-barlow">
                Email
              </label>
              <input type="text" className="border-b-[1px] text-zinc-700" />
            </div>
            <div className="flex flex-col mb-5 w-[300px] ">
              <label htmlFor="" className="mb-1 font-barlow">
                Telefone
              </label>
              <input type="text" className="border-b-[1px] text-zinc-700" />
            </div>
            <div className="flex flex-col mb-8 w-[300px] ">
              <label htmlFor="" className="mb-1 font-barlow">
                Mensagem
              </label>
              <textarea className="border-b-[1px] text-zinc-700" />
            </div>
            <div className="flex gap-2 justify-center mb-8 w-[300px] ">
              <input type="checkbox" className="border-b-[1px] text-zinc-700" />
              <label htmlFor="" className="mb-1 font-barlow">
                Estou de acordo com a{" "}
                <a href="/uso">
                  <span className="underline">Política de Privacidade.</span>
                </a>
              </label>
            </div>
            <button className="bg-slate-800 font-barlow text-white px-6 py-3 rounded-md">
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
      <div className="flex justify-center">
        <a href="https://forms.gle/sBvnYZzZT2Umcy687" target="_blank">
          <button className="font-barlow my-20 font-semibold text-lg py-3 px-6 rounded-3xl bg-heavyBlue text-white hover:bg-purple-dark transition duration-300 ease-in-out">
            FAÇA PARTE DO NOSSO MAILING
          </button>
        </a>
      </div>
    </div>
  );
}

export default ContactForm;
