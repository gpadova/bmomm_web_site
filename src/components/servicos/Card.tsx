import styled from "styled-components";
import { FaPeopleGroup } from "react-icons/fa6" 

function Card() {
  return (
    <CardBox className="flex justify-center items-center sm:flex-row flex-col mb-10 p-5 border rounded-xl">
      <div className="flex justify-center h-10/12 items-center flex-col mb-5">

        <h3 className="text-2xl font-barlow font-extrabold mr-5">
          Marketing Digital
        </h3>
      </div>
      <div className="w-5/6 p-5 text-cormorant border-purple border-y-4 sm:border-x-4 sm:border-y-0">
        <p className="font-extralight">
          Com um mundo cada vez mais conectado, estar no mundo online e nas
          redes sociais é imprescindível. E não estamos falando apenas de
          presença, mas sim de conteúdos marcantes e relevantes capazes de
          elevar uma marca e garantir autoridade na web. Nós da BMomm
          Comunicação acreditamos no poder de conexão das redes sociais e
          pessoas reais e por isso trazemos o melhor aos nossos clientes. Do
          planejamento até a análise de resultados, vamos criar uma identidade,
          tanto visual, como de linguagem.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center gap-1 ml-5">
        <button className="w-36 h-8 rounded-lg mt-4 bg-sky-600 text-white">
          Saber Mais
        </button>
        <button className="w-36 h-8 rounded-lg mt-2 bg-lime-500 text-white">
          Falar no Whats
        </button>
      </div>
    </CardBox>
  );
}

const CardBox = styled.div`
  width: min(80%, 1000px);
`;

export default Card;
