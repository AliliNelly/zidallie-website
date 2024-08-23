import Hero from "../components/BlogNews/Hero";
import Blogs from "../components/BlogNews/Blogs";
import Contact from "../components/common/Contact";
import { Helmet } from "react-helmet";

function BlogNews() {
  return (
    <section>
      <Helmet>
        <title>Zidallie Blog - News and Updates</title>
        <meta
          name="description"
          content="Stay updated with the latest news and updates from Zidallie. Read our blog to learn more about our services and industry insights."
        />
        <meta
          name="keywords"
          content="Zidallie, blog, news, updates, transport services, school trips"
        />
      </Helmet>

      <Hero />
      <Blogs />
      <Contact />
    </section>
  );
}

export default BlogNews;
