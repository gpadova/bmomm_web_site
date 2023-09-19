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
      className="bg-white shadow-lg  border rounded-xl shadow-3xl w-[220px] flex flex-col gap-6 justify-between items-center py-8 px-4 mb-10"
    >
      <div className="w-full flex flex-col items-center justify-around ">
        <div className="bg-white rounded-full p-5  text-black -translate-y-24">
          {icon}
        </div>
        {title === "MARKETING DIGITAL" ? (
          <h3 className="text-xl leading-10 -mt-16  text-center font-semibold px-10  border-purple pt-4 border-t-[2px]">
            {title}
          </h3>
        ) : (
          <h3 className="text-xl leading-10 -mt-16 text-center font-semibold  border-purple pt-4 border-t-[2px]">
            {title}
          </h3>
        )}
        {text.map((element, index) => (
          <p
            key={index}
            className="text-lg text-justify font-barlow leading-6 mt-4 tracking-normal px-1"
          >
            {element}
          </p>
        ))}
      </div>
      <div className="flex flex-col items-center justify-center">
        <a href="/service">
          <button className="border border-solid text-xl rounded-xl py-2 px-4 bg-purple text-white hover:scale-110 hover:bg-purple-dark transition duration-300 ease-in-out">
            Saber Mais
          </button>
        </a>
      </div>
    </motion.div>
  );
}

export default AbilityCard;
