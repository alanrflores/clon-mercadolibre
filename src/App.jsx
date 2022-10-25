import Home from './components/home/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Layout from './components/layout/Layout';
import Search from './components/search/Search';
import './index.css';



function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}> 
        <Route index element={<Home />} />
        <Route path="/search/:product" element={<Search />} />
        </Route>
      </Routes>
      </BrowserRouter>
  )
}
export default App;
