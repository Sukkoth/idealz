import Button from "../../ui/Buttons/Button";
import PropTypes from "prop-types";
import CountDown from "./CountDown";
import { calculateSecondsDifference } from "../../utils/calculateSeconds";

function CampaignItem({ closingTimer, topTag, product }) {
  return (
    <div className='rounded-3xl bg-white p-2 overflow-hidden'>
      {topTag && (
        <div
          id='tag'
          style={{ borderRadius: "1.5rem 1.5rem 0 0 " }}
          className='bg-yellow-300 relative text-center text-2xl font-extrabold tracking-wide py-2 after:content-[""] after:w-full after:h-[3rem] after:bg-yellow-300 after:absolute after:left-0 after:top-[100%]'
        >
          <h1 className='text-rowdies'>JUST LAUNCHED</h1>
        </div>
      )}

      <div
        className='relative rounded-[2.2rem] p-2 bg-white'
        id='image-with-tag'
      >
        {closingTimer && (
          <CountDown timer={calculateSecondsDifference(product.closingTime)}/>
        )}
        <div className='relative rounded-3xl overflow-hidden z-20'>
          <img src={`/asset/images/products/${product.images?.[0]}`} alt='img' />
          <h1 className='mt-[-4rem] z-20 absolute bottom-10 left-3 text-light-red text-[2.5rem]  md:text-[3.5rem] italic font-extrabold'>
            Win
          </h1>
          <p className='left-3 absolute bottom-4  sm:text-[1rem] md:text-[1.3rem] text-white sm:font-extrabold md:font-extrabold'>
            {product?.title}
          </p>
        </div>
      </div>
      <div className='p-2' id='details'>
        <div className='flex gap-2 p-2'>
          <div className='w-[80%]'>
            <h2 className='text-[20px] sm:text-xl sm:w-[60%] md:w-[75%] mb-2'>
             {product?.subtitle}
            </h2>
            <p className='text-[12px] text-stone-400 font-light'>
              Draw date: {formatDate(product.closingTime)} or earlier based on the time passed
            </p>
          </div>
          <div className='w-[43%] md:w-[25%] border flex items-center justify-center rounded-2xl p-1'>
            <div className='bg-green-500 text-white text-[10px] text-center rounded-lg'>
              <p className='px-1 font-light'>
                {/* idealbasics products{" "} */}
                <span className='text-[18px] font-bold'>
                  {/* <br /> */}
                  ETB {product?.price}
                </span>{" "}
              </p>
            </div>
          </div>
        </div>
        <Button type='primary' className='w-full'>
          Add to Cart
        </Button>
      </div>
    </div>
  );
}

function formatDate(inputDateString) {
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  const date = new Date(inputDateString);
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

CampaignItem.propTypes = {
  closingTimer: PropTypes.bool,
  topTag: PropTypes.bool,
  product: PropTypes.object,
};

export default CampaignItem;
