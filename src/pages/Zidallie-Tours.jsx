import Hero from "../components/common/Hero";
import { hero } from "../data/tours";
import WhyUs from "../components/ZidallieTours/WhyUs";
import Buses from "../components/ZidallieTours/Buses";
import Contact from "../components/common/Contact";
import { Helmet } from "react-helmet";

function ZidallieTours() {
  return (
    <div>
      <Helmet>
        <title>Zidallie Tours - Exciting School Trips</title>
        <meta
          name="description"
          content="Discover exciting school trips with Zidallie Tours. We offer safe and enjoyable tours for students to various destinations."
        />
        <meta
          name="keywords"
          content="Zidallie, school trips, Zidallie Tours, student tours, educational tours"
        />
      </Helmet>

      <Hero hero={hero} />
      <WhyUs />
      <Buses />
      <Contact />
    </div>
  );
}

export default ZidallieTours;
