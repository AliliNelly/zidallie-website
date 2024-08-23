import Hero from "../components/common/Hero";
import { hero, what_we_offer, faq } from "../data/parents";
import WhyUs from "../components/common/WhyUs";
import Services from "../components/Parents/Services";
import FAQ from "../components/common/FAQ";
import Contact from "../components/common/Contact";
import { Helmet } from "react-helmet";

function Parents() {
  return (
    <div>
      <Helmet>
        <title>Transport Services for Parents - Zidallie</title>
        <meta
          name="description"
          content="Zidallie offers reliable transport services for parents, ensuring your children travel safely to and from school."
        />
        <meta
          name="keywords"
          content="Zidallie, parent transport, safe transport for children, school transport for parents"
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

export default Parents;
