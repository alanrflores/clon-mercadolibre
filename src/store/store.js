import { configureStore} from "@reduxjs/toolkit";
import searchReducer from './features/search/searchSlice'
import categoryReducer from './features/categorys/categorySlice'


 const store = configureStore({
  reducer: {
  searchs: searchReducer,
  categorys: categoryReducer
  }
 
});

export default store;