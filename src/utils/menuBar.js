import icons from "./icons"

const {MdOutlineLibraryMusic,AiTwotonePieChart,PiRadioButtonDuotone,CgMediaPodcast}=icons;

export const menuBar=[
   { 
    path:'mymusic',
    name:'Cá nhân',
    icon:<MdOutlineLibraryMusic size={24}/>
  },
  { 
    path:'',
    name:'Khám phá',
    end:true,
    icon:<CgMediaPodcast size={24}/>
  },
  { 
    path:'zing-chart',
    name:'#zingchart',
    icon:<AiTwotonePieChart size={24}/>
  },
  { 
    path:'follow',
    name:'Theo dõi',
    icon:<PiRadioButtonDuotone size={24}/>
  },

]