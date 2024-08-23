import Hero from "../components/Contact/Hero";
import { hero } from "../data/contact";
import Contact from "../components/common/Contact";
import Socials from "../components/Contact/Socials";
import { Helmet } from "react-helmet";

function ContactUs() {
  return (
    <div>
      <Helmet>
        <title>Contact Zidallie - Get in Touch</title>
        <meta
          name="description"
          content="Contact Zidallie for more information about our transport services for schools and parents, or to inquire about school trips and tours."
        />
        <meta
          name="keywords"
          content="Zidallie, contact us, transport services, school trips, parent transport"
        />
      </Helmet>

      <Hero hero={hero} />
      <Contact />
      <Socials />
    </div>
  );
}

export default ContactUs;
