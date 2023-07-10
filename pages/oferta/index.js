import Link from "next/link";
import Uslugi from "@layouts/partials/Oferta-page/Uslugi";
import Portfolio from "@layouts/partials/Oferta-page/Portfolio";

const Oferta = () => {
  const cities = [
    { name: 'Wrocław', slug: 'social-media-wroclaw' },
    { name: 'Bydgoszcz', slug: 'social-media-bydgoszcz' },
    { name: 'Lublin', slug: 'social-media-lublin' },
    { name: 'Zielona Góra', slug: 'social-media-zielona-gora' },
    { name: 'Łódź', slug: 'social-media-lodz' },
    { name: 'Kraków', slug: 'social-media-krakow' },
    { name: 'Warszawa', slug: 'social-media-warszawa' },
    { name: 'Opole', slug: 'social-media-opole' },
    { name: 'Rzeszów', slug: 'social-media-rzeszow' },
    { name: 'Białystok', slug: 'social-media-bialystok' },
    { name: 'Gdańsk', slug: 'social-media-gdansk' },
    { name: 'Katowice', slug: 'social-media-katowice' },
    { name: 'Kielce', slug: 'social-media-kielce' },
    { name: 'Olsztyn', slug: 'social-media-olsztyn' },
    { name: 'Poznań', slug: 'social-media-poznan' },
    { name: 'Szczecin', slug: 'social-media-szczecin' },
  ];

  return (
    <section className="text-gray-600 body-font">
      <Uslugi/>
      <Portfolio/>
      <section className="relative">
    
        <div class="container mb-12">
            <h3 className=" mb-4">Działamy w</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4">
                {cities.map((city, index) => (
                  <div className="w-full" key={index}>
                    <h3 className="h6 mb-1">
                      <Link className="block hover:text-primary" href={`oferta/${city.slug}`}>
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
