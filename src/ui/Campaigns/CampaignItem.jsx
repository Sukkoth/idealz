import carImg from "../../assets/images/car2.png";
import Button from "../../ui/Buttons/Button";
import PropTypes from "prop-types";

function CampaignItem({ closingTimer, topTag }) {
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
          <div className='bg-light-red text-white w-fit px-6 py-1 rounded-full mb-2'>
            <p className='font-thin'>Closing in</p>
            <h1 className='font-bold text-xl'>72:56:24</h1>
          </div>
        )}
        <div className='relative rounded-3xl overflow-hidden z-20'>
          <img src={carImg} alt='img' />
          <h1 className='mt-[-4rem] z-20 absolute bottom-10 left-3 text-light-red text-[2.5rem]  md:text-[3.5rem] italic font-extrabold'>
            Win
          </h1>
          <p className='left-3 absolute bottom-4  sm:text-[1rem] md:text-[1.3rem] text-white sm:font-extrabold md:font-extrabold'>
            BMW M4 CLS or USD81,300 Cash
          </p>
        </div>
      </div>
      <div className='p-2' id='details'>
        <div className='flex gap-2 p-2'>
          <div className='w-[80%]'>
            <h2 className='text-[20px] sm:text-xl sm:w-[60%] md:w-[75%] mb-2'>
              Buy: USD2.80 idealzbasics products
            </h2>
            <p className='text-[12px] text-stone-400 font-light'>
              Draw date: 30 January, 2024 or earlier based on the time passed
            </p>
          </div>
          <div className='w-[43%] md:w-[25%] border flex items-center justify-center rounded-2xl p-1'>
            <div className='bg-green-500 text-white text-[10px] text-center rounded-lg'>
              <p className='px-1 font-light'>
                idealbasics products{" "}
                <span className='text-[18px] font-bold'>
                  <br />
                  USD 2.8
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

CampaignItem.propTypes = {
  closingTimer: PropTypes.bool,
  topTag: PropTypes.bool,
};

export default CampaignItem;
