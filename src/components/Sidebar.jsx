import React from "react";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { SiShopware } from "react-icons/si";

import { links } from "../assets/data/dummy.js";
import { Link, NavLink } from "react-router-dom";
import { MdOutlineCancel } from "react-icons/md";
const Sidebar = () => {
  const activeMenu = true;
  const ActiveLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2 ";
  const NormalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray  text-md m-2 ";
  return (
    <div className="ml-3 h-screen overflow-auto md:overflow-hidden md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/"
              onClick={() => {}}
              className="flex items-center gap-3 ml-3 mt-4 text-xl font-extrabold dark:text-white text-slate-900"
            >
              <SiShopware /> <span>Shoppy</span>
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                className="text-xl p-3 rounded-full block md:hidden"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-10">
            {links.map((item) => (
              <div key={item.title}>
                <p className="text-gray-400 m-3 mt-4 uppercase">{item.title}</p>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    onClick={() => {}}
                    className={({ isActive }) =>
                      isActive ? ActiveLink : NormalLink
                    }
                  >
                    {link.icon}
                    <span className="capitalize">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
