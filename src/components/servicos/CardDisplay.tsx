import Card from "./Card";

function CardDisplay() {
  interface IAboutUsConsts {
    title: string;
    text: string[];
    anchor: string;
  }
  const servicesConsts: IAboutUsConsts[] = [
    {
      title: "ASSESSORIA DE IMPRENSA",
      text: [
        "A BMomm Comunicação será o elo entre a sua marca e a imprensa, criando um relacionamento de confiança. A partir de um planejamento de acordo com a necessidade do cliente, traçamos estratégias que aprimoram a visibilidade na mídia, bem como ajudam na manutenção da reputação, evitando crises de imagem.",
      ],
      anchor: "/servico/assesoria",
    },
    {
      title: "MARKETING DIGITAL",
      text: [
        "Com um mundo cada vez mais conectado, estar no mundo online e nas redes sociais é imprescindível. E não estamos falando apenas de presença, mas sim de conteúdos marcantes e relevantes capazes de elevar uma marca e garantir autoridade na web.",
      ],
      anchor: "/servico/digital",
    },
    {
      title: "PRODUÇÃO DE CONTEÚDO",
      text: [
        "Produzimos materiais em texto, áudio e vídeo. Criamos conteúdos exclusivos e relevantes, e adaptamos para todas as plataformas. Traçamos estratégias de comunicação de acordo com a necessidade do cliente, do nicho de atuação e do perfil do público consumidor.",
      ],
      anchor: "/servico/conteudo",
    },
    {
      title: "AÇÕES DE RELACIONAMENTO",
      text: [
        "Pensamos em ações que fortaleçam a reputação da sua empresa com conteúdos próprios e relevantes, consolidando a sua marca nas redes sociais com ações de relacionamento.",
        "O Marketing de Influência se baseia em pessoas reais, as quais o seu público se identifica. Essas personalidades compartilham experiências nas redes sociais e influenciam outras pessoas.",
      ],
      anchor: "/servico/relacionamento",
    },
  ];
  return (
    <>
      {servicesConsts.map((val, index) => <Card {...val}  key={index}/>)}
    </>
  );
}

export default CardDisplay;
