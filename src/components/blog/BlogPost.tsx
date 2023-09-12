
import { BsCalendar3 } from "react-icons/bs";

function BlogPost() {
  return (
    <>
      <div className="mb-5 w-[300px] sm:w-[500px]">
        <img src="/prettyImages/Rectangle 1806.png" alt="Imagem do Post" />
        <div className="flex gap-10 my-5">
          <BsCalendar3 size={25}/>
          <p className="font-barlow">24/02/2023</p>
        </div>
        <h2 className="font-barlow text-3xl font-bold">Titulo do Post</h2>
        <p className="font-base mt-3">
          Nemo vel ad consectetur namut rutrum ex, venenatis sollicitudin urna.
          Aliquam erat volutpat. Intege...
        </p>
      </div>
    </>
  );
}


export default BlogPost;
