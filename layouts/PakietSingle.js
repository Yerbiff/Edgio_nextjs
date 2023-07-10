import { markdownify } from "@lib/utils/textConverter";
import shortcodes from "@shortcodes/all";
import { MDXRemote } from "next-mdx-remote";
import Base from "./Baseof";

const PakietSingle = ({ frontmatter, content, mdxContent }) => {
  const { description, title } = frontmatter;

  return (
    <Base
      title={title}
      description={description ? description : content.slice(0, 120)}
    >
      <section className="section ">
        <div className="container ">
          <div className="mb-64 mt-28 text-center md:px-24">
           
            {markdownify(title, "h1", "h2 mb-8 ")}
            <div className="content text-justify">
              <MDXRemote {...mdxContent} components={shortcodes} />
            </div>
          </div>
        </div>
      </section>
    </Base>
  );
};

export default PakietSingle;
