import { FaComputer } from "react-icons/fa6";
import { HiMiniCodeBracketSquare } from "react-icons/hi2";
import { MdSecurity } from "react-icons/md";
import { PiChartBarFill } from "react-icons/pi";
import Stats from "../stats/Stats";

const ChooseUs = () => {
  return (
    <section id="choose-us" className="section-choose-us">
      <div className="container relative">
        <div>
          <div className="mb-14 flex flex-col items-center justify-center">
            <span className="sub-title ">{"// why choose us"}</span>
            <h2 className="main-heading text-white">
              We don&apos;t just build software, we cultivate innovation.
            </h2>
          </div>
          <div className="flex gap-24 max:gap-16 xl-s:gap-12 lg-s:gap-8 md-s:flex-wrap md-s:justify-between md-s:gap-12 sm-s:gap-10">
            <div className="service-card">
              <span className="big-number">01</span>
              <div className="content-box">
                <h5>Product Design</h5>
                <p className="text-description leading-[3rem]">
                  We goes beyond the visual, we help you prototype, test and
                  validate your ideas before diving into development. This
                  process ensures your software is built on a solid foundation,
                  solving real problems.
                </p>
              </div>
              <div className="card-icon">
                <FaComputer className="mt-14 ml-14 h-20 w-20 stroke-black transition-all duration-300" />
              </div>
            </div>

            <div className="service-card">
              <span className="big-number">02</span>
              <div className="content-box">
                <h5>Development</h5>
                <p className="description">
                  Once your idea is refined, our team of experienced developers
                  brings your vision to life. We leverage cutting-edge
                  technologies and agile methodologies to create robust,
                  scalable software solutions.
                </p>
              </div>
              <div className="card-icon">
                <HiMiniCodeBracketSquare className="mt-14 ml-14 h-20 w-20 stroke-black transition-all duration-300" />
              </div>
            </div>

            <div className="service-card">
              <span className="big-number">03</span>
              <div className="content-box">
                <h5>Product Design</h5>
                <p className="description">
                  Data is the lifeblood of any successful software solution. Our
                  data analytics expertise helps you extract valuable insights,
                  allowing you to optimize your {"software's"} performance and
                  user experience.
                </p>
              </div>
              <div className="card-icon">
                <PiChartBarFill className="mt-14 ml-14 h-20 w-20 stroke-black transition-all duration-300" />
              </div>
            </div>

            <div className="service-card">
              <span className="big-number">04</span>
              <div className="content-box">
                <h5>Cyber Security</h5>
                <p className="description">
                  Cybersecurity is paramount in {"today's"} digital landscape.
                  Techyon Solutions ensures your software is built with robust
                  cybersecurity measures in place, safeguarding your data and
                  user trust
                </p>
              </div>
              <div className="card-icon">
                <MdSecurity className="mt-14 ml-14 h-20 w-20 stroke-black transition-all duration-300" />
              </div>
            </div>
          </div>
        </div>

        <div className="stats-container">
          <Stats />
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
