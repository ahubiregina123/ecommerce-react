import { Circle } from "lucide-react";
import Divider from "../../components/Divider";
import { TextDivider } from "../../components/TextDivider";
import { assets } from "../../assets/assets";

export const CartTotalCard = () => {
  return (
    <div className="lg:w-[40%] my-3">
      <div className="flex gap-2 items-center">
        <h1 className="uppercase flex gap-2 text-[20px]">
          cart{" "}
          <label className="font-medium" htmlFor="">
            totals
          </label>
        </h1>
        <img className="w-[50px] h-[3px]" src={assets.rectangle_1} alt="" />
      </div>
      <div className="flex flex-col gap-3">
        <div>
          <div className="flex justify-between my-2">
            <p>Subtotal</p>
            <p>$60.00</p>
          </div>
          <Divider />
        </div>
        <div>
          <div className="flex justify-between my-2">
            <p>Shipping Free</p>
            <p>$10</p>
          </div>
          <Divider />
        </div>
        <div>
          <div className="flex justify-between my-2">
            <p>Total</p>
            <p>$70.00</p>
          </div>
          <Divider />
        </div>
      </div>
      {/* payment method */}
      <div className=" mb-12 mt-10 relative">
        <div className="flex gap-2 my-3">
          <h1 className="uppercase text-[18px]">
            payment{" "}
            <label className="font-medium" htmlFor="">
              method
            </label>
          </h1>
          <TextDivider />
        </div>
        <div className="flex lg:flex-row flex-col gap-4 ">
          <div className="flex items-center justify-center gap-3 border border-gray-300 py-1 px-9">
            <Circle className="cursor-pointer" size={"12px"} />
            <div className="w-[40px]">
              <img src={assets.stripe_logo} alt="" />
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 border border-gray-300 py-1 px-9">
            <div>
              <img
                className="cursor-pointer"
                src={assets.ellipse_green}
                alt=""
              />
            </div>
            <div className="w-[70px]">
              <img src={assets.razorpay_logo} alt="" />
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 border border-gray-300 py-2 px-9 ">
            <Circle className="cursor-pointer" size={"12px"} />
            <p className="uppercase text-[12px]">cash on delivery</p>
          </div>
        </div>
        <button className="uppercase border w-full lg:w-[200px] bg-black text-white py-2 cursor-pointer  px-4 my-3 lg:my-7 flex justify-center  absolute lg:right-[4%]  ">
          place order
        </button>
      </div>
    </div>
  );
};
