import React, { useEffect } from 'react'
import { fetchingProduct } from '../../store/features/search/searchSlice'
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styles from './home.module.css';


const Home = () => {
 const data = useSelector((state)=> state.searchs.data);
 const dispatch = useDispatch()




  return (
    <div className={styles.containerHome}>
        <h1>Home</h1>
    </div>
  )
}

export default Home;