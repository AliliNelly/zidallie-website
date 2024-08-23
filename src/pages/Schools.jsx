import Hero from "../components/common/Hero";
import WhyUs from "../components/common/WhyUs";
import { hero, what_we_offer, faq } from "../data/schools";
import Services from "../components/Schools/Services";
import FAQ from "../components/common/FAQ";
import Contact from "../components/common/Contact";
import { Helmet } from "react-helmet";

function Schools() {
  return (
    <div>
      <Helmet>
        <title>School Transport Services - Zidallie</title>
        <meta
          name="description"
          content="Zidallie provides dedicated and reliable transport services for schools, ensuring safe and punctual travel for students."
        />
        <meta
          name="keywords"
          content="Zidallie, school transport, student transport, school travel services"
        />
      </Helmet>

      <Hero hero={hero} />
      <WhyUs text={what_we_offer} />
      <Services />
      <FAQ questions={faq} />
      <Contact />
    </div>
  );
}

export default Schools;
