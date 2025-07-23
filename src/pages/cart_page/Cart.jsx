import { TextDivider } from "../../components/TextDivider";
import Divider from "../../components/Divider";
import { assets } from "../../assets/assets";

export const MyCart = () => {
  return (
    <section className="my-14">
      <div className="flex gap-2 my-4">
        <h1 className="text-[20px] uppercase">
          my{" "}
          <label className="font-medium" htmlFor="">
            cart
          </label>
        </h1>
        <TextDivider />
      </div>
      <Divider />
      <CartCard />
      <CartCard />
    </section>
  );
};

const CartCard = () => {
  return (
    <div>
      <div className="flex lg:flex-row flex-col gap-3 my-2 justify-between">
        <div className="flex lg:flex-row flex-col gap-2">
          <div className="w-[20%]">
            <img src={assets.img_25} alt="" />
          </div>
          <div className="flex flex-col justify-evenly">
            <p className="font-medium text-[14px] lg:text-[20px]">
              Men Rounded Neck Pure Cotton T-shirt
            </p>
            <div className="flex lg:text-[15px] text-[12px] gap-3">
              <p>$149</p>
              <p>Quantity:1</p>
              <p>Size:L</p>
            </div>
            <p className=" lg:text-[15px] text-[12px]">
              {" "}
              <label className="font-medium" htmlFor="">
                Date:
              </label>{" "}
              25, May 2024
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <div>
            <img src={assets.ellipse_green} alt="" />
          </div>
          <p>Ready to ship</p>
        </div>
        <div className="flex items-center">
          <button className="border hover:bg-black hover:text-white cursor-pointer py-2 px-4">
            Track Order
          </button>
        </div>
      </div>
      <Divider />
    </div>
  );
};
