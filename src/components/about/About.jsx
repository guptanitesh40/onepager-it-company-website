import { IoSettings } from "react-icons/io5";
import { MdVerified } from "react-icons/md";

const About = () => {
  return (
    <section id="about" className="section-about overflow-x-hidden">
      <div className="container ">
        <div className="expand flex">
          <div className="flex-[0_0_50%] px-6">
            <div className="pr-28">
              <div className="mb-6">
                <span className="sub-title">{"// about company"}</span>
                <h2 className="main-heading">
                  Your Partner for Software Innovation
                </h2>
              </div>
              <div className="">
                <p className="description mb-8">
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
              <div className="flex">
                <div className="flex-[0_0_50%] px-8 group">
                    <span className="inline-block py-8">
                        <MdVerified className="inline-block h-[4.5rem] w-[4.5rem] fill-blue-950"/>
                    </span>
                    <h5 className="text-[1.8rem] font-semibold mb-8">Unwavering Support</h5>
                    <div className="line-box"></div>
                    <p className="description mb-8">
                        Our team of  passionate software architects, developers, and innovators is dedicated to exceeding your expectations.
                    </p>
                </div>
                <div className="flex-[0_0_50%] px-8 group">
                    <span className="inline-block py-8">
                        <IoSettings className="inline-block h-[4.5rem] w-[4.5rem] fill-blue-950"/>
                    </span>
                    <h5 className="text-[1.8rem] font-semibold mb-8">Unwavering Support</h5>
                    <div className="line-box"></div>
                    <p className="description mb-8">
                        Our team of  passionate software architects, developers, and innovators is dedicated to exceeding your expectations.
                    </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-[0_0_50%] px-6">
            <img src="/aboutpage-image.png" alt="About Image" className="ab-section-image"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
