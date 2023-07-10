import React from "react";
import Eyebrow from "../Landing-Page/eyebrow";
import Image from "next/image";
import p1 from "../../../public/images/portfolio/portf1.jpg"
import p2 from "../../../public/images/portfolio/portf2.jpg"
import p3 from "../../../public/images/portfolio/portf3.jpg"
const Portfolio = ({miasto}) => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="flex flex-col gap-12 lg:py-28 md:py-24 py-8">
          <div className="grid xl:grid-cols-12 grid-cols-1 xl:gap-8 gap-10 items-center">
            <div className="xl:col-span-6 lg:col-span-6 flex flex-col xl:gap-24 md:gap-20 gap-10">
              <div className="flex flex-col gap-6">
                <Eyebrow label="OSTATNIE PROJEKTY" />
                <h3 className="font-display md:text-display-xl text-display-md font-normal pb-4">
                  Niektóre z<span className="italic">naszych prac</span>{" "}
                  stworzonych z pasją {miasto}
                </h3>
              </div>
              <div className="flex basis-1/2 flex-col">
                <Image src={p1} alt="kolorki" width={800} />
                <div className="flex flex-col self-stretch pt-6">
                  <h3 className="font-display text-display-md pb-4">Kampania społecznościowa dla marki InnovateMedia</h3>
                  <p className="text-body-lg font-light text-neutral-700">
                  Zrealizowaliśmy kompleksową kampanię społecznościową dla marki InnovateMedia, osiągając wzrost zasięgów i zaangażowania o 50%.
                  </p>
                </div>
              </div>
              <div className="flex basis-1/2 flex-col">
                <Image src={p2} alt="kolorki2" width={800}/>
                <div className="flex flex-col self-stretch pt-6">
                  <h3 className="font-display text-display-md pb-4">Projekt identyfikacji wizualnej dla firmy BoostMedia</h3>
                  <p className="text-body-lg font-light text-neutral-700">
                  Stworzyliśmy nowoczesną identyfikację wizualną dla firmy BoostMedia, obejmującą logo, kolorystykę, typografię i wzornictwo materiałów reklamowych.
                  </p>
                </div>
              </div>
           </div>
            <div className="xl:col-span-6 lg:col-span-8 flex flex-col xl:gap-24 md:gap-20 gap-10 xl:px-14">
              <div className="flex basis-1/2 flex-col">
                <Image src={p3} alt="kolorki3" width={800}/>
                <div className="flex flex-col self-stretch pt-6">
                  <h3 className="font-display text-display-md pb-4">
                  Tworzenie treści dla bloga marki MediaFusion
                  </h3>
                  <p className="text-body-lg font-light text-neutral-700">
                  Przygotowaliśmy strategię i tworzyliśmy wartościowe treści na bloga marki MediaFusion, co zaowocowało wzrostem liczby czytelników i generowanych leadów.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
