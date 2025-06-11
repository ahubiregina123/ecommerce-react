export const DeliveryInfoCard = () => {
  return (
    <form className="flex gap-4 flex-col">
      <div className="gap-3 flex">
        <input
          className="border  outline-none rounded-sm py-2 px-2 w-[175px] lg:flex-1/2 border-gray-400"
          type="text"
          placeholder="First name"
        />
        <input
          className="border  outline-none rounded-sm py-2 px-2 w-[175px] lg:flex-1/2 border-gray-400"
          type="text"
          placeholder="Last name"
        />
      </div>
      <input
        className="border outline-none rounded-sm py-2 px-2 border-gray-400 w-[360px] lg:w-[650px] lg:flex "
        type="text"
        placeholder="Email address"
      />
      <input
        className="border outline-none rounded-sm py-2 px-2 border-gray-400  w-[360px] lg:w-[650px] lg:flex  "
        type="text"
        placeholder="Street"
      />
      <div className="gap-3 flex">
        <input
          className="border outline-none  rounded-sm py-2 px-2 w-[175px] lg:flex-1/2 border-gray-400"
          type="text"
          placeholder="City"
        />
        <input
          className="border outline-none  rounded-sm py-2 px-2 w-[175px] lg:flex-1/2 border-gray-400"
          type="text"
          placeholder="State"
        />
      </div>
      <div className="gap-3 flex">
        <input
          className="border  outline-none rounded-sm py-2 px-2 w-[175px] lg:flex-1/2 border-gray-400"
          type="text"
          placeholder="Zip code"
        />
        <input
          className="border  outline-none rounded-sm py-2 px-2 w-[175px] lg:flex-1/2  border-gray-400"
          type="text"
          placeholder="Country"
        />
      </div>
      <input
        className="border outline-none rounded-sm py-2 px-2 border-gray-400 w-[360px]lg:w-[650px] lg:flex  "
        type="text"
        placeholder="Phone"
      />
    </form>
  );
};
