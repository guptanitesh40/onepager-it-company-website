import { HiOutlineMail } from "react-icons/hi";

const Navbar = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between items-center">
          <div>
            <img src="/logo.png" alt="Infowave Solution" className="logo-img"/>
          </div>
          <div>
            <ul className="menu">
                <li><a href="#">Home</a></li>
                <li><a href="#about">Discover Us</a></li>
                <li><a href="#choose-us">Why Us?</a></li>
                <li><a href="#services">Our Services</a></li>
                <li><a href="#contact">Get In Touch</a></li>
            </ul>
          </div>
          <div className="flex justify-center items-center">
            <div className="flex items-center gap-6 border-l-2 pl-6 border-[#6d6d6d]">
                <div>
                    <a href="mailto:virdhoriya@gmail.com">
                        <HiOutlineMail className="h-12 w-12 stroke-blue-400" />
                    </a>
                </div>
                <div>
                    <a className="block text-[1.4rem] font-semibold pb-1">Have Any Question ?</a>
                    <a href="mailto:virdhoriya@gmail.com" className="block text-[1.8rem] font-semibold transition-all duration-300 hover:text-[#43baff]">virdhoriya@gmail.com</a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
