import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/common/logo.svg";

function Mobile() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className="w-full z-50">
      {/* Sidebar */}
      <div
        className={`absolute left-0 top-0 shadow bg-white w-72 min-h-screen  transition-transform transform  ease-in-out duration-300 ${
          open ? "" : "-translate-x-full"
        }`}
        id="sidebar">
        {/* Your Sidebar Content */}
        <div className="flex flex-col items-center pt-5">
          <Link to="/" className="mb-5">
            <img src={logo} alt="logo image" height="60" width="110" />
          </Link>
          <nav className="flex flex-col items-center mt-5" onClick={handleOpen}>
            <Link to="/" className="mb-5 hover:text-slate-300">
              Home
            </Link>
            <Link to="/schools" className="mb-5 hover:text-slate-300">
              Schools
            </Link>
            <Link to="/parents" className="mb-5 hover:text-slate-300">
              Parents
            </Link>
            <Link to="/about" className="mb-5 hover:text-slate-300">
              Who We Are
            </Link>
            <Link to="/blog" className="mb-5 hover:text-slate-300">
              Blog/News
            </Link>
            <Link to="/tours" className="mb-5 hover:text-slate-300">
              Zidallie Tours
            </Link>

            <button className="inline-flex items-center border-0 py-1 px-3 text-white bg-primary focus:outline-none hover:bg-secondary hover:text-content rounded text-base mt-4 md:mt-0">
              <Link to="/contact">Contact Us</Link>
            </button>
          </nav>
        </div>
      </div>
      {/* Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Navbar */}
        <div className="bg-white shadow w-full">
          <div className="container mx-auto">
            <div className="flex justify-between items-center py-4 px-2">
              <Link to="/" className="flex title-font font-medium items-center">
                <img src={logo} alt="logo image" height="60" width="80" />
              </Link>
              <button
                className="text-content hover:text-muted"
                onClick={handleOpen}
                aria-label="Open Navigation Menu">
                <svg
                  height="30"
                  width="30"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mobile;
