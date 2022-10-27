import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { fetchingCategoryId } from '../../store/features/categorys/categorySlice';
import Carrousel from '../carrousel/Carrousel';
import styles from './category.module.css';

const CategoryDetail = () => {
  const { id } = useParams();
  const dataId = useSelector((state)=> state.categorys.categoryId);
  const dispatch = useDispatch();

  useEffect(()=> {
   dispatch(fetchingCategoryId(id));
  },[]);

   console.log(id)
  return (
    <div className={styles.containerCategory}>
     <Carrousel />
    </div>
  )
};

export default CategoryDetail;