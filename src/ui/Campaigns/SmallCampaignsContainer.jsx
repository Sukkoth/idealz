import SmallCampagin from "./Small";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";

//Swiper styles
import "swiper/css";
import "swiper/css/pagination";

function SmallCampaignsContainer({ title = "Campaigns" }) {
  return (
    <div>
      <h1 className='font-extrabold text-lg text-gray-900 mt-4'>{title}</h1>
      <Swiper
        slidesPerView={2.2}
        spaceBetween={20}
        className='w-fullborder-2 py-3'
      >
        <SwiperSlide className='w-[45%] shadow-md rounded-2xl'>
          <SmallCampagin />
        </SwiperSlide>
        <SwiperSlide className='w-[45%] shadow-md rounded-2xl'>
          <SmallCampagin />
        </SwiperSlide>
        <SwiperSlide className='w-[45%] shadow-md rounded-2xl'>
          <SmallCampagin />
        </SwiperSlide>
        <SwiperSlide className='w-[45%] shadow-md rounded-2xl'>
          <SmallCampagin />
        </SwiperSlide>
        <SwiperSlide className='w-[45%] shadow-md rounded-2xl'>
          <SmallCampagin />
        </SwiperSlide>
        <SwiperSlide className='w-[45%] shadow-md rounded-2xl'>
          <SmallCampagin />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

SmallCampaignsContainer.propTypes = {
  title: PropTypes.string,
};

export default SmallCampaignsContainer;
