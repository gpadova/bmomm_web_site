import type { ReactElement } from "react";
import AbillityCard from "./HabilityCard";
import { FaMicrophone, FaPeopleGroup } from "react-icons/fa6";
import { AiFillVideoCamera, AiOutlineTrophy } from "react-icons/ai";

export interface IconProps {
  size: number;
}

function HowCanWeHelpYou() {
  interface IAboutUsConsts {
    title: string;
    text: string[];
    icon: ReactElement<IconProps>;
    anchor: string;
  }
  const aboutUsConsts: IAboutUsConsts[] = [
    {
      title: "AÇÕES DE RELACIONAMENTO",
      text: [
        "Conectando marcas e pessoas reais com propósito",
      ],
      icon: <AiOutlineTrophy size={100} />,
      anchor: "/servico/relacionamento"
    },
    {
      title: "ASSESSORIA DE IMPRENSA",
      text: [
        "Conquistando espaço, credibilidade e visibilidade na imprensa",
      ],
      icon: <FaMicrophone size={100} />,
      anchor: "/servico/assesoria"
    },
    {
      title: "MARKETING DIGITAL",
      text: [
        "Conectando a sua marca com seu público-alvo no mundo digital",
      ],
      icon: <FaPeopleGroup size={100} />,
      anchor: "/servico/digital"
    },
    {
      title: "PRODUÇÃO DE CONTEÚDO",
      text: [
        "Criando conteúdos exclusivos e ricos em informação.",
      ],
      icon: <AiFillVideoCamera size={100} />,
      anchor: "/servico/conteudo"
    },
  ];

  return (
    <main className="w-full flex justify-center items-center pt-5  flex-col mb-10 bg-white">
      <div className="w-11/12  text-[40px] sm:text-[40px]  font-bold m-10 font-barlow text-black tracking-tight ">
        <h2>COMO PODEMOS TE AJUDAR</h2>
      </div>
      <div className="flex justify-center flex-wrap gap-10 p-10">
        {aboutUsConsts.map(({ title, text, icon , anchor }, index) => (
          <AbillityCard key={index} icon={icon} title={title} text={text} anchor={anchor}/>
        ))}
      </div>
      <div className="flex justify-center">
        <a href="/servicos">
          <button className="font-barlow mb-7 font-semibold text-lg py-3 px-6 rounded-3xl bg-slate-900 text-white hover:bg-purple-dark transition duration-300 ease-in-out">
            CONHEÇA NOSSOS SERVIÇOS
          </button>
        </a>
      </div>
    </main>
  );
}

export default HowCanWeHelpYou;
