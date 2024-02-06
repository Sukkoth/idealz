import MenuItem from "./MenuItem";

import { LuUser } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
import { IoLanguage, IoCardOutline } from "react-icons/io5";
import { LiaMoneyBillAlt } from "react-icons/lia";
import { TbLockCog } from "react-icons/tb";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { TfiInfoAlt } from "react-icons/tfi";
import { PiHandHeart } from "react-icons/pi";

const menuList = [
  {
    icon: <LuUser />,
    title: "Personal Information",
    to: "/menu",
  },
  {
    icon: <CiHeart />,
    title: "WishList",
    to: "/menu",
  },
  {
    icon: <IoLanguage />,
    title: "Language",
    to: "/menu",
  },
  {
    icon: <LiaMoneyBillAlt />,
    title: "Currency",
    to: "/menu",
  },
  {
    icon: <IoCardOutline />,
    title: "Saved Cards/Payment Options",
    to: "/menu",
  },
  {
    icon: <TbLockCog />,
    title: "Change Password",
    to: "/menu",
  },
  {
    icon: <MdOutlineNotificationsActive />,
    title: "Notification Preference",
    to: "/menu",
  },
  {
    icon: <TfiInfoAlt />,
    title: "How it works",
    to: "/menu",
  },
  {
    icon: <PiHandHeart />,
    title: "CSR Initiatives",
    to: "/menu",
  },
];

function MenuList() {
  return (
    <div className='mt-8 rounded-3xl bg-white border-2xl p-3 text-sm font-thin'>
      <ul className=' divide-y-[0.1rem] divide-gray-100'>
        {menuList.map((item) => (
          <li key={item.title}>
            <MenuItem {...item} />
          </li>
        ))}
      </ul>
      <button className='bg-stone-200 ml-2 px-6 mt-2 py-2 rounded-2xl font-semibold text-xs'>
        Logout
      </button>
    </div>
  );
}

export default MenuList;
