import Hero from "@layouts/partials/Landing-Page/Hero"
import Services from "@layouts/partials/Landing-Page/Services";
import Finisher from "@layouts/partials/Landing-Page/Finisher";
import Contact from "@layouts/partials/Landing-Page/Contact";
import Featured from "@layouts/partials/Landing-Page/Featured";

const LandingPage = () => {

  return (
    <div>
      <Hero />
      <Services/>
      <Featured/>
      <Finisher/>
      <Contact/>
    </div>
  
  );
}

export default LandingPage;
