/// Page Sections
const Featured = () => {

return (
    <section className="relative py-20">
<div
  className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
  style={{ height: "80px" }}
>
  <svg
    className="absolute bottom-0 overflow-hidden"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    version="1.1"
    viewBox="0 0 2560 100"
    x="0"
    y="0"
  >
    <polygon
      className="text-white fill-current"
      points="2560 0 2560 100 0 100"
    ></polygon>
  </svg>
</div>

<div className="container mx-auto px-4">
  <div className="items-center flex flex-wrap">
    <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
      <img
        alt="..."
        className="max-w-full rounded-lg shadow-lg"
        src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
      />
    </div>
    <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
      <div className="md:pr-12">
        {/* <div className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300">
          <i className="fas fa-rocket text-xl"></i>
        </div> */}
        <h3 className="text-3xl font-semibold">
        Dlaczego wybrać naszą agencję?
            </h3>
        <p className="mt-4 text-lg leading-relaxed text-gray-600">
        Nasz zespół kreatywnych projektantów, copywriterów i specjalistów od
        marketingu doskonale rozumie, jak przyciągnąć uwagę Twojej grupy docelowej. Tworzymy spersonalizowane
        strategie, które wyróżniają Twoją markę spośród konkurencji.
            </p>
        <ul className="list-none mt-6">
          <li className="py-2">
            <div className="flex items-center">
              <div>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200 mr-3">
                  <i className="fas fa-fingerprint">-</i>
                </span>
              </div>
              <div>
                <h5 className="text-gray-600">
                  Zajmujemy się różnorodnymi kanałami reklamowymi
                </h5>
              </div>
            </div>
          </li>
          <li className="py-2">
            <div className="flex items-center">
              <div>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200 mr-3">
                <i className="fas fa-fingerprint">-</i>
                </span>
              </div>
              <div>
                <h5 className="text-gray-600">Skuteczne rezultaty</h5>
              </div>
            </div>
          </li>
          <li className="py-2">
            <div className="flex items-center">
              <div>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200 mr-3">
                <i className="fas fa-fingerprint">-</i>
                </span>
              </div>
              <div>
                <h5 className="text-gray-600">Indywidualne podejście</h5>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
</section>
)};

export default Featured;