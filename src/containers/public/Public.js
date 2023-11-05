import React from "react";
import { Outlet } from "react-router-dom";
import { Player, SideBarLeft, SideBarRight } from "../../components/";

const Public = () => {
  return (
    <div className='flex flex-col min-h-screen w-full bg-main-300'>
      <div className='w-full h-full flex flex-auto'>
        <div className='w-[240px] max-h-full flex-none border border-blue-400 bg-[#e8e8e8]'>
          <SideBarLeft />
        </div>
        <div className='flex-auto border border-red-400 '>
          <Outlet />
        </div>
        <div className='w-[330px]  hidden response-1600:flex flex-none animate-slide-left bg-red-400'>
          <SideBarRight />
        </div>
      </div>
      <div className='flex-none h-[90px] bg-main-400'>
        <Player />
      </div>
    </div>
  );
};

export default Public;
