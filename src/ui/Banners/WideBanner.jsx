import smallBannerImg from "../../assets/images/smallBanner3.png";
function WideBanner() {
  return (
    <section className='w-full rounded-2xl h-[6rem] mt-2'>
      <img
        src={smallBannerImg}
        alt=''
        className='w-full h-full object-cover rounded-2xl'
      />
    </section>
  );
}

export default WideBanner;
