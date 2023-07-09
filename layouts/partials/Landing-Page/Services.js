/// Page Sections
const Services = () => {

return (
    <section className="pb-20 bg-gray-300 -mt-24">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap">
      <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
          <div className="px-4 py-5 flex-auto">
            <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
            ⭐
            </div>
            <h6 className="text-xl font-semibold">
              Nagradzana Agencja
              </h6>
            <p className="mt-2 mb-4 text-gray-600 justify">
              Jesteśmy doceniani za naszą doskonałą pracę. Nasza agencja zdobyła wiele prestiżowych nagród, które świadczą o naszym profesjonalizmie . Dzielimy się naszymi  umiejętnościami, aby zapewnić naszym klientom najwyższy poziom usług. Razem możemy osiągnąć większe sukcesy i zbudować silną markę.
              </p>
              </div>
        </div>
      </div>

      <div className="w-full md:w-4/12 px-4 text-center">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
          <div className="px-4 py-5 flex-auto">
            <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
            ❤
            </div>
            <h6 className="text-xl font-semibold">
              Darmowe Poprawki
              </h6>
            <p className="mt-2 mb-4 text-gray-600">
              Dbałość o zadowolenie naszych klientów jest dla nas priorytetem. Oferujemy możliwość darmowych poprawek, aby zapewnić Ci pełną satysfakcję z naszych usług. Nasz zespół zawsze stara się przekroczyć oczekiwania klientów i dostarczyć im najwyższą jakość. Dzięki temu możesz być pewien, że Twoje potrzeby zostaną odpowiednio uwzględnione i spełnione.
              </p>
          </div>
        </div>
      </div>

      <div className="pt-6 w-full md:w-4/12 px-4 text-center">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
          <div className="px-4 py-5 flex-auto">
            <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
            👍
            </div>
            <h6 className="text-xl font-semibold">
              Zweryfikowana Firma
              </h6>
            <p className="mt-2 mb-4 text-gray-600">
              Nasza firma przeszła proces weryfikacji, co świadczy o naszym profesjonalizmie i zaufaniu naszych klientów. Działamy zgodnie z najwyższymi standardami i dostarczamy usługi najwyższej jakości. Nasza wiarygodność i solidne doświadczenie sprawiają, że możesz nam zaufać w realizacji Twoich celów marketingowych.
              </p>
          </div>
        </div>
      </div>
    </div>


    <div className="flex flex-wrap items-center mt-32">
      <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
        {/* <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
          <i className="fas fa-user-friends text-xl"></i>
        </div> */}
        <h3 className="text-3xl mb-2 font-semibold leading-normal">
        Zamień swoją wizję w rzeczywistość!
          </h3>
        <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
        Witaj w Twojej agencji reklamowej, która pomoże Ci dotrzeć do szerokiego audytorium i skutecznie promować Twoją
          markę. Działamy w oparciu o nasze wieloletnie doświadczenie i pasję, aby dostarczać kreatywne i innowacyjne
          rozwiązania reklamowe.
          </p>

      </div>

      <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
        <div className="relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded-lg bg-teal-500">
          <img
            alt="..."
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
            className="w-full align-middle rounded-t-lg"
          />
          <blockquote className="relative p-8 mb-4">
            <svg
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 583 95"
              className="absolute left-0 w-full block"
              style={{
                height: "95px",
                top: "-94px"
              }}
            >
              <polygon
                points="-30,95 583,95 583,65"
                className="text-teal-500 fill-current"
              ></polygon>
            </svg>
            <h4 className="text-xl font-bold text-white">
              Usługi Najwyższej Jakości
              </h4>
            <p className="text-md font-light mt-2 text-white">
              Twoja marka zasługuje na wyjątkową promocję i profesjonalne podejście. Pozwól nam pomóc Ci osiągnąć sukces i wyróżnić się spośród konkurencji.
              </p>
          </blockquote>
        </div>
      </div>

    </div>
  </div>
</section>
)};

export default Services;