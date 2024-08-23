import Desktop from "./Navigations/Desktop";
import Mobile from "./Navigations/Mobile";
import useGlobalContext from "../../hooks/useGlobalContext";

function Navbar() {
  const { isMobile } = useGlobalContext();
  return (
    <header className="sticky top-0 left-0 w-full" style={{ zIndex: 1000 }}>
      {isMobile ? <Mobile /> : <Desktop />}
    </header>
  );
}

export default Navbar;
