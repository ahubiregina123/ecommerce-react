import { assets } from "../../assets/assets";
import Divider from "../../components/Divider";
import SubscribeNow from "../../components/SubscribeNow";
import { TextDivider } from "../../components/TextDivider";

export const Contact = () => {
  return (
    <section className="my-6 flex flex-col">
      <div className="flex gap-1 my-2 justify-center items-center ">
        <h1 className="text-[30px] uppercase">
          contact{" "}
          <label className="font-medium" htmlFor="">
            us
          </label>
        </h1>
        <img className="w-[50px] h-[3px]" src={assets.rectangle_1} alt="" />
      </div>
      <div className="lg:flex block gap-15">
        <div className="basis-[40%] my-2">
          <img className="w-full" src={assets.contact_img} alt="" />
        </div>
        <div className="basis-[60%] flex flex-col gap-4 justify-center ">
          <h2 className="uppercase font-medium text-[18px]">our store</h2>
          <div>
            <p className="text-[15px]">54709 Willims Station</p>
            <p className="text-[15px]">Suite 350, Washington, USA</p>
          </div>
          <div>
            <p className="text-[15px]">Tel: (415) 555-0132</p>
            <p className="text-[15px]">Email: greatstackdev@gmail.com</p>
          </div>
          <h2 className="uppercase font-medium text-[18px]">
            careers at forever
          </h2>
          <p className="text-[15px]">
            Learn more about our teams and job openings
          </p>
          <button className="flex justify-center lg:justify-start border cursor-pointer hover:bg-black hover:text-white lg:w-[135px] py-2 px-4 ">
            Explore Jobs
          </button>
        </div>
      </div>
      <SubscribeNow />
    </section>
  );
};
