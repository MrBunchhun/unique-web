import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "./../App.css"
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import CardMovie from "./CardMovie";

export default function CardTest({movies}) {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        modules={[Pagination, Autoplay, Navigation]}
        autoplay={{
            delay: 7000,
            disableOnInteraction: false
        }}
        navigation={true}
      > 
        {
            movies.map((moive, index) => <SwiperSlide>
                <CardMovie 
                    key={index} 
                    data={moive} 
                />
            </SwiperSlide>)
        }  
      </Swiper>
    </>
  );
}
