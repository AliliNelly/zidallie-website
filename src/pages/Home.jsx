import Hero from "../components/common/Hero";
import WhyUs from "../components/common/WhyUs";
import Services from "../components/Home/Services";
import { hero, why_us } from "../data/home";
import Achievements from "../components/Home/Achievements";
import Contact from "../components/common/Contact";
import { Helmet } from "react-helmet";
import Testimonials from "../components/Home/Testimonials";
import VideosTestimonials from "../components/Home/VideosTestimonials";

function Home() {
  return (
    <div className="">
      <Helmet>
        <title>
          Zidallie - Reliable Transport Services for Schools and Parents
        </title>
        <meta
          name="description"
          content="Zidallie offers safe and reliable transport services for schools and parents. We also organize school trips and tours. Discover our services today!"
        />
        <meta
          name="keywords"
          content="Zidallie, transport services, school transport, parents transport, school trips, school tours"
        />
      </Helmet>

      <Hero hero={hero} />
      <Achievements />
      <WhyUs text={why_us} />
      <Services />
      <Testimonials />
      <VideosTestimonials />
      <Contact />
    </div>
  );
}

export default Home;
