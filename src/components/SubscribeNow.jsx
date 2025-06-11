const SubscribeNow = () => {
  return (
    <div className="my-20 flex flex-col gap-3   ">
      <h1 className="font-medium flex justify-center text-[20px] lg:text-[25px]">
        Subscribe now & get 20% off
      </h1>
      <p className="lg:text-[15px] text-[10px] flex justify-center items-center text-center text-gray-600">
        Lorem Ipsum is simply dummy text of printing and typesetting industry
      </p>
      <div className="flex justify-center  ">
        <input
          className="border md:w-[50%] w-[300px] outline-none py-2 px-3 border-gray-200 "
          type="email"
          placeholder="Enter your email id"
        />
        <button className=" bg-black cursor-pointer  text-white px-6 uppercase">
          subscribe
        </button>
      </div>
    </div>
  );
};

export default SubscribeNow;
