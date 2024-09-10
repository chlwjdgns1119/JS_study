import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import './Banner.css';
import Slide1 from '../assets/Slide1.png';
 
const Banner = () => {
  return (
    <div>
        <Swiper
            modules={[Pagination, Navigation]}
            pagination={{
            clickable: true, 
            type: 'bullets',
            }}
            navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            }}
    >
      <SwiperSlide><img src={Slide1}/></SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </Swiper>
    </div>
  );
};
 
export default Banner;