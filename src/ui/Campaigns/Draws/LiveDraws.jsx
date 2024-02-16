import { Swiper, SwiperSlide } from "swiper/react";
import LiveDrawItem from "./LiveDrawItem";
import { draws } from '../../../../db.json'

function LiveDraws() {

  return (
    <Swiper slidesPerView={3.2} spaceBetween={10}>
      {
        draws.map((draw) => (
          <SwiperSlide key={draw.id}>
            <LiveDrawItem item={draw} />
          </SwiperSlide>
        ))
      }
    </Swiper>
  );
}

export default LiveDraws;
