import { FiHome } from "react-icons/fi";
import { IoGiftOutline, IoTicketOutline } from "react-icons/io5";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { LuArchive } from "react-icons/lu";
import { MdOutlineShoppingBag } from "react-icons/md";
import NavLink from "./NavLink";

// #f5f5f4
function BottomNav() {
  return (
    <div
      className='sticky bottom-0 py-2 px-5 z-50 md:w-[35.2rem] mx-auto bg-stone-100 w-full flex justify-between font-light'
      id='bottom-nav'
      style={{ boxShadow: "0 -15px 20px #f5f5f4" }}
    >
      <NavLink to='/'>
        <FiHome size={25} />
        <span className='text-[12px]'>Home</span>
      </NavLink>
      <NavLink to='/offers'>
        <IoGiftOutline size={25} />
        <span className='text-[12px]'>Offers</span>
      </NavLink>
      <NavLink to='/draws'>
        <LuArchive size={25} />
        <span className='text-[12px]'>Draws</span>
      </NavLink>
      <NavLink to='/tickets'>
        <IoTicketOutline size={25} />
        <span className='text-[12px]'>Tickets</span>
      </NavLink>
      <NavLink to='/menu'>
        <HiOutlineMenuAlt3 size={25} />
        <span className='text-[12px]'>Menu</span>
      </NavLink>
      <NavLink to='/cart'>
        <MdOutlineShoppingBag size={25} />
        <span className='text-[12px]'>Cart</span>
      </NavLink>
    </div>
  );
}

export default BottomNav;
