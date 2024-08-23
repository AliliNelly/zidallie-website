import { createContext, useState, useEffect } from "react";

const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const data = {
    isMobile,
    setIsMobile,
    windowWidth,
  };
  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  );
};

export { GlobalContextProvider, GlobalContext };
