import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";

const Pakiety = ({ pakiety }) => {
  return (
    <div className="row justify-center">
      {pakiety.map((pakiet, i) => (
        <div className="col-12 mb-8 sm:col-6 md:col-4" key={`key-${i}`}>
          <Link
            href={`/cennik/${pakiet.slug}`}
            className="block hover:text-primary"
          >
            {pakiet.frontmatter.image && (
              <div className="mb-4">
                <Image
                  src={pakiet.frontmatter.image}
                  alt={pakiet.frontmatter.title}
                  height="300"
                  width="300"
                  className="rounded-lg"
                />
              </div>
            )}
            <h3 className="h4 mb-4">
              
                {pakiet.frontmatter.title}
              
            </h3>
            {markdownify(pakiet.content.slice(0, 121), "p")}
            <h5 className="h4 mt-2">
              {pakiet.frontmatter.price}
            </h5>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Pakiety;
