import img from "../../assets/images/avatar.jpg";
import { FaPlus } from "react-icons/fa";

function Avatar() {
  return (
    <div className='flex flex-col items-center justify-center '>
      <div className='bg-gray-200 size-[10rem] flex items-center justify-center rounded-full relative'>
        <img
          src={img}
          alt=''
          className='size-[88%] rounded-full object-cover'
        />
        <div className='absolute right-[-7%] p-3 bg-white rounded-full top-[55%] hover:bg-gray-100 cursor-pointer'>
          <FaPlus />
        </div>
      </div>
      <div className='mt-3 text-center'>
        <h1 className='text-2xl text-rowdies'>Sukkoth Teklu</h1>
        <p className='text-gray-800 text-xs font-thin md:text-sm'>
          suukootj@gmail.com
        </p>
      </div>
      <div className='mt-2 py-2 px-4 bg-white rounded-2xl flex gap-3 items-center'>
        <p className='text-xs font-light md:text-sm'>
          Wallet Balance <span className='font-semibold'>0.00</span>
        </p>
        <button
          type='primary'
          className='bg-gradient-to-b px-1 py-[0.15rem] from-purple-500 to-purple-800 text-white rounded-2xl text-xs'
        >
          Top up
        </button>
      </div>
    </div>
  );
}

export default Avatar;
