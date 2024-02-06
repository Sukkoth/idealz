import icon from "../../../assets/images/idealzIcon.png";
function MessageItem() {
  return (
    <div>
      <div className='flex items-center gap-2'>
        <img src={icon} className='size-10 object-cover' />
        <p className='text-xl text-rowdies'>Idealz</p>
      </div>
      <div className='bg-white p-3 rounded-2xl mt-2'>
        <p className='text-sm font-thin'>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nesciunt
          possimus sint explicabo pariatur facere quos saepe quae adipisci
          repellat?
        </p>
        <p className='text-xs font-thin text-gray-500 mt-1'>
          02 October, 12:13 PM
        </p>
      </div>
    </div>
  );
}

export default MessageItem;
