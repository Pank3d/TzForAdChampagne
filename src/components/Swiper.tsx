import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const SwiperComponent = () => {
  return (
    <div className=" w-full flex items-center">
      <Swiper className="mySwiper w-96">
        <SwiperSlide>
          <img src="../../public/1.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../public/2.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../public/3.png" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
