import React from 'react'
import { useState } from 'react'
import styles from './input.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchingProduct, searchProduct } from '../../store/features/search/searchSlice';
import { useNavigate, useParams } from 'react-router-dom';




const Input = () => {
  const [searchProduct, setSearchProduct] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((state)=> state.searchs.data);

  const handleSubmit = (e) => {
     e.preventDefault();
      if(searchProduct === "") {
        return
      }
      dispatch(fetchingProduct(searchProduct));
      navigate(`/search/${searchProduct}`)
  };

 
  return (
    <div className={styles.divInput}>
    <form onSubmit={(e)=> handleSubmit(e)} className="flex border-2 rounded">
        <input 
         type="text" 
         className={styles.inputs} 
         placeholder="Buscar productos, marcas y más…"
         onChange={(e)=> setSearchProduct(e.target.value)}
         value={searchProduct || ""}
          />
       <button type='submit'>
            <svg className="w-6 h-6 text-gray-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path
                    d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
            </svg>
        </button> 
    </form>
    <div>
    {/* <ItemsList  items = {result}/> */}
    </div>
</div>
  )
}

export default Input