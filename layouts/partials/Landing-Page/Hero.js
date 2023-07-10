import Image from "next/image";
import Link from "next/link";
import CtaButton from "../../../public/images/landing/cta-button.svg";
import HeroImg from "../../../public/images/landing/hero-jungle.png"

const Hero = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="flex flex-col xl:px-32 items-center text-center gap-6 py-20">
          <h1 className="font-display md:text-display-2xl text-display-lg">
            Spraw, że <span className="italic">Twoja marka</span> rozkwitnie
          </h1>
          <p className="col-span-8 md:text-body-xl text-body-lg font-light text-neutral-700 max-w-[800px]">
            Przekształcamy Twoją firmę w rozpoznawalną markę, tworząc strategie
            marketingowe i wykorzystując skuteczne narzędzia. Realizujemy Twoje unikalne
            pomysły, aby wprowadzić je w życie!{" "}
          </p>
        </div>

      </div>
      <div className="relative">
        <Image
          src={HeroImg}
          alt="Interior Design"
        />
        <Link href="/oferta">
            <Image
              src={CtaButton}
              alt="Get in touch"
              className="absolute xl:left-28 lg:left-[44%] md:left-[42%] left-[35%] -top-16"
            />
        </Link>
      </div>
      <div className="bg-neutral-900">
      <div className="container mx-auto">
        <div className="flex flex-row md:items-center items-start self-auto gap-5 py-6">
  
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default Hero;