const Footer = () => {
  return (
    <footer className="section-footer">
      <div className="secondary-container">
        <div className="flex justify-center items-center">
          <img
            src="/logo.png"
            alt="Infowave Solution"
            className="footer-logo"
          />
        </div>
        <div className="pt-24 flex justify-center items-cente md-s:pt-20 tb-l:hidden">
          <ul className="sitemap">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#about">Discover Us</a>
            </li>
            <li>
              <a href="#choose-us">Why Us ?</a>
            </li>
            <li>
              <a href="#services">Our Services</a>
            </li>
            <li>
              <a href="#contact">Get In Touch</a>
            </li>
          </ul>
        </div>
        <p className="copyright-text">
          Copyright &copy; 2024 Infowave Solutions. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
