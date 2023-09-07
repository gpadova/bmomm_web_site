import { useMediaQuery } from "usehooks-ts";

function AboutUs() {
  const matched = useMediaQuery("(min-width: 780px)");
  return (
    <div className="w-[100vw]  flex justify-center items-center flex-col my-10">
      <div className="w-5/6 border-y-[2px] flex justify-center py-10 items-center gap-10">
        <div className="max-w-md flex justify-center flex-col items-center">
          <h3 className="text-[32px] tracking-tight font-[800]">SOBRE NÓS</h3>
          <p className="font-[400] leading-8 tracking-wide pt-6">
            Acreditamos na comunicação integrada e apostamos em planejamentos
            eficientes e ótimos conteúdos. Criamos a comunicação que a sua
            empresa precisa para chegar ao público-alvo e conquistar seu espaço
            na mídia e no meio digital. Comunicação estratégica em assessoria de
            imprensa, produção de conteúdo, marketing digital, gestão de redes
            sociais, ações de relacionamento com a imprensa e influenciadores
            digitais, posicionamento de marca e gerenciamento de crise.
          </p>
        </div>
        {matched && (
          <div className="max-h-30 ">
            <img
              src="/AboutUsImage.png"
              className="object-contain h-auto max-w-full"
              alt="Imagem de um microfone e de uma equipe trabalhando"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default AboutUs;
