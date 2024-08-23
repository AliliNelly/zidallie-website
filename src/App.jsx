import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Schools from "./pages/Schools";
import Parents from "./pages/Parents";
import AboutUs from "./pages/Who-We-are";
import BlogNews from "./pages/Blog-News";
import ZidallieTours from "./pages/Zidallie-Tours";
import ContactUs from "./pages/Contact-Us";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import ScrollUp from "./components/common/ScrollUp";
import ScrollToTopButton from "./components/common/ScrollBtn";

function App() {
  return (
    <main
      className={`font-poppins bg-bkg text-content min-h-screen max-w-7xl mx-auto`}>
      <section className=" ">
        <BrowserRouter>
          <Navbar />
          <ScrollUp />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/schools" element={<Schools />} />
            <Route exact path="/parents" element={<Parents />} />
            <Route exact path="/about" element={<AboutUs />} />
            <Route exact path="/blog" element={<BlogNews />} />
            <Route exact path="/tours" element={<ZidallieTours />} />
            <Route exact path="/contact" element={<ContactUs />} />
          </Routes>
          <Footer />
          <ScrollToTopButton />
        </BrowserRouter>
      </section>
    </main>
  );
}

export default App;
