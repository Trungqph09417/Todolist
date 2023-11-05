import React from "react";
import logo from "../assets/logo.svg";
import { menuBar } from "../utils/menuBar";
import { NavLink } from "react-router-dom";

const notActive =
  "flex gap-[12px] items-center py-2 px-[25px] text-[#32323D] text-[13px]  font-serif";
const activeStyle =
  "flex gap-[12px] items-center py-2 px-[25px] text-[#0f7070] text-[13px]  font-serif";
const SideBarLeft = () => {
  return (
    <div className=''>
      <div className='w-full flex justify-start items-center px-[25px] h-[70px]'>
        <img src={logo} alt='logo' className='w-[120px] h-10' />
      </div>
      <div className='flex flex-col'>
        {menuBar.map((item) => (
          <NavLink
            to={item.path}
            end={item.end}
            className={({ isActive }) => (isActive ? activeStyle : notActive)}
            key={item.path}
          >
            {item.icon}
            <span> {item.name}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default SideBarLeft;
