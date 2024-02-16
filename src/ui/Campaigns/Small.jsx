import { FaPlus } from "react-icons/fa";
import PropTypes from 'prop-types'
import { useCountDown } from "../../hooks/useCountDown";
import { calculateSecondsDifference } from "../../utils/calculateSeconds";
function Small({product}) {
  const {formattedHours, formattedMinutes, formattedSeconds} = useCountDown(calculateSecondsDifference(product?.closingTime))

  return (
    <section className='p-2 flex-none h-full bg-white relative rounded-2xl'>
      <button className='rounded-full p-2 bg-gradient-to-b from-slate-50 to-gray-300 hover:scale-110 transition-all duration-200 bg-stone-300 absolute right-1 top-1 border-2 border-gray-50'>
        <FaPlus />
      </button>
      <img src={`/asset/images/products/${product.images?.[0]}`} alt='campaing img' className='mt-4 min-h-[12rem] object-cover' />
      <div>
        <h3 className='font-semibold'>Win: {product?.title}</h3>
        <p className='text-stone-500 text-sm font-light'>
          Buy idealzbasics products for ETB{product?.price}
        </p>
      </div>
      <p className='bg-light-red font-light rounded-2xl px-4 text-white text-[11px] text-center md:text-[12px] mt-2 mb-3 py-1'>
        closing in <span className='font-semibold'>{formattedHours}{formattedMinutes}{formattedSeconds}</span>
      </p>
    </section>
  );
}
Small.propTypes = {
  product: PropTypes.object
}

export default Small;
