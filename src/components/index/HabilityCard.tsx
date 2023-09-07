import { motion } from "framer-motion";

interface AbilityCardProps {
  title: string;
  text: string[];
  icon: React.ReactNode;
  anchor: string;
}

function AbilityCard({ title, text, icon, anchor }: AbilityCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="bg-white  border-[8px] border-purple rounded-xl shadow-3xl max-w-[400px] flex flex-col gap-3 justify-between items-center p-10"
    >
      <div className="w-full flex flex-col items-center justify-center mb-5">
        <div className="bg-slate-900 rounded-full p-5 mb-5 text-white">
          {icon}
        </div>
        <h3 className="text-2xl leading-10 mb-5 text-center font-semibold border-purple pt-4 border-t-[2px]">
          {title}
        </h3>
        {text.map((element, index) => (
          <p
            key={index}
            className="text-lg text-justify font-barlow leading-7"
          >
            {element}
          </p>
        ))}
      </div>
      <div className="flex flex-col items-center justify-center">
        <a href={anchor}>
        <button className="border border-solid rounded-xl py-2 px-4 bg-purple text-white hover:scale-110 hover:bg-purple-dark transition duration-300 ease-in-out">
          Saber Mais
        </button>
        </a>
      </div>
    </motion.div>
  );
}

export default AbilityCard;
