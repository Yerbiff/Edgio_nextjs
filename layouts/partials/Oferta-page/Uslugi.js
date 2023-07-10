import React from "react";

import ArchitectureIcon from "../../../public/images/icons/interior-design.svg";
import RenovationIcon from "../../../public/images/icons/building-renovation.svg";
import ConstructionIcon from "../../../public/images/icons/construction.svg";
import Eyebrow from "../Landing-Page/eyebrow";
import UslugiItem from "./uslugiItem";

const Uslugi = ({miasto}) => {
  return (
    <div>
    <div className="container mx-auto">
      <div className="flex flex-col md:gap-20 gap-10 lg:py-28 md:py-20 py-12">
        <div className="grid lg:grid-cols-12 grid-cols-1 gap-8">
          <div className="lg:col-span-8">
            <Eyebrow label="NASZE USŁUGI" />
            <h2 className="font-display md:text-display-xl text-display-md pt-5">
              Oferujemy <span className="italic">najlepsze rozwiązania marketingowe</span>{" "}
              dla Twojego biznesu {miasto}
            </h2>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col gap-8">
          <UslugiItem
            icon={RenovationIcon}
            title="Strategie Marketingowe"
            description="Tworzymy spersonalizowane strategie marketingowe dostosowane do Twoich celów biznesowych, grupy docelowej oraz trendów branżowych."
          />
          <UslugiItem
            icon={ArchitectureIcon}
            title="Zarządzanie Mediami Społecznościowymi"
            description="Zarządzamy i optymalizujemy Twoje profile w mediach społecznościowych, tworzymy angażujące treści oraz aktywnie komunikujemy się z Twoją publicznością, budując silną obecność online."
          />
          <UslugiItem
            icon={ConstructionIcon}
            title="Optymalizacja dla Wyszukiwarek (SEO)"
            description="Poprawiamy widoczność Twojej strony internetowej w wyszukiwarkach, optymalizujemy treści oraz wdrażamy skuteczne strategie SEO, aby zwiększyć ruch organiczny i poprawić pozycje w wynikach wyszukiwania."
          />
        </div>
      </div>
    </div>
  </div>
  );
};
export default Uslugi;
