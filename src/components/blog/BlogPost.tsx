import { styled } from "styled-components";
import { BsCalendar3 } from "react-icons/bs";

function BlogPost() {
  return (
    <>
      <BlogPostBox className="mb-5">
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
      </BlogPostBox>
    </>
  );
}

const BlogPostBox = styled.div`
  width: min(90%, 500px);
`;

export default BlogPost;
