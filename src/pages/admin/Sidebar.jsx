import React from "react";
import { BsGraphUpArrow } from "react-icons/bs";
import { CgNotes } from "react-icons/cg";
import { LiaFolderOpenSolid } from "react-icons/lia";
import { HiOutlineUser } from "react-icons/hi2";
import { FiSettings } from "react-icons/fi";
import { PiWrenchLight } from "react-icons/pi";
import { MdPieChartOutlined } from "react-icons/md";
import { TbSpeakerphone } from "react-icons/tb";
import { MdDisplaySettings } from "react-icons/md";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const side = [
    {
      id: "1",
      icon: <BsGraphUpArrow size={20} />,
      title: "Dashboard",
      link: "/adminPanel",
    },
    {
      id: "2",
      icon: <CgNotes size={20} />,
      title: "Sales",
      link: "/adminPanel",
    },
    {
      id: "3",
      icon: <LiaFolderOpenSolid size={20} />,
      title: "Catalog",
      link: "/adminPanel",
    },
    {
      id: "4",
      icon: <HiOutlineUser size={20} />,
      title: "Customers",
      link: "/admin/customers",
    },
    {
      id: "5",
      icon: <MdDisplaySettings size={20} />,
      title: "CMS",
        link: "/admin/cms",
    },
    {
      id: "6",
      icon: <TbSpeakerphone size={20} />,
      title: "Marketing",
       link: "/admin/marketing",
    },
    {
      id: "7",
      icon: <MdPieChartOutlined size={20} />,
      title: "Reporting",   
      link:"/admin/reporting"
    },
    {
      id: "8",
      icon: <FiSettings size={20} />,
      title: "Settings",
      link: "/admin/settings",
    },
    {
      id: "9",
      icon: <PiWrenchLight size={20} />,
      title: "Configuration",
      link:"/admin/configuration"
    },
  ];
  return (
    <div className="h-screen shadow-md p-3 bg-white">
      <div className="">
        {side.map((item) => {
          return (
            <Link key={item.id} to={item.link}>
              {" "}
              <div className="p-2 rounded-md text-black/65 font-medium my-2 flex gap-3 hover:bg-black/5">
                <div>{item.icon}</div>
                <div>{item.title}</div>
              </div>
            </Link>
          );
        })}
        {/* <div className='p-2 rounded-md bg-blue-600 text-white font-medium my-2 flex gap-3'>
                <div><BsGraphUpArrow size={20}/></div>
                <div>Dashboard</div>
            </div> */}
      </div>
    </div>
  );
};

export default Sidebar;
