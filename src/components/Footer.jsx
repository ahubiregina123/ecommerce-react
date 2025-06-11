import { assets } from "../assets/assets";
import Divider from "./Divider";

export const Footer = () => {
  const date = new Date();

  return (
    <footer className="flex flex-col mt-4">
      <div className="md:flex block   md:justify-between my-2">
        <div className="basis-[65%]">
          <div className="w-[100px] my-3">
            <img src={assets.logo} alt="" />
          </div>
          <p className="md:w-[65%] ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ispum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a gallery of type
            and scrambled it to make a type speciemen book.
          </p>
        </div>
        <div className=" basis-[35%] md:flex block gap-30">
          <div className="basis-[50%]">
            <h3 className="my-3 font-medium text-[16px] uppercase">company</h3>
            <ul className="flex flex-col gap-1 text-[14px]">
              <li>Home</li>
              <li>About us</li>
              <li>Delivery</li>
              <li>Privacy policy</li>
            </ul>
          </div>
          <div className="basis-[50%]">
            <h3 className="my-3 font-medium text-[16px] uppercase">
              get in touch
            </h3>
            <ul className="flex flex-col gap-2 text-[14px]">
              <li>+1-212-456-7890</li>
              <li>greatstackdev@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
      <Divider />
      <p className="my-3 flex items-center justify-center text-[14px]">
        Copyright {date.getFullYear()} © GreatStack.dev - All Right Reserved.
      </p>
    </footer>
  );
};
