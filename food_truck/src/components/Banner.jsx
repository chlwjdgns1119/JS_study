import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import './Banner.css';
import Slide1 from '../assets/Slide1.png';
 
const Banner = () => {
  return (
    <div className='banner-swiper'>
      <Swiper
        className='banner-wrapper'
          modules={[Pagination, Navigation, Autoplay]}
          pagination={{
          clickable: true, 
          type: 'bullets',
          }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
      >
        <SwiperSlide className='banner-slide'><img src={Slide1}/></SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
    </div>
  );
};
 
export default Banner;