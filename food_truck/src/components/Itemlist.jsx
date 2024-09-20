import './Itemlist.css';
import Item from './Item';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

const Itemlist = () => {
    
    return(
        <div className='itemlist-swiper'>
            <Swiper
                className='itemlist-swiper-position'
                modules={[Pagination, Navigation]}
                spaceBetween={10}
                slidesPerView={5}
                navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                }}
            >
                <SwiperSlide className='slide-item'><Item score={4.5} reviewer={64} /></SwiperSlide>
                <SwiperSlide className='slide-item'><Item score={4.5} reviewer={64} /></SwiperSlide>
                <SwiperSlide className='slide-item'><Item score={4.5} reviewer={64} /></SwiperSlide>
                <SwiperSlide className='slide-item'><Item score={4.5} reviewer={64} /></SwiperSlide>
                <SwiperSlide className='slide-item'><Item score={4.5} reviewer={64} /></SwiperSlide>
                <SwiperSlide className='slide-item'><Item score={4.5} reviewer={64} /></SwiperSlide>
                <SwiperSlide className='slide-item'><Item score={4.5} reviewer={64} /></SwiperSlide>
                <SwiperSlide className='slide-item'><Item score={4.5} reviewer={64} /></SwiperSlide>
                <SwiperSlide className='slide-item'><Item score={4.5} reviewer={64} /></SwiperSlide>
                <SwiperSlide className='slide-item'><Item score={4.5} reviewer={64} /></SwiperSlide>
                <SwiperSlide className='slide-item'><Item score={4.5} reviewer={64} /></SwiperSlide>
                <SwiperSlide className='slide-item'><Item score={4.5} reviewer={64} /></SwiperSlide>
                <div className="swiper-button-next itemlist-button-next"></div>
                <div className="swiper-button-prev"></div>
            </Swiper>
            {/* <Item score={ 4.5 } reviewer={183}/>
            <Item />
            <Item />
            <Item />
            <Item /> */}
        </div>
    );
};

export default Itemlist;