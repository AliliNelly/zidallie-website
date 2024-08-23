import Hero from "../components/About/Hero";
import Mission from "../components/About/Mission";
import Founder from "../components/About/Founder";
import Team from "../components/About/Team";
import Contact from "../components/common/Contact";
import { Helmet } from "react-helmet";

function AboutUs() {
  return (
    <div>
      <Helmet>
        <title>About Zidallie - Our Mission and Vision</title>
        <meta
          name="description"
          content="Learn more about Zidallie, our mission, vision, and the team dedicated to providing reliable transport services for schools and parents."
        />
        <meta
          name="keywords"
          content="Zidallie, about us, mission, vision, transport services"
        />
      </Helmet>

      <Hero />
      <Mission />
      <Founder />
      <Team />
      <Contact />
    </div>
  );
}

export default AboutUs;
