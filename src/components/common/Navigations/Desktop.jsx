import { Link } from "react-router-dom";
import logo from "../../../assets/common/logo.svg";

function Desktop() {
  return (
    <div className=" px-3 py-2  flex flex-col md:flex-row items-center justify-between bg-white">
      <Link to="/" className="flex title-font font-medium items-center">
        <img src={logo} alt="logo image" height="60" width="110" />
      </Link>
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

        <section className="group relative">
          <p className="mr-5 hover:text-muted flex items-center">
            Company
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-chevron-down ml-1"
              viewBox="0 0 16 16">
              <path
                fillRule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
              />
            </svg>
          </p>
          <div className="absolute left-0 w-40   origin-top-left bg-white divide-y divide-gray-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
            <div className="py-1">
              <Link
                to="/about"
                className=" hover:text-muted block px-4 py-2 text-sm hover:bg-gray-100 ">
                Who We Are
              </Link>

              <Link
                to="/blog"
                className=" hover:text-muted block px-4 py-2 text-sm hover:bg-gray-100">
                Blog/News
              </Link>
            </div>
          </div>
        </section>

        <Link to="/tours" className="mr-5 hover:text-slate-300">
          Zidallie Tours
        </Link>

        <button className="inline-flex items-center border-0 py-2 px-4 ml-1 text-white bg-primary focus:outline-none hover:bg-secondary hover:text-content rounded text-base mt-4 md:mt-0">
          <Link to="/contact">Contact Us</Link>
        </button>
      </nav>
    </div>
  );
}

export default Desktop;
