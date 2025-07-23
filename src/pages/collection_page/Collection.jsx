import { useEffect, useState } from "react";
import { allCollections } from "../../assets/assets";
import ProductCard from "../../components/ProductCard";
import { TextDivider } from "../../components/TextDivider";

export const Collection = () => {
  const [catergory, setCatergory] = useState("");
  const [realCollection, setRealCollection] = useState(allCollections);

  const filteredCollections = allCollections.filter((collection) => {
    return collection.description.includes(catergory);
  });

  useEffect(() => {
    catergory != "" && setRealCollection(filteredCollections);
  }, [catergory]);

  return (
    <section className=" flex-1 w-full my-6">
      <div className="flex justify-center lg:justify-between my-5">
        <h2 className="text-[16px] hidden lg:flex  uppercase">filters</h2>
        <div className="flex  gap-3">
          <h1 className="uppercase text-[20px]">
            all{" "}
            <label className="font-medium" htmlFor="">
              collection
            </label>
          </h1>
          <TextDivider />
        </div>
        <div>
          <select
            className=" hidden lg:block border border-gray-300 py-2 px-2"
            name=""
            id=""
          >
            <option value="">sort by: Price Low To High</option>
            <option value="">sort by: Price High To Low</option>
          </select>
        </div>
      </div>
      <div className="flex w-full gap-15">
        <div className=" hidden lg:flex lg:flex-[15%] flex-col gap-4">
          <div className="border border-gray-300 py-4 flex flex-col gap-1.5 px-6 w-full">
            <p className="uppercase text-[14px]">categories</p>
            <div className="flex gap-2">
              <input
                onChange={(event) => {
                  setCatergory("Men");
                  // catergory === "Men"
                  //   ? (event.target.checked = true)
                  //   : !event.target.checked;
                  // console.log(event);
                }}
                className="cursor-pointer"
                type="checkbox"
              />
              <p>Men</p>
            </div>
            <div className="flex gap-2">
              <input
                onChange={(event) => {
                  setCatergory("Women");
                  // catergory === "Women"
                  //   ? (event.target.checked = true)
                  //   : !event.target.checked;
                  // console.log(event);
                }}
                className="cursor-pointer"
                type="checkbox"
              />
              <p>Women</p>
            </div>
            <div className="flex gap-2">
              <input
                onChange={(event) => {
                  setCatergory("Girls");
                  // catergory === "Girls"
                  //   ? (event.target.checked = true)
                  //   : !event.target.checked;
                  // console.log(event);
                }}
                className="cursor-pointer"
                type="checkbox"
              />
              <p>Girls</p>
            </div>
            <div className="flex gap-2">
              <input
                onChange={(event) => {
                  setCatergory("Boy");
                  // catergory === "Boy"
                  //   ? (event.target.checked = true)
                  //   : !event.target.checked;
                  // console.log(event);
                }}
                className="cursor-pointer"
                type="checkbox"
              />
              <p>Boys</p>
            </div>
            <div className="flex gap-2">
              <input
                onChange={(event) => {
                  setCatergory("Kid");
                  // catergory === "Kid"
                  //   ? (event.target.checked = true)
                  //   : !event.target.checked;
                  // console.log(event);
                }}
                className="cursor-pointer"
                type="checkbox"
              />
              <p>Kids</p>
            </div>
          </div>
          <div className="border border-gray-300 py-4 flex flex-col gap-1.5 px-6 w-full">
            <p className="uppercase text-[14px]">categories</p>
            <div className="flex gap-2">
              <input
                onChange={(event) => {
                  setCatergory("Cotton");
                  // catergory === "Cotton"
                  //   ? (event.target.checked = true)
                  //   : !event.target.checked;
                  // console.log(event);
                }}
                className="cursor-pointer"
                type="checkbox"
              />
              <p>Topwear</p>
            </div>
            <div className="flex gap-2">
              <input
                onChange={(event) => {
                  setCatergory("Tapered");
                  // catergory === "Tapered"
                  //   ? (event.target.checked = true)
                  //   : !event.target.checked;
                  // console.log(event);
                }}
                className="cursor-pointer"
                type="checkbox"
              />
              <p>Bottonwear</p>
            </div>
            <div className="flex gap-2">
              <input
                onChange={(event) => {
                  setCatergory("Jacket");
                  // catergory === "Jacket"
                  //   ? (event.target.checked = true)
                  //   : !event.target.checked;
                  // console.log(event);
                }}
                className="cursor-pointer"
                type="checkbox"
              />
              <p>Winterwear</p>
            </div>
          </div>
        </div>
        <div className=" grid grid-cols-3 flex-[65%] lg:grid-cols-4 gap-5">
          {realCollection.map((collection) => (
            <ProductCard
              image={collection.image}
              description={collection.description}
              price={collection.price}
              id={collection.id}
              key={collection.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
