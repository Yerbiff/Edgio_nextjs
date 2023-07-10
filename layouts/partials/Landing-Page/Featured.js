/// Page Sections
import Image from "next/image";
import Eyebrow from "./eyebrow";
import About from "../../../public/images/landing/o-nas.webp";

const Featured = () => {

return (
  <div>
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-12 grid-cols-1 lg:gap-8 gap-20 lg:py-32 py-12 items-center">
        <div className="lg:col-span-6 flex flex-col gap-6">
          <Eyebrow label="O NAS" />
          <h2 className="font-display md:text-display-xl text-display-md font-normal pb-4">
            Pomagamy zrealizować Twoje <span className="italic">marzenia o sukcesie</span>
          </h2>
          <p className="md:text-body-lg text-body-md font-light text-neutral-700">
            Jesteśmy zespołem ekspertów w dziedzinie marketingu, gotowych wesprzeć Cię w
            osiągnięciu zamierzonych celów. Działamy z pasją i zaangażowaniem, aby Twoja
            marka osiągnęła sukces na rynku.
          </p>
          <p className="md:text-body-lg text-body-md font-light text-neutral-700">
            Nasze doświadczenie pozwala nam tworzyć strategie dopasowane do Twoich
            potrzeb, maksymalizować widoczność Twojej marki i zwiększać jej
            potencjał. Jesteśmy tutaj, aby pomóc Ci przekształcić Twoje marzenia w
            rzeczywistość.
          </p>
        </div>

        <div className="lg:col-span-5 flex flex-col relative">
           <Image
          src={About}
          alt="tablet i sciana"
          width={700}
          height={400}
        />
        </div>
      </div>
    </div>
  </div>
)};

export default Featured;