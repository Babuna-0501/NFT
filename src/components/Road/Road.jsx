import './road.scss';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";


const Road = () => {
  return (
    <div className='road'>
        <div className='top'>
            <span>Road Map</span>
             <p>
                 Equi blandis inusam, qui blab ipit quiscii stibus dolenim quis voluptae derrovi dendand untinum et autatus.
                Ent accum nulles andi niet la aut iurios eum ipsunt voloreh endelenis as es ute parum qui ut et lantias nobisi to et id molorio blab iur reius natus, incto inisquis eum recabo. Nequam quibernat.
            </p>
        </div>
        <div className='bottom'>
            <Swiper
            className='slide-wrapper'
            slidesPerView={4}
            navigation={true}
            spaceBetween={30}
            modules={[Pagination, Navigation]}
            className="mySwiper"
            >
                <SwiperSlide className='slide'>
                    <div>0.1</div>
                    <div>7000 NFTs</div>
                    <div>Distribution of 7000 unique Funky Town Cat NFT’s</div>
                </SwiperSlide>
                <SwiperSlide className='slide'>
                    <div>0.2</div>
                    <div>Groovy SHop</div>
                    <div>Introduction of our Groovy Shop.</div>
                </SwiperSlide>
                <SwiperSlide className='slide'>
                    <div>0.3</div>
                    <div>metaverse</div>
                    <div>First version of Funky Town in the Metaverse.</div>
                </SwiperSlide>
                <SwiperSlide className='slide'>
                    <div>0.4</div>
                    <div>real estate</div>
                    <div>Funky Town Cat NFT holders will start receiving their real estate.</div>
                </SwiperSlide>
                <SwiperSlide className='slide'>
                    <div>0.5</div>
                    <div>VR</div>
                    <div>More surprises in the Funky Town Metaverse.</div>
                </SwiperSlide>
                <SwiperSlide className='slide'>
                    <div>0.1</div>
                    <div>7000 NFTs</div>
                    <div>Distribution of 7000 unique Funky Town Cat NFT’s</div>
                </SwiperSlide>
                <SwiperSlide className='slide'>
                    <div>0.2</div>
                    <div>Groovy SHop</div>
                    <div>Introduction of our Groovy Shop.</div>
                </SwiperSlide>
                <SwiperSlide className='slide'>
                    <div>0.3</div>
                    <div>metaverse</div>
                    <div>First version of Funky Town in the Metaverse.</div>
                </SwiperSlide>
                <SwiperSlide className='slide'>
                    <div>0.4</div>
                    <div>real estate</div>
                    <div>Funky Town Cat NFT holders will start receiving their real estate.</div>
                </SwiperSlide>
                <SwiperSlide className='slide'>
                    <div>0.5</div>
                    <div>VR</div>
                    <div>More surprises in the Funky Town Metaverse.</div>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
  )
}

export default Road;