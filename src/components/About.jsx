import CountUp from "react-countup";
import aboutImageStackBottom from "../assets/images/homepage-imgs/361568338_218556881147586_3787286665415119075_n.jpg";
import aboutImageStackTop from "../assets/images/homepage-imgs/363276203_208065555220783_6188811700696390263_n.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faUser,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <div className="about-wrapper flex justify-center items-center p-10 gap-8 bg-[#DFDCDB]">
      <div className="about-text text-left max-w-prose">
        <span className="text-lg font-medium mb-4 font-rubik text-shark-500">
          About Us
        </span>
        <h2 className="text-3xl font-semibold uppercase text-shark-950 font-rubik pb-4 mt-2">
          We are your one stop shop for fashion since 2018.
        </h2>
        <div className="divider border-b-4 border-b-black border-solid w-24 leading-5"></div>
        <p className="mt-10 font-robotoMono tracking-wide text-shark-900 text-lg">
          Mauris sed urna ullamcorper, rutrum diam eu, pretium libero. Nulla
          tincidunt dolor ac vehicula gravida. Phasellus consequat imperdiet
          condimentum. Nunc ultricies ipsum et est ornare finibus. Nullam semper
          est lorem, quis condimentum magna ornare sed. Praesent sem erat,
          fringilla et vulputate in, mattis non lorem.
        </p>
        <div className="flex justify-between items-center py-2">
          <div className="flex flex-col gap-5 justify-between">
            <div className="counter-wrapper grid grid-cols-3 text-shark-950">
              <div className="flex gap-5 items-center py-4">
                <FontAwesomeIcon icon={faPaperPlane} size="2xl" />
                <div className="counter flex-col gap-2 ">
                  <CountUp
                    end={120}
                    duration={4}
                    enableScrollSpy
                    suffix="K"
                    className="font-semibold text-2xl font-rubik"
                  />
                  <p className="mt-2 text-shark-800 font-normal font-rubik text-sm">
                    ORDERS SHIPPED
                  </p>
                </div>
              </div>
              <div className="flex gap-5 items-center p-4">
                <FontAwesomeIcon icon={faUser} size="2xl" />
                <div className="counter flex-col gap-2 ">
                  <CountUp
                    end={97}
                    duration={4}
                    enableScrollSpy
                    suffix="%"
                    className="font-semibold font-rubik text-2xl"
                  />
                  <p className="mt-2 text-shark-800 font-normal font-rubik text-sm">
                    HAPPY CUSTOMERS
                  </p>
                </div>
              </div>
              <div className="flex gap-5 items-center p-4">
                <FontAwesomeIcon icon={faGlobe} size="2xl" />
                <div className="counter flex-col gap-2">
                  <CountUp
                    end={80}
                    duration={4}
                    enableScrollSpy
                    className="font-semibold font-rubik text-2xl"
                  />
                  <p className="mt-2 text-shark-800 font-normal font-rubik text-sm">
                    COUNTRIES
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="bg-shark-950 text-alabaster-50 font-robotoMono font-normal text-sm tracking-wide rounded-none px-8 py-2 disabled:bg-shark-200 disabled:text-shark-700 hover:bg-shark-800 active:bg-shark-700 mb-6">
          LEARN MORE
        </button>
      </div>
      <div className="about-img-stack grid relative grid-cols-12 p-8">
        <div className="img-stack-item img-stack-top grid row-start-1 col-start-1 col-end-[span-9] h-4/6 w-2/3">
          <img src={aboutImageStackBottom} />
        </div>
        <div className="img-stack-item img-stack-bottom grid col-start-7 col-end-[-1] row-start-1 pt-[50%]">
          <img src={aboutImageStackTop} />
        </div>
      </div>
    </div>
  );
};

export default About;
