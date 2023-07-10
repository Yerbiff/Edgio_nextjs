import Hero from "@layouts/partials/Landing-Page/Hero"
import Featured from "@layouts/partials/Landing-Page/Featured";
import Metrics from "@layouts/partials/Landing-Page/metrics";

const LandingPage = () => {

  return (
    <div>
      <Hero />
      <Featured/>
      <Metrics/>
    </div>
  
  );
}

export default LandingPage;
