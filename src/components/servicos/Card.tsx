interface CardProps {
  title: string;
  text: string[];
  anchor: string;
}

function Card(props: CardProps) {
  return (
    <div className="flex justify-center items-center sm:flex-row flex-col mb-10 py-5 pl-10 border rounded-xl w-5/6 md:1/2">
      <div className="flex justify-center h-10/12 items-center flex-col mb-5 w-60">
        <h3 className="text-2xl font-barlow font-extrabold mr-5">
          {props.title}
        </h3>
      </div>
      <div className="w-4/6 p-5 text-cormorant text-justify">
        {props.text.map((val, index) => (
          <p key={index} className="font-extralight">
            {val}
          </p>
        ))}
      </div>
      <div className="flex flex-col justify-center items-center gap-1 ml-5 pr-10">
        <a href="/service" >
          <button className="w-36 h-8 rounded-lg mt-4 bg-sky-600 text-white">
            Saber Mais
          </button>
        </a>
        <a href="">
          <button className="w-36 h-8 rounded-lg mt-2 bg-lime-500 text-white">
            Falar no Whats
          </button>
        </a>
      </div>
    </div>
  );
}

export default Card;
