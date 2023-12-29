import { Outlet } from "react-router-dom";

function MobileContainer() {
  return (
    <div className='sm:w-full min-h-[100svh] md:w-[35rem] md:shadow-md bg-stone-100 mx-auto p-3 '>
      <Outlet />
    </div>
  );
}

export default MobileContainer;
