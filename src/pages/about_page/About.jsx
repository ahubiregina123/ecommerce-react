import { assets } from "../../assets/assets";
import SubscribeNow from "../../components/SubscribeNow";
import AboutCard from "./AboutCard";

const About = () => {
  return (
    <section>
      <div className="flex justify-center items-center gap-2 ">
        <h1 className="uppercase text-[30px] text-center my-3">
          about{" "}
          <label className="font-medium" htmlFor="">
            us
          </label>
        </h1>
        <img className="w-[50px] h-[3px]" src={assets.rectangle_1} alt="" />
      </div>
      <div className="lg:flex lg:gap-15 block ">
        <div className="w-full">
          <img src={assets.about_img} alt="" />
        </div>
        <div className="flex flex-col  justify-center gap-6">
          <p className="text-[16px]">
            Forever Was Born Out Of A Passion For Innovation And Desire to
            Revolutionize The Way People Shop Online. Our Journey Began With A
            Simple Idea: To Provide A Platform Where Customers Can Easily
            Discover, Explore, And Purchase A Wide Range Of Products From The
            Comfort Of Their Homes.
          </p>
          <p className="text-[16px]">
            Since Our Inception, We've Worked Tirelessly To Curate A Diverse
            Selection Of High- Quality Products That Cater To Every Taste and
            Preference. From Fashion And Beauty To Electronics And Home
            Essentials, We Offer An Extensive Collection Sourced From Trusted
            Brands And Suppliers.
          </p>
          <p className="font-semibold text-[18px]">Our Mission</p>
          <p className="text-[16px]">
            Our Mission At Forever Is To Empower Customers With Choice,
            Convenience, And Confidence. We're Dedicated To Providing A Seamless
            Shopping Experience That Exceeds Expectations, From Browsing And
            Ordering To Delivery And Beyond
          </p>
        </div>
      </div>
      <div className="my-10">
        <div className="flex items-center gap-2">
          <h2 className="text-[30px] my-3 uppercase flex gap-1 ">
            why{" "}
            <label className="font-medium" htmlFor="">
              choose us
            </label>{" "}
          </h2>
          <img className="w-[50px] h-[3px]" src={assets.rectangle_1} alt="" />
        </div>
        <div className="md:block lg:flex">
          <AboutCard
            title="quality assurance:"
            description="We Meticulously Select And vet Each Product To Ensure It Meets Our
        Stringent Quality Standards."
          />
          <AboutCard
            title="convenience"
            description="With Our User Friendly Interface And Hassle-Free Ordering Process, Shopping Has Never Been Easier."
          />
          <AboutCard
            title="expectional customer service"
            description="Our Team Of Dedicated Professionala Is Here To Assist Ypu The Way, Ensuring Your Satisfication Is Our Top Priority."
          />
        </div>
      </div>
      <SubscribeNow />
    </section>
  );
};
export default About;
