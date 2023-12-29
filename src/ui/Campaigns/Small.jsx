import carImage from "../../assets/images/car.png";
import { FaPlus } from "react-icons/fa";
function Small() {
  return (
    <section className='p-2 flex-none h-full bg-white relative rounded-2xl'>
      <button className='rounded-full p-2 bg-gradient-to-b from-slate-50 to-gray-300 hover:scale-110 transition-all duration-200 bg-stone-300 absolute right-1 top-1 border-2 border-gray-50'>
        <FaPlus />
      </button>
      <img src={carImage} alt='campaing img' className='mt-4' />
      <div>
        <h3 className='font-semibold'>Win: BMW M4 CSL or USD...</h3>
        <p className='text-stone-500 text-sm font-light'>
          Buy idealzbasics products fro USSD2.80
        </p>
      </div>
      <p className='bg-light-red font-light rounded-2xl px-4 text-white text-[11px] text-center md:text-[12px] mt-2 mb-3 py-1'>
        closing in <span className='font-semibold'>09:21:14</span>
      </p>
    </section>
  );
}

export default Small;
