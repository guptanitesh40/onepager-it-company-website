import { useState, useEffect, useRef } from "react";
import Navbar from "./Navbar";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        if (window.scrollY > headerRef.current.offsetHeight) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className={`${
        isSticky ? "sticky top-0 z-[300] shadow-md bg-white" : ""
      } transition-all duration-300`}
    >
      <Navbar />
    </header>
  );
};

export default Header;
