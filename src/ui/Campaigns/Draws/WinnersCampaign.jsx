import carImg from "../../../assets/images/car2.png";
import PropTypes from "prop-types";

function WinnersCampaign({ type, topSticker = false }) {
  return (
    <div className='rounded-3xl bg-white p-2 overflow-hidden'>
      <div className='relative rounded-[2.2rem] p-2 ' id='image-with-tag'>
        <div className='relative rounded-3xl overflow-hidden z-20'>
          <img src={carImg} alt='img' />
          {topSticker && (
            <div className='absolute bg-white rounded-es-3xl rounded-ee-3xl w-[7rem] h-[4rem] p-5 z-30 right-10 top-0  flex items-center justify-center'>
              <p className='text-rowdies text-2xl'> deem</p>
            </div>
          )}
        </div>
      </div>
      {type === "winners" && (
        <div className='p-2' id='details'>
          <div className='flex gap-2 p-2'>
            <div className='w-[80%]'>
              <h2 className='text-4xl text-light-red sm:text-xl sm:w-[60%] md:w-[75%] mb-2 text-rowdies leading-5'>
                Congratulations
              </h2>
              <p className='text-lg font-light'>
                <span className='font-bold'>Zareen Ahmed</span> on winning
              </p>
              <p className='text-lg font-semibold'>
                BMW M4 CSL or AED300,000 Cash
              </p>
              <p className='font-light'>Tocket no. CR-00106-096538423</p>
            </div>
          </div>
          <div className='text-xs font-thin text-stone-400 mt-3'>
            <p>Announced on: </p>
            <p>January 03, 2024 7:32 PM</p>
          </div>
        </div>
      )}
      {type === "upcoming" && (
        <div className='p-2' id='details'>
          <div className='flex gap-2 p-2'>
            <div className='text-xl'>
              <p className=' font-semibold'>Campaign: AED100,000 Cash</p>
              <p className='font-normal'>CG-03404</p>
              <p className='font-semibold text-light-red'>
                Draw Date: 06 Jan, 2024
              </p>
            </div>
          </div>
          <div className='text-xs font-thin text-stone-400 mt-3'>
            <p>You are not participant</p>
            {/* <p>You missed this campaign</p> */}
          </div>
        </div>
      )}
    </div>
  );
}

WinnersCampaign.propTypes = {
  type: PropTypes.oneOf(["upcoming", "winners"]).isRequired,
  topSticker: PropTypes.bool,
};

export default WinnersCampaign;