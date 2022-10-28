import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchingCategoryId } from "../../store/features/categorys/categorySlice";
import  "./category.css";
//import Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const CategoryDetail = () => {
  const { id } = useParams();
  const dataId = useSelector((state) => state.categorys.categoryId);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchingCategoryId(id));
  }, []);

  console.log(id);
  return (
    <div className="container-category">
      <div className="container-swipe">
        {/* <Swiper navigation={true} modules={[Navigation]} className="my-swiper">
          <SwiperSlide>
            <img
              classname="img-swiper"
              src="https://http2.mlstatic.com/D_Q_NP_2X_767228-MLA51181835566_082022-G.webp"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              classname="img-swiper"
              src="src=https://http2.mlstatic.com/D_Q_NP_2X_767228-MLA51181835566_082022-G.webp"
              alt=""
            />
          </SwiperSlide>
        </Swiper> */}
      </div>
    </div>
  );
};

export default CategoryDetail;
