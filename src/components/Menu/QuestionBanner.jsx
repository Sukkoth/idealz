import { FaTelegram } from "react-icons/fa";
function QuestionBanner() {
  return (
    <div className='bg-green-900 p-4 flex mt-5 w-[95%] md:w-[90%] mx-auto justify-between items-center rounded-2xl'>
      <div className='flex items-center gap-4'>
        <FaTelegram className='text-4xl text-white' />
        <h2 className='text-white leading-4'>
          Have questions? <br /> Chat with us
        </h2>
      </div>
      <button className='text-sm bg-green-400 hover:bg-green-300 py-1 px-2 rounded-2xl'>
        Start Chat
      </button>
    </div>
  );
}

export default QuestionBanner;
