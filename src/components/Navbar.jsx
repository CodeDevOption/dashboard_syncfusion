import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsChatLeft } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { RiNotification3Line } from "react-icons/ri";
import { useStateValue } from "../StateProvider";
import avatar from "../assets/avatars/avatar.jpg";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Chat, Cart, Notification, UserProfile } from ".";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={customFunc}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full  w-2 h-2 right-2 top-2 "
      />
        {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const [
    { activeMenu, screenSize, chat, cart, userProfile, notification,currentColor },
    dispatch,
  ] = useStateValue();

  useEffect(() => {
    const handleResize = () => {
      dispatch({ type: "resize", size: window.innerWidth });
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);



  return (
    <div className="flex justify-between p-2 md:mx-6 relative ">
      <NavButton
        title="Menu"
        customFunc={() => dispatch({ type: "TOGGlE" })}
        color={currentColor}
        icon={<AiOutlineMenu />}
      />
      <div className="flex">
        <NavButton
          title="Cart"
          customFunc={() => dispatch({ type: "handleClick", value: "cart" })}
          color={currentColor}
          icon={<FiShoppingCart />}
        />
        <NavButton
          title="Chat"
          dotColor="#03c9d7"
          customFunc={() => dispatch({ type: "handleClick", value: "chat" })}
          color={currentColor}
          icon={<BsChatLeft />}
        />
        <NavButton
          title="Notification"
          dotColor="#03c9d7"
          customFunc={() =>
            dispatch({ type: "handleClick", value: "notification" })
          }
          color={currentColor}
          icon={<RiNotification3Line />}
        />
        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() =>
              dispatch({ type: "handleClick", value: "userProfile" })
            }
          >
            <img
              src={avatar}
              alt="Profile Pic"
              className="w-8 h-8 rounded-full object-contain"
            />
            <span className="text-gray-400">Hi,</span>{" "}
            <span className="text-gray-400 font-bold ml-1 text-14">
              Sadaruwan
            </span>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>
        {chat && <Chat />}
        {cart && <Cart />}
        {notification && <Notification />}
        {userProfile && <UserProfile />}
      </div>
    </div>
  );
};

export default Navbar;
