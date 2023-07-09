import Link from "next/link";
import { useRouter } from 'next/router';

const Oferta = () => {
  const cities = [
    { name: 'Wrocław', slug: 'wroclaw' },
    { name: 'Bydgoszcz', slug: 'bydgoszcz' },
    { name: 'Lublin', slug: 'lublin' },
    { name: 'Zielona Góra', slug: 'zielona-gora' },
    { name: 'Łódź', slug: 'lodz' },
    { name: 'Kraków', slug: 'krakow' },
    { name: 'Warszawa', slug: 'warszawa' },
    { name: 'Opole', slug: 'opole' },
    { name: 'Rzeszów', slug: 'rzeszow' },
    { name: 'Białystok', slug: 'bialystok' },
    { name: 'Gdańsk', slug: 'gdansk' },
    { name: 'Katowice', slug: 'katowice' },
    { name: 'Kielce', slug: 'kielce' },
    { name: 'Olsztyn', slug: 'olsztyn' },
    { name: 'Poznań', slug: 'poznan' },
    { name: 'Szczecin', slug: 'szczecin' },
  ];
  // const router = useRouter();
  // const { lokalizacja } = router.query;

  // if (lokalizacja) {
  //   // Kod obsługi strony "/oferta/:lokalizacja" tutaj
  //   return <h1>Strona oferta dla {lokalizacja}</h1>;
  // }
  return (
    <section className="text-gray-600 body-font">
    <div className="max-w-7xl mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 md:ml-24 pt-6 flex flex-col md:items-start md:text-left mb-40 items-center text-center">
        <h1 className="mb-5 sm:text-6xl text-5xl items-center Avenir xl:w-2/2 text-gray-900">
        Tworzymy wspaniałe strategie marketingowe
        </h1>
        <p className="mb-4 xl:w-3/4 text-gray-600 text-lg">
        W dzisiejszym konkurencyjnym świecie biznesu, skuteczne strategie marketingowe są kluczowe dla osiągnięcia sukcesu. Bez dobrze przemyślanej i zintegrowanej strategii, trudno jest dotrzeć do swojej docelowej grupy odbiorców i zbudować silną obecność na rynku.
        </p>
        <div className="flex justify-center">
        </div>
      </div>
      <div className="xl:mr-44 sm:mr-0 sm:mb-28 mb-0 lg:mb-0 mr-48 md:pl-10">
        <img
          className="w-80 md:ml-1 ml-24 border rounded-lg"
          alt="iPhone-12"
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
        ></img>
      </div>
    </div>
    <section className="mx-auto">
      <div className="container px-5 mx-auto lg:px-24 ">
        <div className="flex flex-col w-full mb-4 text-left lg:text-center">
          <h1 className="mb-8 text-2xl Avenir font-semibold text-black">
          Nasze strategie marketingowe obejmują szeroki zakres działań, takich jak badanie rynku, analiza konkurencji, identyfikacja grupy docelowej, kreowanie spójnego wizerunku marki, tworzenie wartościowych treści, optymalizacja SEO, kampanie reklamowe, działania w mediach społecznościowych i wiele więcej.
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-16 mb-16 text-center lg:grid-cols-4">
          <div className="flex items-center justify-center">
          Nasza zgrana drużyna kreatywnych projektantów, copywriterów i ekspertów marketingowych doskonale rozumie, jak skutecznie przyciągnąć uwagę Twojej docelowej grupy odbiorców.
          </div>
          <div className="flex items-center justify-center">
          Niezależnie od tego, czy potrzebujesz kampanii w mediach
              społecznościowych, projektowania graficznego, tworzenia treści na stronę internetową lub produkcji wideo,
               jesteśmy gotowi dostarczyć pełen zakres usług reklamowych.
          </div>
          <div className="flex items-center justify-center">
          Nasze działania reklamowe opierają się na analizie rynku. Dążymy do
              osiągnięcia mierzalnych wyników, które przekładają się na wzrost Twojego biznesu. Celem naszej agencji jest
               zapewnienie Ci zwrotu z inwestycji.
          </div>
          <div className="flex items-center justify-center">
          Zrozumienie Twoich celów i oczekiwań jest dla nas kluczowe. Dlatego skupiamy się na
             budowaniu trwałych relacji z naszymi klientami i dostosowaniu naszych usług do Twoich potrzeb. Jesteśmy
             tutaj, aby Ci pomóc od startu do mety.
          </div>
        </div>
      </div>
    </section>
    <div className="grr max-w-7xl pt-20 mx-auto text-center">
    <h1 className="mb-8 text-6xl Avenir font-semibold text-gray-900">
        Więcej efektów, mniej wysiłku.
      </h1>
      <h1 className="mb-8 text-2xl Avenir font-semibold text-gray-600 text-center">
        Optymalizuj swoje kampanie reklamowe razem z naszą firmą.
      </h1>
      <div className="container flex flex-col items-center justify-center mx-auto rounded-lg ">
        <img
          className="object-cover object-center mb-10 g327 border rounded-lg shadow-md"
          alt="Placeholder Image"
          src="https://images.unsplash.com/photo-1548438294-1ad5d5f4f063?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1744&q=80"
        ></img>
      </div>
    </div>
    <section className="relative">

  <div class="container ">
      <h3 className=" mb-4">Działamy w</h3>
        <div className="flex flex-wrap mb-4">
          {cities.map((city, index) => (
          <div className="w-full sm:w-1/2 md:w-1/4 " key={index}>
              <h3 className="h6 mb-1">
              <Link className="block hover:text-primary" href={` oferta/${city.slug}`}>{city.name}</Link>
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
