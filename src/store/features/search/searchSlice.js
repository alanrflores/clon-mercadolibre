import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  data: [],
  receivedAt: Date.now(),
};

const searchSlice = createSlice({
  name: "searchs",
  initialState,
  reducers: {
    searchProduct: (state) => {
      return {
        ...state,
        loading: true,
      };
    },

    receiveProduct: (state, action) => {
      return {
        ...state,
        loading: false,
        data: action.payload,
        lastUpdated: action.receivedAt,
      };
    },
  },
});

export const { searchProduct, receiveProduct } = searchSlice.actions;

export default searchSlice.reducer;

export const fetchingProduct = (product) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        `https://api.mercadolibre.com/sites/MLA/search?q=${product}`
      );
      console.log(res?.data.results);
      dispatch(receiveProduct(res.data.results));
    } catch (error) {
      console.log("An error ocurred.", error);
    }
  };
};
