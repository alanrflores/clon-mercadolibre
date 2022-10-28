import React, { useEffect } from 'react'
import { fetchingProduct } from '../../store/features/search/searchSlice'
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './home.css'
//import Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";



const Home = () => {
 const data = useSelector((state)=> state.searchs.data);
 const dispatch = useDispatch()




  return (
    <div className="container-home">
      <div className="container-swipe">
     <Swiper navigation={true} modules={[Navigation]} className="my-swiper">
     
     <SwiperSlide>
            <img
              src="https://http2.mlstatic.com/D_NQ_857005-MLA52160491972_102022-OO.webp"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              classname="img-swiper"
              src="https://http2.mlstatic.com/D_NQ_821718-MLA52149846786_102022-OO.webp"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              classname="img-swiper"
              src="https://http2.mlstatic.com/D_NQ_665091-MLA52069208934_102022-OO.webp"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              classname="img-swiper"
              src="https://http2.mlstatic.com/D_NQ_633479-MLA52070039987_102022-OO.webp"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              classname="img-swiper"
              src="https://http2.mlstatic.com/D_NQ_771112-MLA52166986829_102022-OO.webp"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              classname="img-swiper"
              src="https://http2.mlstatic.com/D_NQ_666729-MLA52064400336_102022-OO.webp"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
</div>
  )
}

export default Home;