import { assets, bestSellers } from "../../assets/assets";
import Divider from "../../components/Divider";
import { latestCollections } from "../../assets/assets";
import ProductCard from "../../components/ProductCard";
import SubscribeNow from "../../components/SubscribeNow";

const Home = () => {
  return (
    <section className="py-3">
      <div className="lg:flex block border border-gray-300 ">
        <div className="flex-1/2 flex flex-col justify-center py-12 px-6 lg:px-40">
          <div className="flex gap-2   items-center">
            <img className="w-[50px] h-[3px]" src={assets.rectangle_1} alt="" />
            <p className="uppercase lg:text-[15px] text-[12px] font-medium">
              our bestsellers
            </p>
          </div>
          <h1 className="text-[40px]">Lastest Arrivals</h1>
          <div className="flex items-center gap-2">
            <p className="uppercase text-[15px] font-medium">shop now</p>

            <img className="w-[50px] h-[3px]" src={assets.rectangle_1} alt="" />
          </div>
        </div>
        <div className="flex-1/2">
          <img src={assets.header_img} alt="" />
        </div>
      </div>
      <div>
        <div className="flex flex-col items-center mt-14 mb-6">
          <div className="flex justify-center items-center gap-2">
            <h2 className="uppercase lg:text-[30px] text-[20px] text-center ">
              latest{" "}
              <label className="font-medium" htmlFor="">
                collection
              </label>{" "}
            </h2>
            <img className="w-[50px] h-[3px]" src={assets.rectangle_1} alt="" />
          </div>
          <p className="text-[12px] lg:text-[15px] text-center">
            Lorem Ipsum is simply dummy text of printing and typesetting
            industry. Lorem Ipsum has been the
          </p>
        </div>
        <div className="grid grid-cols-2  lg:grid-cols-5  gap-5">
          {latestCollections.map((latest, index) => (
            <ProductCard
              key={index}
              image={latest.image}
              description={latest.description}
              price={latest.price}
              id={latest.id}
            />
          ))}
        </div>
      </div>
      <div>
        <div className="flex flex-col items-center mt-14 mb-6">
          <div className="flex justify-center items-center gap-2">
            <h2 className="uppercase lg:text-[30px] text-[20px] text-center ">
              best{" "}
              <label className="font-medium" htmlFor="">
                sellers
              </label>{" "}
            </h2>
            <img className="w-[50px] h-[3px]" src={assets.rectangle_1} alt="" />
          </div>
          <p className="text-[12px] lg:text-[15px] text-center">
            Lorem Ipsum is simply dummy text of printing and typesetting
            industry. Lorem Ipsum has been the
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-5">
          {bestSellers.map((latest, index) => (
            <ProductCard
              key={index}
              image={latest.image}
              description={latest.description}
              price={latest.price}
              id={latest.id}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-12 justify-evenly my-20">
        <div className="flex flex-col items-center">
          <img src={assets.exchange_icon} alt="" />
          <h2 className="font-medium text-[18px]">Easy Exchange Policy</h2>
          <p className="text-[15px]">We offer hassle from exchange policy</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={assets.quality_icon} alt="" />
          <h2 className="font-medium text-[18px]">7 Days Return Policy</h2>
          <p className="text-[15px]">We provide 7 days free return policy</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={assets.support_img} alt="" />
          <h2 className="font-medium text-[18px]">Best Customer Support</h2>
          <p className="text-[15px]">We provide 24/7 customer support</p>
        </div>
      </div>
      <SubscribeNow />
    </section>
  );
};

// Issue at hand: dynamic linking;
// making the product page unigue to a particular product
// depending on the product clicked on

export default Home;
