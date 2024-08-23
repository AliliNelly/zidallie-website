const Sitemap = require("@snaddyvitch-dispenser/react-router-sitemap").default;
//website routes
const routes = [
  { path: "/" },
  { path: "/schools" },
  { path: "/parents" },
  { path: "/about" },
  { path: "/blog" },
  { path: "/tours" },
  { path: "/contact" },
];

// Define the URL for your website
const websiteUrl = "https://zidallie.co.ke";

require("babel-register")({
  presets: ["es2015", "react"],
});

function generateSitemap() {
  return new Sitemap(routes).build(websiteUrl).save("./public/sitemap.xml");
}

try {
  generateSitemap();
  console.info("Sitemap Generated");
} catch (err) {
  console.info("Error while generating sitemap");
  console.info(err);
} finally {
  process.exit();
}
