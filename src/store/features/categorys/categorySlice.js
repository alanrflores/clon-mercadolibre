import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { receiveProduct } from '../search/searchSlice';

const initialState = {
    loading: false,
    categorys: [],
    allCategorys: [],
    categoryId: {},
}

const categorySlice = createSlice({
    name: "categorys",
    initialState,
    reducers: {
        categoryProduct: (state, action) => {
            return {
                ...state,
                loading: true
            }
        },
        receivedCategory: (state, action) => {
            return {
                ...state,
                loading: false,
                categorys: action.payload,
                allCategorys: action.payload,
                categoryId: action.payload
            }
        },

        }
    }
);

export const { categoryProduct, receivedCategory } = categorySlice.actions;
export default categorySlice.reducer;

export const fetchingCategorys = () => {
    return async(dispatch) => {
        dispatch(categoryProduct());
       try {
         const res = await axios.get('https://api.mercadolibre.com/sites/MLA/categories')
         dispatch(receivedCategory(res.data))
       } catch (error) {
         console.log('Error' , error);
       }
    }
};

export const fetchingCategoryId = (id) => {
    return async(dispatch) => {
        dispatch(categoryProduct());
        try {
            const res = await axios.get(`https://api.mercadolibre.com/categories/${id}`)
            dispatch(receiveProduct(res.data));
        } catch (error) {
            console.log('Error', error)
        }
    }
};
