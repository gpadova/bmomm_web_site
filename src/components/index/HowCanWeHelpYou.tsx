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
        "Pensamos em ações que fortaleçam a reputação da sua empresa com conteúdos próprios e relevantes, consolidando a sua marca nas redes sociais com ações de relacionamento.",
        "O Marketing de Influência se baseia em pessoas reais, as quais o seu público se identifica. Essas personalidades compartilham experiências nas redes sociais e influenciam outras pessoas."
      ],
      icon: <AiOutlineTrophy size={100} />,
      anchor: "/servico/relacionamento"
    },
    {
      title: "ASSESSORIA DE IMPRENSA",
      text: [
        "A BMomm Comunicação será o elo entre a sua marca e a imprensa, criando um relacionamento de confiança. A partir de um planejamento de acordo com a necessidade do cliente, traçamos estratégias que aprimoram a visibilidade na mídia, bem como ajudam na manutenção da reputação, evitando crises de imagem.",
      ],
      icon: <FaMicrophone size={100} />,
      anchor: "/servico/assesoria"
    },
    {
      title: "MARKETING DIGITAL",
      text: [
        "Com um mundo cada vez mais conectado, estar no mundo online e nas redes sociais é imprescindível. E não estamos falando apenas de presença, mas sim de conteúdos marcantes e relevantes capazes de elevar uma marca e garantir autoridade na web.",
      ],
      icon: <FaPeopleGroup size={100} />,
      anchor: "/servico/digital"
    },
    {
      title: "PRODUÇÃO DE CONTEÚDO",
      text: [
        "Produzimos materiais em texto, áudio e vídeo. Criamos conteúdos exclusivos e relevantes, e adaptamos para todas as plataformas. Traçamos estratégias de comunicação de acordo com a necessidade do cliente, do nicho de atuação e do perfil do público consumidor.",
      ],
      icon: <AiFillVideoCamera size={100} />,
      anchor: "/servico/conteudo"
    },
  ];

  return (
    <main className="w-full flex justify-center items-center pt-5  flex-col mb-10 bg-lightBlue">
      <div className="w-5/6  text-[40px] sm:text-[40px]  font-bold m-10 font-barlow text-white tracking-tight ">
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
