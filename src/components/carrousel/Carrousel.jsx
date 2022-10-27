import React from "react";
//import Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
import  { Navigation } from "swiper";
// import Swiper styles
import "./carrousel.css";
 // import Swiper and modules styles
 import 'swiper/css';
import "swiper/css/navigation";




const Carrousel = () => {


  return (
    <div className="containerSwiper">
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <div className="divSlide">
        <SwiperSlide><img src="src=https://http2.mlstatic.com/D_Q_NP_2X_767228-MLA51181835566_082022-G.webp" alt="" /></SwiperSlide>
        </div>
        <SwiperSlide><img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/23768062-26f4-492a-a4df-d0242dd5d4ca/air-force-1-07-premium-womens-shoes-6xVZ4x.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://s.yimg.com/ny/api/res/1.2/is8q.DXxVxLJHp4xT85h6g--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://s.yimg.com/os/creatr-uploaded-images/2022-02/114fbbe0-8b52-11ec-afdf-4e1a4f97ce20" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://s.yimg.com/uu/api/res/1.2/glq9IGzbYABC8vbdQvgqMQ--~B/aD04MDA7dz04MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/marieclaire.tw/1d13a227b4d7d501142bfc4228a19560" alt="" /></SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
    </Swiper>
    </div>

  );
};

export default Carrousel;
