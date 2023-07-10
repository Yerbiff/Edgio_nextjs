import Link from "next/link";
import { useRouter } from "next/router";
import Uslugi from "@layouts/partials/Oferta-page/Uslugi";
import Portfolio from "@layouts/partials/Oferta-page/Portfolio";

const Oferta = () => {
  const cities = [
    { name: 'Wrocław', nameSite: 'Wrocławiu', slug: 'social-media-wroclaw' },
    { name: 'Bydgoszcz', nameSite: 'Bydgoszczy', slug: 'social-media-bydgoszcz' },
    { name: 'Lublin', nameSite: 'Lublinie', slug: 'social-media-lublin' },
    { name: 'Zielona Góra', nameSite: 'Zielonej Górze', slug: 'social-media-zielona-gora' },
    { name: 'Łódź', nameSite: 'Łodzi', slug: 'social-media-lodz' },
    { name: 'Kraków', nameSite: 'Krakowie', slug: 'social-media-krakow' },
    { name: 'Warszawa', nameSite: 'Warszawie', slug: 'social-media-warszawa' },
    { name: 'Opole', nameSite: 'Opolu', slug: 'social-media-opole' },
    { name: 'Rzeszów', nameSite: 'Rzeszowie', slug: 'social-media-rzeszow' },
    { name: 'Białystok', nameSite: 'Białystoku', slug: 'social-media-bialystok' },
    { name: 'Gdańsk', nameSite: 'Gdańsku', slug: 'social-media-gdansk' },
    { name: 'Katowice', nameSite: 'Katowicach', slug: 'social-media-katowice' },
    { name: 'Kielce', nameSite: 'Kielcach', slug: 'social-media-kielce' },
    { name: 'Olsztyn', nameSite: 'Olsztynie', slug: 'social-media-olsztyn' },
    { name: 'Poznań', nameSite: 'Poznaniu', slug: 'social-media-poznan' },
    { name: 'Szczecin', nameSite: 'Szczecinie', slug: 'social-media-szczecin' },
  ];
 
  const router = useRouter();
  const miasto = router.query.miasto

  const selectedCity = cities.find(city => city.slug === miasto);
  const cityName = selectedCity ? selectedCity.nameSite : '';
  return (
    <section className="text-gray-600 body-font">
      <Uslugi miasto={`w ${cityName}`} />
      
      <Portfolio miasto={`w ${cityName}`} />
      <section className="relative">

        <div class="container mb-12">
            <h3 className=" mb-4">Działamy w</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4">
                {cities.map((city, index) => (
                  <div className="w-full" key={index}>
                    <h3 className="h6 mb-1">
                      <Link className="block hover:text-primary" href={`${city.slug}`}>
                        {city.name}
                      </Link>
                    </h3>
                  </div>
                ))}
              </div>
        </div>
    </section>
  </section>
  );
}

export default Oferta;