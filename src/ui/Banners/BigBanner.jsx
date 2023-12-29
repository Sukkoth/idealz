import bannerImg from "../../assets/images/bannerTall.jpg";
function BigBanner() {
  return (
    <section className='w-full h-[20rem] md:h-[27rem] bg-blue-400 rounded-3xl mb-6 overflow-hidden'>
      <img src={bannerImg} alt='' className='object-cover w-full h-full' />
    </section>
  );
}

export default BigBanner;
