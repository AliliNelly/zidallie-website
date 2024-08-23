import { Link } from "react-router-dom";
import Attribute from "./Attribute";
function Footer() {
  let year = new Date().getFullYear();
  return (
    <footer className="flex flex-col space-y-4 justify-center mt-10  bg-content text-white py-4">
      <nav className=" flex flex-wrap items-center text-base justify-center gap-y-4 md:gap-y-0">
        <Link to="/" className="mr-5 hover:text-slate-300">
          Home
        </Link>
        <Link to="/schools" className="mr-5 hover:text-slate-300">
          Schools
        </Link>
        <Link to="/parents" className="mr-5 hover:text-slate-300">
          Parents
        </Link>

        <Link to="/about" className="mr-5 hover:text-slate-300">
          About Us
        </Link>

        <Link to="/blog" className="mr-5 hover:text-slate-300">
          Blog/News
        </Link>

        <Link to="/tours" className="mr-5 hover:text-slate-300">
          Zidallie Tours
        </Link>

        <Link to="/contact" className="mr-5 hover:text-slate-300">
          Contact Us
        </Link>
      </nav>
      <p className="text-center font-medium">
        © {year} . All rights reservered.
      </p>
      <Attribute />
    </footer>
  );
}

export default Footer;
