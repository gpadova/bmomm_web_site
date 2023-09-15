import { useMediaQuery } from "usehooks-ts";

function AboutUs() {
  const matched = useMediaQuery("(min-width: 780px)");
  return (
    <div className="w-[100vw]  flex justify-center items-center flex-col my-10 border-y-[2px]">
      <div className="w-5/6  border-slate-900 flex justify-center pt-10 items-center gap-10">
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
      <div className="flex justify-center">
            <a href="/sobre">
              <button className="font-barlow my-10 font-semibold text-lg py-3 px-6 rounded-3xl bg-slate-900 text-white hover:bg-purple-dark transition duration-300 ease-in-out">
              SAIBA MAIS
              </button>
            </a>
          </div>
    </div>
  );
}

export default AboutUs;
