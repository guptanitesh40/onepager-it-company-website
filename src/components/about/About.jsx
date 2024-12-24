import { IoSettings } from "react-icons/io5";
import { MdVerified } from "react-icons/md";

const About = () => {
  return (
    <section id="about" className="section-about overflow-x-hidden">
      <div className="secondary-container">
        <div className="flex justify-between xl-s:items-center md-s:flex-col md-s:gap-12">
          <div className="basis-1/2 xl-s:basis-[48.5%]">
            <div className="pr-36 xl-s:pr-0">
              <div className="mb-6 space-y-4 md-s:space-y-2">
                <span className="sub-title">{"// about company"}</span>
                <h2 className="main-heading">
                  Your Partner for Software Innovation
                </h2>
              </div>
              <div className="mb-8">
                <p className="text-description">
                  Techyon Solutions is your trusted partner for crafting
                  cutting-edge software solutions that propel your business to
                  new heights.
                  <br />
                  <br />
                  We collaborate with industry leaders, aspiring startups, and
                  ambitious entrepreneurs alike, providing a comprehensive suite
                  of services to bring your software dreams to life.
                </p>
              </div>
              <div className="flex items-center justify-center tb-l:flex-col">
                <div className="basis-1/2 px-8 group lg-s:px-6 md-s:px-8">
                  <span className="inline-block py-8 lg-s:py-6 md-s:py-8">
                    <MdVerified className="inline-block h-[4.5rem] w-[4.5rem] fill-[#7141b1]" />
                  </span>
                  <h5 className="text-[1.8rem] font-semibold mb-8 lg-s:text-[1.7rem] lg-s:mb-6 md-s:text-[1.8rem] md-s:mb-8">
                    Unwavering Support
                  </h5>
                  <div className="line-box"></div>
                  <p className="text-description mb-8 leading-10 lg-s:mb-6 md-s:mb-8">
                    Our team of passionate software architects, developers, and
                    innovators is dedicated to exceeding your expectations.
                  </p>
                </div>
                <div className="basis-1/2 px-8 group lg-s:px-6 md-s:px-8">
                  <span className="inline-block py-8 lg-s:py-6 md-s:py-8">
                    <IoSettings className="inline-block h-[4.5rem] w-[4.5rem] fill-[#7141b1]" />
                  </span>
                  <h5 className="text-[1.8rem] font-semibold mb-8 lg-s:text-[1.7rem] lg-s:mb-6 md-s:text-[1.8rem] md-s:mb-8">
                    Unwavering Support
                  </h5>
                  <div className="line-box"></div>
                  <p className="text-description mb-8 leading-10 lg-s:mb-6 md-s:mb-8">
                    Our team of passionate software architects, developers, and
                    innovators is dedicated to exceeding your expectations.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="basis-1/2 xl-s:basis-[48.5%] flex items-start justify-center md-s:hidden">
            <img
              src="/aboutpage-image.png"
              alt="About Image"
              className="ab-section-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
