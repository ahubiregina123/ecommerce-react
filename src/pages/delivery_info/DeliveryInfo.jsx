import { TextDivider } from "../../components/TextDivider";
import { CartTotalCard } from "./CartTotalCard";
import { DeliveryInfoCard } from "./DeliveryInfoCard";

export const DeliveryInfo = () => {
  return (
    <section className="">
      <div className="flex gap-3 my-2 ">
        <h1 className="text-[20px] uppercase">
          delivery{" "}
          <label className="font-medium" htmlFor="">
            information
          </label>
        </h1>
        <TextDivider />
      </div>
      <div className="lg:flex justify-between">
        <DeliveryInfoCard />
        <CartTotalCard />
      </div>
    </section>
  );
};
