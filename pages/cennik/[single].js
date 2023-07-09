import PakietSingle from "@layouts/PakietSingle";
import { getSinglePage } from "@lib/contentParser";
import parseMDX from "@lib/utils/mdxParser";

// post single layout
const Article = ({ pakiet, mdxContent }) => {
  const { frontmatter, content } = pakiet[0];

  return (
    <PakietSingle
      frontmatter={frontmatter}
      content={content}
      mdxContent={mdxContent}
    />
  );
};

// get pakiety single slug
export const getStaticPaths = () => {
  const allSlug = getSinglePage("content/pakiety");
  const paths = allSlug.map((item) => ({
    params: {
      single: item.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

// get pakiety single content
export const getStaticProps = async ({ params }) => {
  const { single } = params;
  const getPakiety = getSinglePage("content/pakiety");
  const pakiet = getPakiety.filter((pakiet) => pakiet.slug == single);
  const mdxContent = await parseMDX(pakiet[0].content);

  return {
    props: {
      pakiet: pakiet,
      mdxContent: mdxContent,
      slug: single,
    },
  };
};

export default Article;
