import {
  allCollections,
  assets,
  bestSellers,
  sizes,
} from "../../assets/assets";
import ProductCard from "../../components/ProductCard";
import { useParams } from "react-router";
import useFilter from "../../hookes/useFilter";
export const ProductPage = () => {
  const { product, description } = useFilter();
  // console.log(description);

  const relatedProducts = allCollections.filter((collection) => {
    return collection.description == description;
  });

  return (
    <section className="my-9">
      <div className="flex lg:flex-row flex-col gap-6">
        <div className="flex gap-3 ">
          <div className=" flex lg:w-[95px] lg:h-[100px] w-[80px] flex-col gap-2">
            <img className="w-full" src={product.image} alt="" />
            <img className="w-full" src={product.image} alt="" />
            <img className="w-full" src={product.image} alt="" />
            <img className="w-full" src={product.image} alt="" />
          </div>
          <div className="lg:w-[400px] lg:h-[400px] w-[345px]">
            <img className="w-full" src={product.image} alt="" />
          </div>
        </div>
        <div className=" flex flex-col gap-2 ">
          <h1 className="lg:text-[25px] text-[20px] font-medium">
            {product.description}
          </h1>
          <div className="flex gap-3">
            <img
              className="lg:w-[20px] lg:h-[20px] w-[15px] h-[15px] "
              src={assets.star_icon}
              alt=""
            />
            <img
              className="lg:w-[20px] lg:h-[20px] w-[15px] h-[15px] "
              src={assets.star_icon}
              alt=""
            />
            <img
              className="lg:w-[20px] lg:h-[20px] w-[15px] h-[15px] "
              src={assets.star_icon}
              alt=""
            />
            <img
              className="lg:w-[20px] lg:h-[20px] w-[15px] h-[15px] "
              src={assets.star_icon}
              alt=""
            />
            <img
              className="lg:w-[20px] lg:h-[20px] w-[15px] h-[15px] "
              src={assets.star_dull_icon}
              alt=""
            />
            <p className="font-medium">(122)</p>
          </div>
          <p className="lg:text-[25px] text-[17px] font-medium">
            {product.price}
          </p>
          <p>
            A light weight, usually kniited, pullover shirt, close-fitting and
            with a round neckline and short sleeves, worn as an undershirt or
            outer garment.
          </p>
          <div className="flex flex-col gap-3">
            <h3 className="font-medium text-[19px]">Select Size</h3>
            <div className="flex gap-2">
              {sizes.map((size) => (
                <SizeBtn size={size} key={size} />
              ))}
            </div>
            <button className="border py-2 px-4 uppercase cursor-pointer text-white bg-black w-[180px] my-2">
              add to cart
            </button>
          </div>
          <hr className="w-[450px] text-gray-300" />
          <div>
            <p>100% Original product</p>
            <p>Cash on delivery is avaliable on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>
      <div className="my-30">
        <div className="flex">
          <p className="border cursor-pointer hover:bg-gray-300 border-gray-300 py-2 px-4">
            Description
          </p>
          <p className="border cursor-pointer hover:bg-gray-300 border-gray-300 py-2 px-4">
            Reviews(122)
          </p>
        </div>
        <div className="border border-gray-300 py-8 px-10 flex flex-col gap-3 leading-[25px]">
          <p className="text-[15px]">
            An e-commerce webiste is an online platform that facilitates the
            buying and selling of products or services over the internet. It
            serves as a virtual marketplace where businesses and indivdual can
            showcase their products, interact with customers, and conduct
            transactions without the need for a physical presence.E-commerce
            websites have gained immense popularity due to their convenience,
            accessibilty and the global reach they offer.
          </p>
          <p className="text-[15px]">
            E-commerce websites typically display products or sefvices along
            with detailed descriptions, images, prices and any avaliable
            variations(eg, sizes,colours). Each product usually has its own
            dedicated page with relevant information
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:items-center">
        <div className="flex justify-center items-center gap-2">
          <h2 className="uppercase lg:text-[30px] text-[20px] text-center ">
            related{" "}
            <label className="font-medium" htmlFor="">
              products
            </label>{" "}
          </h2>
          <img className="w-[50px] h-[3px]" src={assets.rectangle_1} alt="" />
        </div>
        <div className=" gap-3 w-[1000px] grid grid-cols-2 lg:grid-cols-5 ">
          {relatedProducts.map((related) => (
            <ProductCard
              image={related.image}
              description={related.description}
              price={related.price}
              id={related.id}
              key={related.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const SizeBtn = ({ size }) => {
  return (
    <button className="border border-gray-200 bg-gray-200 px-4 w-[60px] py-2 cursor-pointer hover:border-amber-500">
      {size}
    </button>
  );
};
