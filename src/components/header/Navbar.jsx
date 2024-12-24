import { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { HiOutlineMail } from "react-icons/hi";

const Navbar = () => {
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  return (
    <section>
      <div className="container">
        <div className="flex justify-between items-center">
          <div>
            <img
              src="/logo.png"
              alt="Infowave Solution Logo"
              className="logo-img"
            />
          </div>
          <nav className="md-s:hidden">
            <ul className="menu">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#about">Discover Us</a>
              </li>
              <li>
                <a href="#choose-us">Why Us?</a>
              </li>
              <li>
                <a href="#services">Our Services</a>
              </li>
              <li>
                <a href="#contact">Get In Touch</a>
              </li>
            </ul>
          </nav>
          <div className="flex justify-center items-center md-s:hidden">
            <div className="flex items-center gap-6 border-l-2 pl-6 border-[#6d6d6d] xl-s:pl-4 lg-s:gap-4">
              <div>
                <a href="mailto:sales@infowavesolutions.com">
                  <HiOutlineMail className="h-12 w-12 stroke-blue-400 xl-s:h-10 xl-s:w-10" />
                </a>
              </div>
              <div>
                <a className=" cursor-default">Have Any Question ?</a>
                <a
                  href="mailto:sales@infowavesolutions.com"
                  className="block text-[1.8rem] font-semibold transition-all duration-300 hover:text-purple-800 xl-s:text-[1.6rem] lg-s::text-[1.5rem]"
                >
                  sales@infowavesolutions.com
                </a>
              </div>
            </div>
          </div>
          <div className="hidden md-s:block">
            <span
              className={`hamburger ${isMobileMenu ? "active-menu" : ""}`}
              onClick={() => setIsMobileMenu(!isMobileMenu)}
            >
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
        </div>
      </div>
      <div
        className={`mobile-menu-cover transition-all duration-300 ${
          isMobileMenu ? "animate-mb-cover" : ""
        }`}
        onClick={() => setIsMobileMenu(!isMobileMenu)}
      ></div>
      <div
        className={`hidden md-s:block mobile-menu ${
          isMobileMenu ? "animate-mb-menu" : ""
        }`}
      >
        <div className="mb-4">
          <GoArrowRight
            className="h-10 w-10 fill-[#1b1d21] cursor-pointer"
            onClick={() => setIsMobileMenu(!isMobileMenu)}
          />
        </div>
        <div>
          <ul className="inner-menu">
            <li>
              <a href="#" onClick={() => setIsMobileMenu(!isMobileMenu)}>
                home
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => setIsMobileMenu(!isMobileMenu)}>
                discover us
              </a>
            </li>
            <li>
              <a
                href="#choose-us"
                onClick={() => setIsMobileMenu(!isMobileMenu)}
              >
                why us?
              </a>
            </li>
            <li>
              <a
                href="#services"
                onClick={() => setIsMobileMenu(!isMobileMenu)}
              >
                our services
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setIsMobileMenu(!isMobileMenu)}>
                get in touch
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
