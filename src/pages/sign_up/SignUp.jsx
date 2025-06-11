import SubscribeNow from "../../components/SubscribeNow";
import { TextDivider } from "../../components/TextDivider";

export const SignUp = () => {
  return (
    <section className="my-7 flex flex-col justify-center">
      {/* sign up */}
      <div>
        <div className="flex gap-2 justify-center my-2">
          <h1 className="text-[20px] font-medium ">Sign Up</h1>
          <TextDivider />
        </div>
        <div className=" flex flex-col gap-3 w-[400px] justify-self-center">
          <input
            className="w-full outline-none border py-1 px-4 "
            type="text"
            placeholder="Name"
          />
          <input
            className="w-full outline-none border py-1 px-4 "
            type="text"
            placeholder="Email"
          />
          <input
            className="w-full outline-none border py-1 px-4 "
            type="text"
            placeholder="Password"
          />
        </div>
        <button className=" cursor-pointer border py-2 px-8 my-3 bg-black text-white flex justify-self-center ">
          Create
        </button>
      </div>
      {/* login */}
      <div>
        <div className="flex gap-2 justify-center my-2">
          <h1 className="text-[20px] font-medium ">Login</h1>
          <TextDivider />
        </div>
        <div className=" flex flex-col gap-3 w-[400px] justify-self-center">
          <input
            className="w-full border outline-none py-1 px-4 "
            type="text"
            placeholder="Email"
          />
          <input
            className="w-full border outline-none py-1 px-4 "
            type="text"
            placeholder="Password"
          />
          <div className="flex justify-between text-[13px]">
            <p className="cursor-pointer">Forgot your password?</p>
            <p className="cursor-pointer">Create account</p>
          </div>
        </div>

        <button className=" cursor-pointer border py-2 px-8 my-3 bg-black text-white flex justify-self-center ">
          Sign In
        </button>
      </div>
      <SubscribeNow />
    </section>
  );
};
