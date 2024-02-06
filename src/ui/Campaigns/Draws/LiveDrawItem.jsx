import img from "../../../assets/images/stage.jpg";
function LiveDrawItem() {
  return (
    <div className='relative'>
      <img
        src={img}
        alt=''
        className='h-[12rem] w-[12rem] md:w-[14rem] md:h-[15rem] object-cover rounded-2xl'
      />
      <div className='text-xs text-white font-semibold ml-3 absolute bottom-3'>
        <p>3rd January</p>
        <p>2024</p>
        <p>08:00 PM</p>
      </div>
    </div>
  );
}

export default LiveDrawItem;
