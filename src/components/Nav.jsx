import { NavLink } from "react-router";
import { assets } from "../assets/assets";
import Divider from "./Divider";
import { useState } from "react";
import { TextDivider } from "./TextDivider";

const Nav = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [page, setPage] = useState("");
  const [navStyle, setNavSytle] = useState(false);
  return (
    <header className="">
      <div className="flex justify-between my-2 ">
        <div className="lg:w-[100px] flex- w-[50px]">
          <img src={assets.logo} alt="" />
        </div>
        <ul className="flex lg:text-[20px] gap-2 text-[12px] lg:gap-4  uppercase">
          <NavLink className="navLink" to={"/"}>
            <li onClick={() => setPage("home")} className="cursor-pointer">
              home
              {console.log(page)}
            </li>
            {/* {page === "home" ? <div className="bg-black absolute right-[20%] w-9  h-[3px]"  />} */}
          </NavLink>
          <NavLink className="relative" to={"/collection"}>
            <li className="cursor-pointer">collection</li>
            {/* <div className="bg-black w-15 absolute right-[30%]  h-[3px]" /> */}
          </NavLink>
          <NavLink className="navLink" to={"/about"}>
            <li className="cursor-pointer">about</li>
            {/* <div className="bg-black w-9 absolute right-[20%]  h-[3px]" /> */}
          </NavLink>
          <NavLink className="navLink" to={"/contact-us"}>
            <li className="cursor-pointer">contact</li>
            {/* <div className="bg-black w-13 absolute right-[20%]  h-[3px]" /> */}
          </NavLink>
          <NavLink className="navLink" to={"/sign-up"}>
            <li className="cursor-pointer">sign up</li>
            {/* <div className="bg-black w-12 absolute right-[20%]  h-[3px]" /> */}
          </NavLink>
        </ul>
        <div className="flex flex-col  gap-3 justify-center items-center">
          <div className="flex justify-center gap-4 items-center">
            <img
              className="cursor-pointer w-[12px] lg:w-[20px] lg:h-[20px] justify-center items-center"
              src={assets.search_icon}
              alt=""
            />

            <img
              onClick={() => {
                setShowProfileMenu(!showProfileMenu);
              }}
              className="cursor-pointer w-[20px] h-[20px] justify-center items-center"
              src={assets.profile_icon}
              alt=""
            />

            <img
              className="cursor-pointer w-[20px] h-[20px] justify-center items-center"
              src={assets.vector}
              alt=""
            />
          </div>
          <div className="absolute top-[6%]">
            {showProfileMenu && (
              <ul className="bg-[#F8F8F8] text-[16px]  py-1.5 px-2.5  w-[170px]  ">
                <li className="cursor-pointer">My Profile</li>
                <NavLink to={"/my-orders"}>
                  <li className="cursor-pointer">Orders</li>
                </NavLink>
                <li className="cursor-pointer">Logout</li>
                <NavLink to={"/delivery-info"}>
                  <li className="cursor-pointer "> Delivery Information</li>
                </NavLink>
                <NavLink to={"/product-page"}>
                  <li>Product Page</li>
                </NavLink>
              </ul>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;

// const ProfileMenu = () => {
//   return (

//   );
// };
