import { FaReact } from "react-icons/fa6";
import Connect from "../connect/Connect";
import { ImMobile } from "react-icons/im";
import { GiComputerFan } from "react-icons/gi";
import { RiFileSettingsLine } from "react-icons/ri";
import { VscGraph } from "react-icons/vsc";
import { TbSteam } from "react-icons/tb";

const Service = () => {
  return (
    <section
      id="services"
      // className="section-service relative mb:pt-0 mb-l:mt-[75rem]"
      className="section-service relative"
    >
      <div className="secondary-container">
        <div>
          <div className="flex flex-col items-start mb-16 tb-l:gap-3">
            <span className="sub-title">{"// our service"}</span>
            <h2 className="main-heading">
              Your One-Stop Shop for All
              <br className="tb-l:hidden" />
              Your IT Needs
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-x-16 gap-y-24 sr-card pb-20 md-s:grid-cols-2 md-s:gap-y-20 md-s:gap-x-20 sm-s:gap-x-16 sm-s:gap-y-16 tb-l:grid-cols-1">
          <div className="flex items-start gap-8 group mb:gap-6">
            <div>
              <span>
                <FaReact className="h-20 w-20 mb:h-16 mb:w-16 fill-black group-hover:fill-[#9b51e0] transition-all duration-200" />
              </span>
            </div>
            <div>
              <h5>Web Development</h5>
              <p>
                We go beyond just coding. Our experienced developers craft
                dynamic, user-friendly websites that not only look great but
                also deliver exceptional results seamlessly.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-8 group mb:gap-6">
            <div>
              <span>
                <ImMobile className="h-20 w-20 mb:h-16 mb:w-16 fill-black group-hover:fill-[#9b51e0] transition-all duration-200" />
              </span>
            </div>
            <div>
              <h5>Mobile Development</h5>
              <p>
                Need a cutting-edge mobile app? {"We've"} got you covered. Our
                mobile development team builds robust, user-centric apps that
                seamlessly integrate with your existing systems.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-8 group mb:gap-6">
            <div>
              <span>
                <GiComputerFan className="h-20 w-20 mb:h-16 mb:w-16 fill-black group-hover:fill-[#9b51e0] transition-all duration-200" />
              </span>
            </div>
            <div>
              <h5>UI/UX Design</h5>
              <p>
                We understand the importance of intuitive and engaging user
                interfaces. Our UI/UX design experts craft user-centric
                interfaces that make your software a joy to use.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-8 group mb:gap-6">
            <div>
              <span>
                <RiFileSettingsLine className="h-20 w-20 mb:h-16 mb:w-16 fill-black group-hover:fill-[#9b51e0] transition-all duration-200" />
              </span>
            </div>
            <div>
              <h5>QA & Testing</h5>
              <p>
                Our meticulous QA specialists meticulously test your software at
                every stage, ensuring a flawless user experience and a bug-free
                product launch.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-8 group mb:gap-6">
            <div>
              <span>
                <VscGraph className="h-20 w-20 mb:h-16 mb:w-16 fill-black group-hover:fill-[#9b51e0] transition-all duration-200" />
              </span>
            </div>
            <div>
              <h5>IT Counsultancy</h5>
              <p>
                Our team of IT consultants provides strategic guidance to help
                you optimise your workflow, implement innovative technologies,
                and streamline your app portfolio.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-8 group mb:gap-6">
            <div>
              <span>
                <TbSteam className="h-20 w-20 mb:h-16 mb:w-16 fill-black group-hover:stroke-[#9b51e0] transition-all duration-200" />
              </span>
            </div>
            <div>
              <h5>Dedicated Team</h5>
              <p>
                We assign you a dedicated team of experts who understand your
                project intimately, ensuring seamless communication and
                efficient development.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="connect-section-adjustment">
        <Connect />
      </div>
    </section>
  );
};

export default Service;
