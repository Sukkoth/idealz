import { Swiper, SwiperSlide } from "swiper/react";
import LiveDrawItem from "./LiveDrawItem";

function LiveDraws() {
  return (
    <Swiper slidesPerView={3.2} spaceBetween={10}>
      <SwiperSlide>
        <LiveDrawItem />
      </SwiperSlide>
      <SwiperSlide>
        <LiveDrawItem />
      </SwiperSlide>
      <SwiperSlide>
        <LiveDrawItem />
      </SwiperSlide>
      <SwiperSlide>
        <LiveDrawItem />
      </SwiperSlide>
      <SwiperSlide>
        <LiveDrawItem />
      </SwiperSlide>
      <SwiperSlide>
        <LiveDrawItem />
      </SwiperSlide>
      <SwiperSlide>
        <LiveDrawItem />
      </SwiperSlide>
      <SwiperSlide>
        <LiveDrawItem />
      </SwiperSlide>
    </Swiper>
  );
}

export default LiveDraws;
